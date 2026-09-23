import { DEFAULT_QUICK_ALERT_OPTIONS } from './default';
import type {
  NormalizedQuickAlertOptions,
  QuickAlertAction,
  QuickAlertAsyncHook,
  QuickAlertButtons,
  QuickAlertContent,
  QuickAlertCustomClassMap,
  QuickAlertDismissedBy,
  QuickAlertLifecycleCallback,
  QuickAlertOptions,
  QuickAlertPosition,
  QuickAlertResult,
  QuickAlertTheme,
  QuickAlertType
} from './type';

export type {
  QuickAlertAction,
  QuickAlertAsyncHook,
  QuickAlertButtons,
  QuickAlertButtonVariant,
  QuickAlertContent,
  QuickAlertContentContext,
  QuickAlertCustomClass,
  QuickAlertCustomClassMap,
  QuickAlertDismissedBy,
  QuickAlertLifecycleCallback,
  QuickAlertOptions,
  QuickAlertOpenCallback,
  QuickAlertOpenEvent,
  QuickAlertPosition,
  QuickAlertResult,
  QuickAlertTheme,
  QuickAlertTimerChange,
  QuickAlertTransition,
  QuickAlertType
} from './type';

interface QuickAlertRecord {
  id: string;
  options: NormalizedQuickAlertOptions;
  item: HTMLElement;
  card: HTMLElement;
  previousFocus: HTMLElement | null;
  resolve: (result: QuickAlertResult) => void;
  timeouts: number[];
  intervals: number[];
  listeners: Array<() => void>;
  loadingAction: QuickAlertAction | null;
  timer: QuickAlertTimerState | null;
}

interface QueuedQuickAlertRecord {
  controller: QuickAlertController;
  doc: Document;
  options: NormalizedQuickAlertOptions;
  previousFocus: HTMLElement | null;
  resolve: (result: QuickAlertResult) => void;
}

interface QuickAlertTimerState {
  totalMs: number;
  remainingMs: number;
  running: boolean;
  lastStartedAt: number;
  progressBar: HTMLElement | null;
  lastSecond: number | null;
}

export interface QuickAlertApi {
  fire(options?: QuickAlertOptions): Promise<QuickAlertResult>;
  close(id?: string): void;
  closeAll(): void;
  configure(defaults?: QuickAlertOptions): void;
  resetConfig(): void;
}

const STYLE_ID = 'quick-alert-styles';

const SVG_NS = 'http://www.w3.org/2000/svg';

const TYPE_ICON_PATHS: Record<QuickAlertType, string[]> = {
  success: ['M20 6 9 17l-5-5'],
  error: ['M12 8v5', 'M12 17h.01'],
  warning: ['M12 8v5', 'M12 17h.01'],
  info: ['M12 11v6', 'M12 7h.01'],
  question: ['M9.5 9a2.5 2.5 0 1 1 4.1 1.9c-.8.5-1.6 1.2-1.6 2.1', 'M12 17h.01']
};

const QUICK_ALERT_CSS = `
.quick-alert-root {
  --quick-alert-color: #101010;
  --quick-alert-muted-color: #5f6470;
  --quick-alert-surface: #ffffff;
  --quick-alert-toast-surface: rgba(246, 246, 246, 0.95);
  --quick-alert-overlay: rgba(0, 0, 0, 0.45);
  --quick-alert-progress: #101010;
  --quick-alert-button-bg: #101010;
  --quick-alert-button-hover-bg: #4b5563;
  --quick-alert-button-color: #ffffff;
  --quick-alert-danger: #d92d20;
  --quick-alert-success: #16803c;
  --quick-alert-warning: #b7791f;
  --quick-alert-info: #2563eb;
  color: var(--quick-alert-color);
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.quick-alert-theme-dark {
  --quick-alert-color: #f8fafc;
  --quick-alert-muted-color: #cbd5e1;
  --quick-alert-surface: #0f172a;
  --quick-alert-toast-surface: rgba(15, 23, 42, 0.96);
  --quick-alert-overlay: rgba(2, 6, 23, 0.68);
  --quick-alert-progress: #38bdf8;
  --quick-alert-button-bg: #f8fafc;
  --quick-alert-button-hover-bg: #cbd5e1;
  --quick-alert-button-color: #0f172a;
}

.quick-alert-theme-success {
  --quick-alert-color: #064e3b;
  --quick-alert-muted-color: #047857;
  --quick-alert-surface: #ecfdf5;
  --quick-alert-toast-surface: rgba(236, 253, 245, 0.96);
  --quick-alert-progress: #059669;
  --quick-alert-button-bg: #047857;
  --quick-alert-button-hover-bg: #065f46;
}

.quick-alert-theme-minimal {
  --quick-alert-overlay: rgba(15, 23, 42, 0.25);
  --quick-alert-progress: #64748b;
  box-shadow: none;
}

.quick-alert-theme-glass {
  --quick-alert-surface: rgba(255, 255, 255, 0.76);
  --quick-alert-toast-surface: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(18px);
}

.quick-alert-theme-material {
  border-radius: 4px;
  box-shadow: 0 16px 36px rgba(15, 23, 42, 0.26);
}

.quick-alert-theme-bootstrap {
  --quick-alert-button-bg: #0d6efd;
  --quick-alert-button-hover-bg: #0b5ed7;
  border-radius: 6px;
}

.quick-alert-overlay {
  position: fixed;
  inset: 0;
  z-index: 10000;
  background: var(--quick-alert-overlay);
  backdrop-filter: blur(8px);
}

.quick-alert-card {
  box-sizing: border-box;
  position: fixed;
  z-index: 10001;
  width: min(calc(100vw - 32px), 420px);
  border: 1px solid rgba(17, 24, 39, 0.14);
  border-radius: 12px;
  background: var(--quick-alert-surface);
  box-shadow: 0 24px 70px rgba(15, 23, 42, 0.24);
  padding: 28px;
  text-align: center;
  overflow: hidden;
}

.quick-alert-toast {
  width: min(calc(100vw - 32px), 360px);
  padding: 14px 16px;
  background: var(--quick-alert-toast-surface);
  text-align: left;
  border-top: 3px solid var(--quick-alert-progress);
  box-shadow: 0 16px 48px rgba(15, 23, 42, 0.18);
}

.quick-alert-toast-stack {
  position: fixed;
  z-index: 10001;
  display: grid;
  gap: 12px;
  width: min(calc(100vw - 32px), 360px);
  pointer-events: none;
}

.quick-alert-toast-stack .quick-alert-item,
.quick-alert-toast-stack .quick-alert-toast {
  pointer-events: auto;
}

.quick-alert-toast-stack .quick-alert-toast {
  position: relative;
  inset: auto;
  transform: none;
  width: 100%;
}

.quick-alert-center {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.quick-alert-top-right {
  top: max(20px, env(safe-area-inset-top));
  right: max(20px, env(safe-area-inset-right));
}

.quick-alert-top-left {
  top: max(20px, env(safe-area-inset-top));
  left: max(20px, env(safe-area-inset-left));
}

.quick-alert-bottom-right {
  right: max(20px, env(safe-area-inset-right));
  bottom: max(20px, env(safe-area-inset-bottom));
}

.quick-alert-bottom-left {
  bottom: max(20px, env(safe-area-inset-bottom));
  left: max(20px, env(safe-area-inset-left));
}

.quick-alert-center-left {
  top: 50%;
  left: max(20px, env(safe-area-inset-left));
  transform: translateY(-50%);
}

.quick-alert-center-right {
  top: 50%;
  right: max(20px, env(safe-area-inset-right));
  transform: translateY(-50%);
}

.quick-alert-top-center {
  top: max(20px, env(safe-area-inset-top));
  left: 50%;
  transform: translateX(-50%);
}

.quick-alert-bottom-center {
  bottom: max(20px, env(safe-area-inset-bottom));
  left: 50%;
  transform: translateX(-50%);
}

.quick-alert-slide {
  animation: quick-alert-slide-in 160ms ease-out;
}

.quick-alert-fade {
  animation: quick-alert-fade-in 160ms ease-out;
}

.quick-alert-header {
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
}

.quick-alert-toast .quick-alert-header {
  justify-content: flex-start;
  margin-bottom: 6px;
}

.quick-alert-icon {
  display: inline-flex;
  width: 54px;
  height: 54px;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  border-radius: 999px;
  border: 1px solid currentColor;
  font-size: 18px;
  font-weight: 800;
  line-height: 1;
}

.quick-alert-icon svg {
  width: 28px;
  height: 28px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2.25;
}

.quick-alert-toast .quick-alert-icon {
  width: 36px;
  height: 36px;
}

.quick-alert-toast .quick-alert-icon svg {
  width: 20px;
  height: 20px;
}

.quick-alert-icon-success {
  color: var(--quick-alert-success);
}

.quick-alert-icon-error {
  color: var(--quick-alert-danger);
}

.quick-alert-icon-warning {
  color: var(--quick-alert-warning);
}

.quick-alert-icon-info,
.quick-alert-icon-question {
  color: var(--quick-alert-info);
}

.quick-alert-copy {
  min-width: 0;
}

.quick-alert-title {
  margin: 0;
  color: var(--quick-alert-color);
  font-size: 20px;
  font-weight: 700;
  line-height: 1.25;
}

.quick-alert-toast .quick-alert-title {
  font-size: 15px;
}

.quick-alert-subtitle,
.quick-alert-message,
.quick-alert-footer {
  color: var(--quick-alert-muted-color);
}

.quick-alert-subtitle {
  margin-top: 4px;
  font-size: 15px;
  font-weight: 500;
}

.quick-alert-message {
  margin-top: 10px;
  font-size: 14px;
  line-height: 1.5;
}

.quick-alert-footer {
  margin-top: 12px;
  font-size: 12px;
}

.quick-alert-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  margin-top: 18px;
}

.quick-alert-button {
  border: 0;
  border-radius: 6px;
  background: var(--quick-alert-button-bg);
  color: var(--quick-alert-button-color);
  cursor: pointer;
  font: inherit;
  font-size: 13px;
  font-weight: 700;
  padding: 8px 12px;
}

.quick-alert-button-outline {
  border: 1px solid currentColor;
  background: transparent;
  color: var(--quick-alert-button-bg);
}

.quick-alert-button-ghost {
  background: transparent;
  color: var(--quick-alert-color);
}

.quick-alert-button[disabled],
.quick-alert-close[disabled] {
  cursor: wait;
  opacity: 0.68;
}

.quick-alert-button:hover,
.quick-alert-button:focus-visible {
  background: var(--quick-alert-button-hover-bg);
}

.quick-alert-button-outline:hover,
.quick-alert-button-outline:focus-visible,
.quick-alert-button-ghost:hover,
.quick-alert-button-ghost:focus-visible {
  background: rgba(15, 23, 42, 0.08);
}

.quick-alert-loading {
  cursor: wait;
}

.quick-alert-close {
  position: absolute;
  top: 10px;
  right: 10px;
  display: inline-flex;
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 999px;
  background: rgba(15, 23, 42, 0.07);
  color: var(--quick-alert-color);
  cursor: pointer;
  font: inherit;
  font-size: 18px;
  line-height: 1;
}

.quick-alert-progress {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 3px;
  background: rgba(15, 23, 42, 0.12);
}

.quick-alert-progress-bar {
  width: 100%;
  height: 100%;
  background: var(--quick-alert-progress);
  transition: width 80ms linear;
}

@keyframes quick-alert-fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes quick-alert-slide-in {
  from { opacity: 0; transform: translateY(-8px); }
  to { opacity: 1; }
}

@media (max-width: 640px) {
  .quick-alert-top-right,
  .quick-alert-top-left,
  .quick-alert-bottom-right,
  .quick-alert-bottom-left,
  .quick-alert-top-center,
  .quick-alert-bottom-center {
    right: max(16px, env(safe-area-inset-right));
    left: max(16px, env(safe-area-inset-left));
    transform: none;
    width: auto;
  }

  .quick-alert-center-left,
  .quick-alert-center-right {
    right: max(16px, env(safe-area-inset-right));
    left: max(16px, env(safe-area-inset-left));
    width: auto;
  }
}

@media (prefers-reduced-motion: reduce) {
  .quick-alert-slide,
  .quick-alert-fade {
    animation: none;
  }

  .quick-alert-progress-bar {
    transition: none;
  }
}
`;

class QuickAlertController {
  private static readonly controllers = new Set<QuickAlertController>();
  private static modalQueue: QueuedQuickAlertRecord[] = [];
  private static readonly inertedElements = new WeakMap<Document, Map<HTMLElement, boolean>>();
  private static idCounter = 0;
  private static domIdCounter = 0;

  private active = new Map<string, QuickAlertRecord>();
  private configuredDefaults: QuickAlertOptions = {};
  private listeningForKeys = false;

  constructor(defaults: QuickAlertOptions = {}) {
    this.configuredDefaults = { ...defaults };
    QuickAlertController.controllers.add(this);
  }

  private readonly handleKeydown = (event: KeyboardEvent): void => {
    const modal = this.latestModal();

    if (!modal) {
      return;
    }

    if (event.key === 'Escape') {
      event.preventDefault();

      if (modal.loadingAction) {
        return;
      }

      this.finish(modal, 'close', 'escape');
      return;
    }

    if (event.key === 'Tab') {
      this.trapFocus(event, modal.card);
    }
  };

  fire(options: QuickAlertOptions = {}): Promise<QuickAlertResult> {
    const doc = this.getDocument();

    if (!doc?.body) {
      return Promise.resolve(this.result('quick-alert-ssr', 'close', 'api-close'));
    }

    const merged = this.normalizeOptions({
      ...this.configuredDefaults,
      ...options
    });

    this.ensureStyles(doc);
    this.closeExistingById(merged.id);
    const root = this.ensureRoot(doc);
    const activeModal = QuickAlertController.activeModalForDocument(doc);
    const currentFocus = doc.activeElement instanceof HTMLElement ? doc.activeElement : null;
    const previousFocus = !merged.toast && activeModal?.previousFocus?.isConnected
      ? activeModal.previousFocus
      : currentFocus;

    return new Promise<QuickAlertResult>((resolve) => {
      if (!merged.toast && activeModal) {
        QuickAlertController.modalQueue.push({
          controller: this,
          doc,
          options: merged,
          previousFocus,
          resolve
        });
        return;
      }

      this.activateRecord(doc, root, merged, previousFocus, resolve);
    });
  }

  close(id?: string): void {
    if (id) {
      this.resolveQueuedById(id);
      this.finishActiveById(id);
      return;
    }

    const latest = Array.from(this.active.values()).at(-1);

    if (latest) {
      this.finish(latest, 'close', 'api-close');
    }
  }

  closeAll(): void {
    const queued = [...QuickAlertController.modalQueue];
    QuickAlertController.modalQueue = [];
    queued.forEach((record) => record.controller.completeQueued(record));
    QuickAlertController.controllers.forEach((controller) => {
      Array.from(controller.active.values()).forEach((record) => controller.finish(record, 'close', 'api-close'));
    });
  }

  configure(defaults: QuickAlertOptions = {}): void {
    this.configuredDefaults = { ...defaults };
  }

  resetConfig(): void {
    this.configuredDefaults = {};
  }

  private activateRecord(
    doc: Document,
    root: HTMLElement,
    options: NormalizedQuickAlertOptions,
    previousFocus: HTMLElement | null,
    resolve: (result: QuickAlertResult) => void
  ): void {
    const record = this.render(doc, options, previousFocus, resolve);

    this.active.set(record.id, record);

    if (options.toast) {
      const stack = this.ensureToastStack(doc, root, options.position);
      stack.appendChild(record.item);
    } else {
      root.appendChild(record.item);
    }

    this.syncKeyListener();
    this.syncDocumentInert(doc);
    this.startTimers(record);
    this.safeCall(() => options.onOpen?.({
      id: record.id,
      element: record.item,
      card: record.card
    }));
    this.focusInitialAction(record);
  }

  private render(
    doc: Document,
    options: NormalizedQuickAlertOptions,
    previousFocus: HTMLElement | null,
    resolve: (result: QuickAlertResult) => void
  ): QuickAlertRecord {
    const item = doc.createElement('div');
    item.className = 'quick-alert-item';

    if (!options.toast) {
      const overlay = doc.createElement('div');
      overlay.className = this.classNames('quick-alert-overlay', this.customClassFor(options, 'overlay'));
      item.appendChild(overlay);
    }

    const card = doc.createElement('section');
    card.className = this.cardClass(doc, options);
    card.dataset['quickAlertId'] = options.id;
    card.setAttribute('data-quick-alert-id', options.id);
    card.tabIndex = -1;

    if (options.toast) {
      card.setAttribute('role', 'status');
      card.setAttribute('aria-live', 'polite');
    } else {
      card.setAttribute('role', 'alertdialog');
      card.setAttribute('aria-modal', 'true');
    }

    const domId = this.nextDomId(options.id);
    const titleId = `quick-alert-title-${domId}`;
    const messageId = `quick-alert-message-${domId}`;

    this.renderCloseButton(doc, card, options);
    this.renderContent(doc, card, options, titleId, messageId);

    if (!options.toast) {
      if (options.title) {
        card.setAttribute('aria-labelledby', titleId);
      }

      if (options.message || options.content !== undefined) {
        card.setAttribute('aria-describedby', messageId);
      }

      this.renderActions(doc, card, options);
    }

    item.appendChild(card);

    return {
      id: options.id,
      options,
      item,
      card,
      previousFocus,
      resolve,
      timeouts: [],
      intervals: [],
      listeners: [],
      loadingAction: null,
      timer: null
    };
  }

  private renderCloseButton(doc: Document, card: HTMLElement, options: NormalizedQuickAlertOptions): void {
    if (!options.showCloseButton) {
      return;
    }

    const button = doc.createElement('button');
    button.className = this.classNames(
      'quick-alert-close',
      this.customClassFor(options, 'closeButton'),
      options.closeButtonClass
    );
    button.type = 'button';
    button.textContent = 'x';
    button.setAttribute('aria-label', options.closeAriaLabel || 'Close alert');
    button.setAttribute('data-quick-alert-action', 'close');
    button.addEventListener('click', () => this.finishById(options.id, 'close', 'close-button'));
    card.appendChild(button);
  }

  private renderContent(
    doc: Document,
    card: HTMLElement,
    options: NormalizedQuickAlertOptions,
    titleId: string,
    messageId: string
  ): void {
    const header = doc.createElement('div');
    header.className = 'quick-alert-header';

    if (options.showIcon) {
      header.appendChild(this.renderIcon(doc, options));
    }

    const copy = doc.createElement('div');
    copy.className = 'quick-alert-copy';

    if (options.title) {
      const title = doc.createElement('h2');
      title.className = this.classNames('quick-alert-title', this.customClassFor(options, 'title'));
      title.id = titleId;
      title.textContent = options.title;
      copy.appendChild(title);
    } else {
      card.setAttribute('aria-label', options.ariaLabel || `${options.type} alert`);
    }

    if (options.subtitle) {
      const subtitle = doc.createElement('div');
      subtitle.className = this.classNames('quick-alert-subtitle', this.customClassFor(options, 'subtitle'));
      subtitle.textContent = options.subtitle;
      copy.appendChild(subtitle);
    }

    header.appendChild(copy);
    card.appendChild(header);

    if (options.content !== undefined || options.message) {
      const message = doc.createElement('div');
      message.className = this.classNames('quick-alert-message', this.customClassFor(options, 'message'));
      message.id = messageId;

      if (options.content !== undefined) {
        this.appendContent(doc, message, options.id, options.content);
      } else {
        message.textContent = options.message;
      }

      card.appendChild(message);
    }

    if (options.footer) {
      const footer = doc.createElement('div');
      footer.className = this.classNames('quick-alert-footer', this.customClassFor(options, 'footer'));
      footer.textContent = options.footer;
      card.appendChild(footer);
    }
  }

  private appendContent(
    doc: Document,
    container: HTMLElement,
    id: string,
    content: QuickAlertContent
  ): void {
    const rendered = typeof content === 'function'
      ? content({ id, document: doc })
      : content;

    if (typeof rendered === 'string') {
      container.textContent = rendered;
      return;
    }

    container.appendChild(rendered);
  }

  private renderIcon(doc: Document, options: NormalizedQuickAlertOptions): HTMLElement {
    const icon = doc.createElement('span');
    icon.className = this.classNames(
      'quick-alert-icon',
      `quick-alert-icon-${options.type}`,
      this.customClassFor(options, 'icon')
    );
    icon.setAttribute('aria-hidden', 'true');

    const svg = doc.createElementNS(SVG_NS, 'svg');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('focusable', 'false');

    TYPE_ICON_PATHS[options.type].forEach((pathData) => {
      const path = doc.createElementNS(SVG_NS, 'path');
      path.setAttribute('d', pathData);
      svg.appendChild(path);
    });

    icon.appendChild(svg);

    return icon;
  }

  private renderActions(doc: Document, card: HTMLElement, options: NormalizedQuickAlertOptions): void {
    const actionTypes = this.resolveActions(options);

    if (!actionTypes.length) {
      return;
    }

    const actions = doc.createElement('div');
    actions.className = this.classNames('quick-alert-actions', this.customClassFor(options, 'actions'));

    actionTypes.forEach((action) => {
      actions.appendChild(this.actionButton(doc, options, action, this.labelForAction(options, action)));
    });

    card.appendChild(actions);
  }

  private actionButton(
    doc: Document,
    options: NormalizedQuickAlertOptions,
    action: QuickAlertAction,
    label: string
  ): HTMLButtonElement {
    const button = doc.createElement('button');
    const variant = this.variantForAction(options, action);
    button.className = this.classNames(
      'quick-alert-button',
      `quick-alert-button-${action}`,
      `quick-alert-button-${variant}`,
      this.customClassFor(options, this.buttonClassSlot(action)),
      this.directButtonClass(options, action)
    );
    button.type = 'button';
    button.textContent = label;
    button.setAttribute('aria-label', this.ariaLabelForAction(options, action, label));
    button.setAttribute('data-quick-alert-action', action);
    button.addEventListener('click', () => void this.handleActionById(options.id, action));

    return button;
  }

  private async handleActionById(id: string, action: QuickAlertAction): Promise<void> {
    const record = this.active.get(id);

    if (!record || record.loadingAction) {
      return;
    }

    const hook = this.hookForAction(record.options, action);

    if (!hook) {
      this.finish(record, action, this.dismissedByForAction(action));
      return;
    }

    this.setLoading(record, action, true);

    try {
      const result = await hook();

      if (result === false) {
        this.setLoading(record, action, false);
        return;
      }

      this.finish(record, action, this.dismissedByForAction(action));
    } catch {
      this.setLoading(record, action, false);
    }
  }

  private resolveActions(options: NormalizedQuickAlertOptions): QuickAlertAction[] {
    if (options.buttons) {
      switch (options.buttons) {
        case 'none':
          return [];
        case 'ok':
          return ['ok'];
        case 'confirm':
          return ['confirm'];
        case 'confirm-cancel':
          return ['confirm', 'cancel'];
        case 'confirm-deny-cancel':
          return ['confirm', 'deny', 'cancel'];
      }
    }

    const actions: QuickAlertAction[] = [options.showConfirmButton ? 'confirm' : 'ok'];

    if (options.showDenyButton) {
      actions.push('deny');
    }

    if (options.showCancelButton) {
      actions.push('cancel');
    }

    return actions;
  }

  private labelForAction(options: NormalizedQuickAlertOptions, action: QuickAlertAction): string {
    switch (action) {
      case 'confirm':
        return options.confirmButtonText;
      case 'deny':
        return options.denyButtonText;
      case 'cancel':
        return options.cancelButtonText;
      case 'ok':
      default:
        return options.okButtonText;
    }
  }

  private ariaLabelForAction(
    options: NormalizedQuickAlertOptions,
    action: QuickAlertAction,
    fallback: string
  ): string {
    switch (action) {
      case 'confirm':
        return options.confirmAriaLabel || fallback;
      case 'deny':
        return options.denyAriaLabel || fallback;
      case 'cancel':
        return options.cancelAriaLabel || fallback;
      case 'ok':
      default:
        return options.okAriaLabel || fallback;
    }
  }

  private variantForAction(options: NormalizedQuickAlertOptions, action: QuickAlertAction): string {
    switch (action) {
      case 'confirm':
        return options.confirmButtonVariant || options.buttonVariant;
      case 'deny':
        return options.denyButtonVariant || options.buttonVariant;
      case 'cancel':
        return options.cancelButtonVariant || options.buttonVariant;
      case 'ok':
      default:
        return options.okButtonVariant || options.buttonVariant;
    }
  }

  private directButtonClass(options: NormalizedQuickAlertOptions, action: QuickAlertAction): string {
    switch (action) {
      case 'confirm':
        return options.confirmButtonClass;
      case 'deny':
        return options.denyButtonClass;
      case 'cancel':
        return options.cancelButtonClass;
      case 'ok':
      default:
        return options.okButtonClass;
    }
  }

  private hookForAction(options: NormalizedQuickAlertOptions, action: QuickAlertAction): QuickAlertAsyncHook | undefined {
    if (action === 'confirm') {
      return options.preConfirm;
    }

    if (action === 'deny') {
      return options.preDeny;
    }

    return undefined;
  }

  private setLoading(record: QuickAlertRecord, action: QuickAlertAction, loading: boolean): void {
    record.loadingAction = loading ? action : null;
    record.card.classList.toggle('quick-alert-loading', loading);
    record.card.setAttribute('aria-busy', loading ? 'true' : 'false');

    record.card.querySelectorAll<HTMLButtonElement>('[data-quick-alert-action]').forEach((button) => {
      button.disabled = loading;
    });
  }

  private buttonClassSlot(action: QuickAlertAction): keyof QuickAlertCustomClassMap {
    switch (action) {
      case 'confirm':
        return 'confirmButton';
      case 'deny':
        return 'denyButton';
      case 'cancel':
        return 'cancelButton';
      case 'ok':
      default:
        return 'okButton';
    }
  }

  private startTimers(record: QuickAlertRecord): void {
    if (!record.options.toast || record.options.timeout <= 0) {
      return;
    }

    const view = record.card.ownerDocument.defaultView;

    if (!view) {
      return;
    }

    record.timer = {
      totalMs: record.options.timeout,
      remainingMs: record.options.timeout,
      running: true,
      lastStartedAt: Date.now(),
      progressBar: null,
      lastSecond: null
    };

    if (record.options.pauseOnHover) {
      const pause = () => this.pauseTimer(record);
      const resume = () => this.resumeTimer(record);
      record.card.addEventListener('mouseenter', pause);
      record.card.addEventListener('mouseleave', resume);
      record.listeners.push(() => {
        record.card.removeEventListener('mouseenter', pause);
        record.card.removeEventListener('mouseleave', resume);
      });
    }

    if (record.options.pauseOnFocus) {
      const pause = () => this.pauseTimer(record);
      const resume = () => this.resumeTimer(record);
      record.card.addEventListener('focusin', pause);
      record.card.addEventListener('focusout', resume);
      record.listeners.push(() => {
        record.card.removeEventListener('focusin', pause);
        record.card.removeEventListener('focusout', resume);
      });
    }

    if (record.options.showProgressBar) {
      const progress = record.card.ownerDocument.createElement('div');
      progress.className = this.classNames(
        'quick-alert-progress',
        this.customClassFor(record.options, 'progress')
      );

      const bar = record.card.ownerDocument.createElement('div');
      bar.className = this.classNames(
        'quick-alert-progress-bar',
        this.customClassFor(record.options, 'progressBar')
      );
      progress.appendChild(bar);
      record.card.appendChild(progress);
      record.timer.progressBar = bar;
    }

    this.emitTimerChange(record);
    this.updateProgress(record);

    record.intervals.push(view.setInterval(() => this.tickTimer(record), 50));
  }

  private tickTimer(record: QuickAlertRecord): void {
    const timer = record.timer;

    if (!timer || !timer.running || !this.active.has(record.id)) {
      return;
    }

    const now = Date.now();
    const elapsed = Math.max(0, now - timer.lastStartedAt);
    timer.lastStartedAt = now;
    timer.remainingMs = Math.max(0, timer.remainingMs - elapsed);
    this.updateProgress(record);
    this.emitTimerChange(record);

    if (timer.remainingMs <= 0) {
      this.finish(record, 'timeout', 'timeout');
    }
  }

  private pauseTimer(record: QuickAlertRecord): void {
    const timer = record.timer;

    if (!timer || !timer.running) {
      return;
    }

    const now = Date.now();
    timer.remainingMs = Math.max(0, timer.remainingMs - Math.max(0, now - timer.lastStartedAt));
    timer.running = false;
    this.updateProgress(record);
    this.emitTimerChange(record);
  }

  private resumeTimer(record: QuickAlertRecord): void {
    const timer = record.timer;

    if (!timer || timer.running || timer.remainingMs <= 0) {
      return;
    }

    timer.running = true;
    timer.lastStartedAt = Date.now();
  }

  private updateProgress(record: QuickAlertRecord): void {
    const timer = record.timer;

    if (!timer?.progressBar) {
      return;
    }

    const width = Math.max(0, (timer.remainingMs / timer.totalMs) * 100);
    timer.progressBar.style.width = `${width}%`;
  }

  private emitTimerChange(record: QuickAlertRecord): void {
    const timer = record.timer;

    if (!timer) {
      return;
    }

    const second = Math.ceil(timer.remainingMs / 1000);

    if (timer.lastSecond === second) {
      return;
    }

    timer.lastSecond = second;
    this.safeCall(() => record.options.onTimerChange?.(second, record.id));
  }

  private finishById(id: string, action: QuickAlertAction, dismissedBy: QuickAlertDismissedBy): void {
    const record = this.active.get(id);

    if (record) {
      this.finish(record, action, dismissedBy);
    }
  }

  private finish(record: QuickAlertRecord, action: QuickAlertAction, dismissedBy: QuickAlertDismissedBy): void {
    if (!this.active.has(record.id)) {
      return;
    }

    if (record.timer && dismissedBy === 'timeout') {
      record.timer.remainingMs = 0;
      this.updateProgress(record);
      this.emitTimerChange(record);
    }

    this.clearTimers(record);
    record.listeners.forEach((cleanup) => cleanup());
    record.listeners = [];
    record.item.remove();
    this.active.delete(record.id);
    this.syncKeyListener();
    this.syncDocumentInert(record.card.ownerDocument);
    this.removeRootIfEmpty(record.card.ownerDocument);

    if (!record.options.toast && record.previousFocus?.isConnected) {
      record.previousFocus.focus({ preventScroll: true });
    }

    const result = this.result(record.id, action, dismissedBy);

    this.callLifecycle(record.options, action, result);
    this.safeCall(() => record.options.onClose?.(result));
    record.resolve(result);
    this.activateNextModal(record.card.ownerDocument);
  }

  private clearTimers(record: QuickAlertRecord): void {
    const view = record.card.ownerDocument.defaultView;

    if (!view) {
      return;
    }

    record.timeouts.forEach((timeoutId) => view.clearTimeout(timeoutId));
    record.intervals.forEach((intervalId) => view.clearInterval(intervalId));
    record.timeouts = [];
    record.intervals = [];
  }

  private focusInitialAction(record: QuickAlertRecord): void {
    if (record.options.toast) {
      return;
    }

    const button = record.card.querySelector<HTMLButtonElement>('[data-quick-alert-action]');

    if (button) {
      button.focus({ preventScroll: true });
    } else {
      record.card.focus({ preventScroll: true });
    }
  }

  private trapFocus(event: KeyboardEvent, card: HTMLElement): void {
    const focusable = Array.from(card.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )).filter((element) => !element.hasAttribute('disabled') && element.tabIndex !== -1);

    if (!focusable.length) {
      event.preventDefault();
      card.focus({ preventScroll: true });
      return;
    }

    const first = focusable[0];
    const last = focusable.at(-1);
    const activeElement = card.ownerDocument.activeElement;

    if (!(activeElement instanceof HTMLElement) || !card.contains(activeElement)) {
      event.preventDefault();
      first.focus({ preventScroll: true });
      return;
    }

    if (event.shiftKey && activeElement === first) {
      event.preventDefault();
      last?.focus({ preventScroll: true });
      return;
    }

    if (!event.shiftKey && activeElement === last) {
      event.preventDefault();
      first.focus({ preventScroll: true });
    }
  }

  private latestModal(): QuickAlertRecord | undefined {
    return Array.from(this.active.values()).reverse().find((record) => !record.options.toast);
  }

  private activateNextModal(doc: Document): void {
    if (QuickAlertController.activeModalForDocument(doc) || !QuickAlertController.modalQueue.length) {
      return;
    }

    const nextIndex = QuickAlertController.modalQueue.findIndex((queued) => queued.doc === doc);

    if (nextIndex < 0) {
      return;
    }

    const [next] = QuickAlertController.modalQueue.splice(nextIndex, 1);

    if (!next) {
      return;
    }

    next.controller.activateRecord(doc, next.controller.ensureRoot(doc), next.options, next.previousFocus, next.resolve);
  }

  private closeExistingById(id: string): void {
    this.resolveQueuedById(id);
    this.finishActiveById(id);
  }

  private resolveQueuedById(id: string): boolean {
    const queued = QuickAlertController.modalQueue.filter((record) => record.options.id === id);

    if (!queued.length) {
      return false;
    }

    QuickAlertController.modalQueue = QuickAlertController.modalQueue.filter((record) => record.options.id !== id);
    queued.forEach((record) => record.controller.completeQueued(record));

    return true;
  }

  private completeQueued(record: QueuedQuickAlertRecord): void {
    const result = this.result(record.options.id, 'close', 'api-close');

    this.safeCall(() => record.options.onClose?.(result));
    record.resolve(result);
  }

  private finishActiveById(id: string): boolean {
    let closed = false;

    QuickAlertController.controllers.forEach((controller) => {
      const record = controller.active.get(id);

      if (record) {
        controller.finish(record, 'close', 'api-close');
        closed = true;
      }
    });

    return closed;
  }

  private static activeModalForDocument(doc: Document): QuickAlertRecord | undefined {
    for (const controller of QuickAlertController.controllers) {
      const modal = Array.from(controller.active.values()).find((record) => (
        !record.options.toast && record.card.ownerDocument === doc
      ));

      if (modal) {
        return modal;
      }
    }

    return undefined;
  }

  private static hasActiveModal(doc: Document): boolean {
    return Boolean(QuickAlertController.activeModalForDocument(doc));
  }

  private static inertedElementsFor(doc: Document): Map<HTMLElement, boolean> {
    const existing = QuickAlertController.inertedElements.get(doc);

    if (existing) {
      return existing;
    }

    const inertedElements = new Map<HTMLElement, boolean>();
    QuickAlertController.inertedElements.set(doc, inertedElements);

    return inertedElements;
  }

  private dismissedByForAction(action: QuickAlertAction): QuickAlertDismissedBy {
    switch (action) {
      case 'confirm':
        return 'confirm-button';
      case 'deny':
        return 'deny-button';
      case 'cancel':
        return 'cancel-button';
      case 'ok':
        return 'ok-button';
      case 'timeout':
        return 'timeout';
      case 'close':
      default:
        return 'close-button';
    }
  }

  private syncKeyListener(): void {
    const doc = this.getDocument();

    if (!doc) {
      return;
    }

    const hasModal = Array.from(this.active.values()).some((record) => !record.options.toast);

    if (hasModal && !this.listeningForKeys) {
      doc.addEventListener('keydown', this.handleKeydown);
      this.listeningForKeys = true;
      return;
    }

    if (!hasModal && this.listeningForKeys) {
      doc.removeEventListener('keydown', this.handleKeydown);
      this.listeningForKeys = false;
    }
  }

  private ensureRoot(doc: Document): HTMLElement {
    const existing = doc.querySelector<HTMLElement>('.quick-alert-root');

    if (existing) {
      return existing;
    }

    const root = doc.createElement('div');
    root.className = 'quick-alert-root';
    doc.body.appendChild(root);

    return root;
  }

  private ensureToastStack(doc: Document, root: HTMLElement, position: QuickAlertPosition): HTMLElement {
    const selector = `.quick-alert-toast-stack[data-quick-alert-position="${position}"]`;
    const existing = root.querySelector<HTMLElement>(selector);

    if (existing) {
      return existing;
    }

    const stack = doc.createElement('div');
    stack.className = this.classNames('quick-alert-toast-stack', `quick-alert-${position}`);
    stack.setAttribute('data-quick-alert-position', position);
    root.appendChild(stack);

    return stack;
  }

  private removeRootIfEmpty(doc: Document): void {
    const root = doc.querySelector<HTMLElement>('.quick-alert-root');

    root?.querySelectorAll<HTMLElement>('.quick-alert-toast-stack').forEach((stack) => {
      if (!stack.querySelector('.quick-alert-item')) {
        stack.remove();
      }
    });

    if (root && !root.querySelector('.quick-alert-item')) {
      root.remove();
    }
  }

  private syncDocumentInert(doc: Document): void {
    const hasModal = QuickAlertController.hasActiveModal(doc);
    const root = doc.querySelector<HTMLElement>('.quick-alert-root');
    const inertedElements = QuickAlertController.inertedElementsFor(doc);

    if (hasModal) {
      Array.from(doc.body.children).forEach((child) => {
        if (!(child instanceof HTMLElement) || child === root) {
          return;
        }

        if (!inertedElements.has(child)) {
          inertedElements.set(child, child.inert);
        }

        child.inert = true;
      });

      return;
    }

    inertedElements.forEach((wasInert, element) => {
      element.inert = wasInert;
    });
    inertedElements.clear();
  }

  private ensureStyles(doc: Document): void {
    if (doc.getElementById(STYLE_ID)) {
      return;
    }

    const style = doc.createElement('style');
    style.id = STYLE_ID;
    style.textContent = QUICK_ALERT_CSS;
    doc.head.appendChild(style);
  }

  private normalizeOptions(options: Partial<Omit<NormalizedQuickAlertOptions, 'id'>> & { id?: string }): NormalizedQuickAlertOptions {
    return {
      title: options.title ?? DEFAULT_QUICK_ALERT_OPTIONS.title,
      subtitle: options.subtitle ?? DEFAULT_QUICK_ALERT_OPTIONS.subtitle,
      message: options.message ?? DEFAULT_QUICK_ALERT_OPTIONS.message,
      content: options.content,
      footer: options.footer ?? DEFAULT_QUICK_ALERT_OPTIONS.footer,
      type: options.type ?? DEFAULT_QUICK_ALERT_OPTIONS.type,
      timeout: this.normalizeTimeout(options.timeout),
      toast: options.toast ?? DEFAULT_QUICK_ALERT_OPTIONS.toast,
      position: options.position ?? DEFAULT_QUICK_ALERT_OPTIONS.position,
      transition: options.transition ?? DEFAULT_QUICK_ALERT_OPTIONS.transition,
      theme: options.theme ?? DEFAULT_QUICK_ALERT_OPTIONS.theme,
      buttons: options.buttons ?? DEFAULT_QUICK_ALERT_OPTIONS.buttons,
      showIcon: options.showIcon ?? DEFAULT_QUICK_ALERT_OPTIONS.showIcon,
      showDenyButton: options.showDenyButton ?? DEFAULT_QUICK_ALERT_OPTIONS.showDenyButton,
      showCloseButton: options.showCloseButton ?? DEFAULT_QUICK_ALERT_OPTIONS.showCloseButton,
      showProgressBar: options.showProgressBar ?? DEFAULT_QUICK_ALERT_OPTIONS.showProgressBar,
      showConfirmButton: options.showConfirmButton ?? DEFAULT_QUICK_ALERT_OPTIONS.showConfirmButton,
      showCancelButton: options.showCancelButton ?? DEFAULT_QUICK_ALERT_OPTIONS.showCancelButton,
      confirmButtonText: options.confirmButtonText ?? DEFAULT_QUICK_ALERT_OPTIONS.confirmButtonText,
      okButtonText: options.okButtonText ?? DEFAULT_QUICK_ALERT_OPTIONS.okButtonText,
      cancelButtonText: options.cancelButtonText ?? DEFAULT_QUICK_ALERT_OPTIONS.cancelButtonText,
      denyButtonText: options.denyButtonText ?? DEFAULT_QUICK_ALERT_OPTIONS.denyButtonText,
      ariaLabel: options.ariaLabel ?? DEFAULT_QUICK_ALERT_OPTIONS.ariaLabel,
      confirmAriaLabel: options.confirmAriaLabel ?? DEFAULT_QUICK_ALERT_OPTIONS.confirmAriaLabel,
      denyAriaLabel: options.denyAriaLabel ?? DEFAULT_QUICK_ALERT_OPTIONS.denyAriaLabel,
      cancelAriaLabel: options.cancelAriaLabel ?? DEFAULT_QUICK_ALERT_OPTIONS.cancelAriaLabel,
      okAriaLabel: options.okAriaLabel ?? DEFAULT_QUICK_ALERT_OPTIONS.okAriaLabel,
      closeAriaLabel: options.closeAriaLabel ?? DEFAULT_QUICK_ALERT_OPTIONS.closeAriaLabel,
      confirmButtonClass: options.confirmButtonClass ?? DEFAULT_QUICK_ALERT_OPTIONS.confirmButtonClass,
      denyButtonClass: options.denyButtonClass ?? DEFAULT_QUICK_ALERT_OPTIONS.denyButtonClass,
      cancelButtonClass: options.cancelButtonClass ?? DEFAULT_QUICK_ALERT_OPTIONS.cancelButtonClass,
      okButtonClass: options.okButtonClass ?? DEFAULT_QUICK_ALERT_OPTIONS.okButtonClass,
      closeButtonClass: options.closeButtonClass ?? DEFAULT_QUICK_ALERT_OPTIONS.closeButtonClass,
      buttonVariant: options.buttonVariant ?? DEFAULT_QUICK_ALERT_OPTIONS.buttonVariant,
      confirmButtonVariant: options.confirmButtonVariant ?? options.buttonVariant ?? DEFAULT_QUICK_ALERT_OPTIONS.confirmButtonVariant,
      denyButtonVariant: options.denyButtonVariant ?? options.buttonVariant ?? DEFAULT_QUICK_ALERT_OPTIONS.denyButtonVariant,
      cancelButtonVariant: options.cancelButtonVariant ?? options.buttonVariant ?? DEFAULT_QUICK_ALERT_OPTIONS.cancelButtonVariant,
      okButtonVariant: options.okButtonVariant ?? options.buttonVariant ?? DEFAULT_QUICK_ALERT_OPTIONS.okButtonVariant,
      pauseOnHover: options.pauseOnHover ?? DEFAULT_QUICK_ALERT_OPTIONS.pauseOnHover,
      pauseOnFocus: options.pauseOnFocus ?? DEFAULT_QUICK_ALERT_OPTIONS.pauseOnFocus,
      onTimerChange: options.onTimerChange,
      preConfirm: options.preConfirm,
      preDeny: options.preDeny,
      onOpen: options.onOpen,
      onClose: options.onClose,
      onConfirm: options.onConfirm,
      onDeny: options.onDeny,
      onCancel: options.onCancel,
      onOk: options.onOk,
      onTimeout: options.onTimeout,
      customClass: options.customClass ?? DEFAULT_QUICK_ALERT_OPTIONS.customClass,
      id: options.id || this.nextId()
    };
  }

  private normalizeTimeout(timeout: number | undefined): number {
    if (typeof timeout !== 'number' || !Number.isFinite(timeout)) {
      return DEFAULT_QUICK_ALERT_OPTIONS.timeout;
    }

    return Math.max(0, timeout);
  }

  private cardClass(doc: Document, options: NormalizedQuickAlertOptions): string {
    const resolvedTheme = this.resolveTheme(doc, options.theme);

    return this.classNames(
      'quick-alert-card',
      options.toast ? 'quick-alert-toast' : 'quick-alert-modal',
      `quick-alert-${options.position}`,
      `quick-alert-${options.transition}`,
      options.theme === 'auto' && 'quick-alert-theme-auto',
      `quick-alert-theme-${resolvedTheme}`,
      options.theme !== 'auto' && options.theme !== resolvedTheme && `quick-alert-theme-${options.theme}`,
      this.customClassFor(options, 'popup')
    );
  }

  private resolveTheme(doc: Document, theme: QuickAlertTheme): Exclude<QuickAlertTheme, 'auto'> {
    if (theme !== 'auto') {
      return theme;
    }

    return doc.defaultView?.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'default';
  }

  private customClassFor(
    options: NormalizedQuickAlertOptions,
    slot: keyof QuickAlertCustomClassMap
  ): string {
    if (typeof options.customClass === 'string') {
      return slot === 'popup' ? options.customClass : '';
    }

    return options.customClass[slot] ?? '';
  }

  private classNames(...classes: Array<string | false | null | undefined>): string {
    return classes.filter(Boolean).join(' ');
  }

  private callLifecycle(
    options: NormalizedQuickAlertOptions,
    action: QuickAlertAction,
    result: QuickAlertResult
  ): void {
    const callback = this.lifecycleForAction(options, action);

    this.safeCall(() => callback?.(result));
  }

  private lifecycleForAction(
    options: NormalizedQuickAlertOptions,
    action: QuickAlertAction
  ): QuickAlertLifecycleCallback | undefined {
    switch (action) {
      case 'confirm':
        return options.onConfirm;
      case 'deny':
        return options.onDeny;
      case 'cancel':
        return options.onCancel;
      case 'ok':
        return options.onOk;
      case 'timeout':
        return options.onTimeout;
      case 'close':
      default:
        return undefined;
    }
  }

  private safeCall(callback: () => void): void {
    try {
      callback();
    } catch {
      // Consumer callbacks must not break alert cleanup or promise resolution.
    }
  }

  private result(id: string, action: QuickAlertAction, dismissedBy: QuickAlertDismissedBy): QuickAlertResult {
    return {
      id,
      action,
      dismissedBy,
      isConfirm: action === 'confirm',
      isDeny: action === 'deny',
      isCancel: action === 'cancel',
      isOk: action === 'ok',
      isClose: action === 'close',
      isTimeout: action === 'timeout'
    };
  }

  private nextId(): string {
    QuickAlertController.idCounter += 1;
    return `quick-alert-${QuickAlertController.idCounter}`;
  }

  private nextDomId(id: string): string {
    QuickAlertController.domIdCounter += 1;

    const sanitized = id
      .trim()
      .replace(/[^A-Za-z0-9_-]+/g, '-')
      .replace(/^-+|-+$/g, '') || 'alert';

    return `${sanitized}-${QuickAlertController.domIdCounter}`;
  }

  private getDocument(): Document | null {
    return typeof document === 'undefined' ? null : document;
  }
}

export const createQuickAlert = (defaults: QuickAlertOptions = {}): QuickAlertApi => new QuickAlertController(defaults);

export const quickAlert: QuickAlertApi = createQuickAlert();
