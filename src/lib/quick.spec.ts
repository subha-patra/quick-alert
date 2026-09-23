import { fakeAsync, flushMicrotasks, tick } from '@angular/core/testing';

import { createQuickAlert, quickAlert, type QuickAlertOptions, type QuickAlertResult } from './quick';

describe('quickAlert', () => {
  const click = (selector: string): void => {
    const button = document.querySelector<HTMLButtonElement>(selector);
    expect(button).withContext(selector).not.toBeNull();
    button?.click();
  };

  const fire = (options: QuickAlertOptions = {}): Promise<QuickAlertResult> => quickAlert.fire({
    title: 'Saved',
    message: 'Everything is up to date',
    type: 'success',
    ...options
  });

  const renderedAlertText = (): string => Array
    .from(document.querySelectorAll<HTMLElement>('.quick-alert-card'))
    .map((element) => element.textContent ?? '')
    .join(' ');

  beforeEach(() => {
    quickAlert.configure({});
    quickAlert.closeAll();
    document.querySelectorAll('.quick-alert-root').forEach((node) => node.remove());
  });

  afterEach(() => {
    quickAlert.closeAll();
    document.querySelectorAll('.quick-alert-root').forEach((node) => node.remove());
  });

  it('renders a modal alert through the root API', () => {
    void fire();

    const dialog = document.querySelector<HTMLElement>('.quick-alert-card');

    expect(dialog).not.toBeNull();
    expect(dialog?.getAttribute('role')).toBe('alertdialog');
    expect(dialog?.textContent).toContain('Saved');
    expect(dialog?.textContent).toContain('Everything is up to date');
    expect(document.querySelector('.quick-alert-overlay')).not.toBeNull();
  });

  it('uses an aria-label instead of a missing labelledby target when title is omitted', () => {
    void quickAlert.fire({ message: 'Body only' });

    const dialog = document.querySelector<HTMLElement>('.quick-alert-card');

    expect(dialog?.getAttribute('aria-label')).toBe('success alert');
    expect(dialog?.hasAttribute('aria-labelledby')).toBeFalse();
  });

  it('renders toast mode without an overlay', () => {
    void fire({ toast: true, position: 'top-right' });

    const toast = document.querySelector<HTMLElement>('.quick-alert-card');

    expect(toast?.classList.contains('quick-alert-toast')).toBeTrue();
    expect(toast?.classList.contains('quick-alert-top-right')).toBeTrue();
    expect(toast?.getAttribute('role')).toBe('status');
    expect(document.querySelector('.quick-alert-overlay')).toBeNull();
  });

  it('resolves confirm, deny, cancel, ok, close, and timeout actions', fakeAsync(() => {
    const results: QuickAlertResult[] = [];

    void fire({ showConfirmButton: true }).then((result) => results.push(result));
    click('[data-quick-alert-action="confirm"]');
    tick();

    void fire({ showDenyButton: true }).then((result) => results.push(result));
    click('[data-quick-alert-action="deny"]');
    tick();

    void fire({ showCancelButton: true }).then((result) => results.push(result));
    click('[data-quick-alert-action="cancel"]');
    tick();

    void fire().then((result) => results.push(result));
    click('[data-quick-alert-action="ok"]');
    tick();

    void fire({ showCloseButton: true }).then((result) => results.push(result));
    click('[data-quick-alert-action="close"]');
    tick();

    void fire({ toast: true, timeout: 100, showProgressBar: false }).then((result) => results.push(result));
    tick(100);

    expect(results.map((result) => result.action)).toEqual(['confirm', 'deny', 'cancel', 'ok', 'close', 'timeout']);
    expect(results[0].isConfirm).toBeTrue();
    expect(results[1].isDeny).toBeTrue();
    expect(results[2].isCancel).toBeTrue();
    expect(results[3].isOk).toBeTrue();
    expect(results[4].isClose).toBeTrue();
    expect(results[5].isTimeout).toBeTrue();
  }));

  it('renders useful button presets without the old boolean flags', fakeAsync(() => {
    const results: QuickAlertResult[] = [];

    void fire({ buttons: 'confirm-cancel' }).then((result) => results.push(result));

    expect(document.querySelector('[data-quick-alert-action="confirm"]')).not.toBeNull();
    expect(document.querySelector('[data-quick-alert-action="cancel"]')).not.toBeNull();
    expect(document.querySelector('[data-quick-alert-action="deny"]')).toBeNull();
    expect(document.querySelector('[data-quick-alert-action="ok"]')).toBeNull();

    click('[data-quick-alert-action="cancel"]');
    tick();

    void fire({ buttons: 'confirm-deny-cancel' }).then((result) => results.push(result));

    expect(document.querySelector('[data-quick-alert-action="confirm"]')).not.toBeNull();
    expect(document.querySelector('[data-quick-alert-action="deny"]')).not.toBeNull();
    expect(document.querySelector('[data-quick-alert-action="cancel"]')).not.toBeNull();

    click('[data-quick-alert-action="deny"]');
    tick();

    void fire({ buttons: 'none' }).then((result) => results.push(result));

    expect(document.querySelector('.quick-alert-actions')).toBeNull();
    quickAlert.close();
    tick();

    expect(results.map((result) => result.action)).toEqual(['cancel', 'deny', 'close']);
  }));

  it('lets new button presets override legacy button flags', () => {
    void fire({
      buttons: 'ok',
      showConfirmButton: true,
      showCancelButton: true,
      showDenyButton: true
    });

    expect(document.querySelector('[data-quick-alert-action="ok"]')).not.toBeNull();
    expect(document.querySelector('[data-quick-alert-action="confirm"]')).toBeNull();
    expect(document.querySelector('[data-quick-alert-action="cancel"]')).toBeNull();
    expect(document.querySelector('[data-quick-alert-action="deny"]')).toBeNull();
  });

  it('applies custom classes to alert slots while keeping string customClass support', () => {
    void fire({
      subtitle: 'Secondary detail',
      footer: 'Footer detail',
      showCloseButton: true,
      showConfirmButton: true,
      showCancelButton: true,
      customClass: {
        popup: 'slot-popup',
        overlay: 'slot-overlay',
        icon: 'slot-icon',
        title: 'slot-title',
        subtitle: 'slot-subtitle',
        message: 'slot-message',
        footer: 'slot-footer',
        actions: 'slot-actions',
        confirmButton: 'slot-confirm',
        cancelButton: 'slot-cancel',
        closeButton: 'slot-close'
      }
    });

    expect(document.querySelector('.quick-alert-card')?.classList.contains('slot-popup')).toBeTrue();
    expect(document.querySelector('.quick-alert-overlay')?.classList.contains('slot-overlay')).toBeTrue();
    expect(document.querySelector('.quick-alert-icon')?.classList.contains('slot-icon')).toBeTrue();
    expect(document.querySelector('.quick-alert-title')?.classList.contains('slot-title')).toBeTrue();
    expect(document.querySelector('.quick-alert-subtitle')?.classList.contains('slot-subtitle')).toBeTrue();
    expect(document.querySelector('.quick-alert-message')?.classList.contains('slot-message')).toBeTrue();
    expect(document.querySelector('.quick-alert-footer')?.classList.contains('slot-footer')).toBeTrue();
    expect(document.querySelector('.quick-alert-actions')?.classList.contains('slot-actions')).toBeTrue();
    expect(document.querySelector('[data-quick-alert-action="confirm"]')?.classList.contains('slot-confirm')).toBeTrue();
    expect(document.querySelector('[data-quick-alert-action="cancel"]')?.classList.contains('slot-cancel')).toBeTrue();
    expect(document.querySelector('[data-quick-alert-action="close"]')?.classList.contains('slot-close')).toBeTrue();

    quickAlert.closeAll();
    void fire({ customClass: 'legacy-popup-class' });

    expect(document.querySelector('.quick-alert-card')?.classList.contains('legacy-popup-class')).toBeTrue();
  });

  it('applies custom classes to progress slots', () => {
    void fire({
      toast: true,
      customClass: {
        progress: 'slot-progress',
        progressBar: 'slot-progress-bar'
      }
    });

    expect(document.querySelector('.quick-alert-progress')?.classList.contains('slot-progress')).toBeTrue();
    expect(document.querySelector('.quick-alert-progress-bar')?.classList.contains('slot-progress-bar')).toBeTrue();
  });

  it('renders safe custom content and keeps string content text-only', () => {
    void fire({
      id: 'safe-text-content',
      message: 'Fallback message',
      content: '<strong>Safe text only</strong>'
    });

    const message = document.querySelector<HTMLElement>('.quick-alert-message');

    expect(message?.textContent).toBe('<strong>Safe text only</strong>');
    expect(message?.querySelector('strong')).toBeNull();
    expect(renderedAlertText()).not.toContain('Fallback message');

    quickAlert.closeAll();

    const contentNode = document.createElement('strong');
    contentNode.className = 'safe-dom-content';
    contentNode.textContent = 'DOM content';

    void fire({
      id: 'safe-node-content',
      content: contentNode
    });

    expect(document.querySelector('.quick-alert-message .safe-dom-content')?.textContent).toBe('DOM content');

    quickAlert.closeAll();

    void quickAlert.fire({
      id: 'factory-content',
      content: ({ id, document: factoryDocument }) => {
        const node = factoryDocument.createElement('span');
        node.className = 'factory-content';
        node.textContent = `Factory ${id}`;
        return node;
      }
    });

    expect(document.querySelector('.quick-alert-message .factory-content')?.textContent).toBe('Factory factory-content');
    const describedBy = document
      .querySelector('[data-quick-alert-id="factory-content"]')
      ?.getAttribute('aria-describedby');

    expect(describedBy).toContain('quick-alert-message-factory-content');
    expect(describedBy).not.toContain(' ');
    expect(document.getElementById(describedBy ?? '')?.textContent).toContain('Factory factory-content');
  });

  it('uses safe internal DOM ids for aria references when public ids contain spaces', () => {
    void quickAlert.fire({
      id: 'space filled id',
      title: 'Spaced id',
      content: 'Content only body'
    });

    const card = document.querySelector<HTMLElement>('[data-quick-alert-id="space filled id"]');
    const labelledBy = card?.getAttribute('aria-labelledby') ?? '';
    const describedBy = card?.getAttribute('aria-describedby') ?? '';

    expect(labelledBy).not.toContain(' ');
    expect(describedBy).not.toContain(' ');
    expect(document.getElementById(labelledBy)?.textContent).toBe('Spaced id');
    expect(document.getElementById(describedBy)?.textContent).toBe('Content only body');
  });

  it('calls lifecycle callbacks with the resolved result and ignores callback errors', fakeAsync(() => {
    const events: string[] = [];
    const closed: string[] = [];

    void fire({
      id: 'lifecycle-confirm',
      buttons: 'confirm',
      onOpen: ({ id, element, card }) => {
        events.push(`open:${id}:${element.classList.contains('quick-alert-item')}:${card.classList.contains('quick-alert-card')}`);
      },
      onConfirm: (result) => {
        events.push(`confirm:${result.id}:${result.dismissedBy}`);
        throw new Error('consumer callback failed');
      },
      onClose: (result) => closed.push(`close:${result.action}:${result.dismissedBy}`)
    }).then((result) => events.push(`resolved:${result.action}`));

    click('[data-quick-alert-action="confirm"]');
    tick();

    expect(events).toEqual([
      'open:lifecycle-confirm:true:true',
      'confirm:lifecycle-confirm:confirm-button',
      'resolved:confirm'
    ]);
    expect(closed).toEqual(['close:confirm:confirm-button']);
    expect(document.querySelector('[data-quick-alert-id="lifecycle-confirm"]')).toBeNull();
  }));

  it('calls action-specific lifecycle callbacks for deny, cancel, ok, and timeout', fakeAsync(() => {
    const events: string[] = [];

    void fire({
      id: 'lifecycle-deny',
      buttons: 'confirm-deny-cancel',
      onDeny: (result) => events.push(`deny:${result.dismissedBy}`),
      onClose: (result) => events.push(`close:${result.action}`)
    });
    click('[data-quick-alert-action="deny"]');
    tick();

    void fire({
      id: 'lifecycle-cancel',
      buttons: 'confirm-cancel',
      onCancel: (result) => events.push(`cancel:${result.dismissedBy}`)
    });
    click('[data-quick-alert-action="cancel"]');
    tick();

    void fire({
      id: 'lifecycle-ok',
      onOk: (result) => events.push(`ok:${result.dismissedBy}`)
    });
    click('[data-quick-alert-action="ok"]');
    tick();

    void fire({
      id: 'lifecycle-timeout',
      toast: true,
      timeout: 100,
      showProgressBar: false,
      onTimeout: (result) => events.push(`timeout:${result.dismissedBy}`)
    });
    tick(100);

    expect(events).toEqual([
      'deny:deny-button',
      'close:deny',
      'cancel:cancel-button',
      'ok:ok-button',
      'timeout:timeout'
    ]);
  }));

  it('cleans up with close and closeAll', fakeAsync(() => {
    const results: QuickAlertResult[] = [];

    void fire({ id: 'first' }).then((result) => results.push(result));
    void fire({ id: 'second', toast: true }).then((result) => results.push(result));

    quickAlert.close('first');
    tick();

    expect(document.querySelector('[data-quick-alert-id="first"]')).toBeNull();
    expect(document.querySelector('[data-quick-alert-id="second"]')).not.toBeNull();

    quickAlert.closeAll();
    tick();

    expect(document.querySelector('.quick-alert-card')).toBeNull();
    expect(results.map((result) => result.action)).toEqual(['close', 'close']);
  }));

  it('queues modal alerts while allowing toast alerts to stack immediately', fakeAsync(() => {
    const results: QuickAlertResult[] = [];

    void fire({ id: 'first-modal', title: 'First modal' }).then((result) => results.push(result));
    void fire({ id: 'second-modal', title: 'Second modal' }).then((result) => results.push(result));
    void fire({ id: 'top-toast-a', title: 'Toast A', toast: true, position: 'top-right' }).then((result) => results.push(result));
    void fire({ id: 'top-toast-b', title: 'Toast B', toast: true, position: 'top-right' }).then((result) => results.push(result));

    expect(document.querySelectorAll('.quick-alert-modal').length).toBe(1);
    expect(document.body.textContent).toContain('First modal');
    expect(document.body.textContent).not.toContain('Second modal');

    const stack = document.querySelector<HTMLElement>('.quick-alert-toast-stack.quick-alert-top-right');
    expect(stack).not.toBeNull();
    expect(stack?.querySelectorAll('.quick-alert-toast').length).toBe(2);

    click('[data-quick-alert-action="ok"]');
    tick();

    expect(results[0].id).toBe('first-modal');
    expect(results[0].dismissedBy).toBe('ok-button');
    expect(document.body.textContent).toContain('Second modal');
    expect(document.querySelectorAll('.quick-alert-modal').length).toBe(1);

    quickAlert.close('second-modal');
    tick();

    expect(results[1].id).toBe('second-modal');
    expect(results[1].dismissedBy).toBe('api-close');
  }));

  it('closes queued alerts by id and clears active plus queued alerts with closeAll', fakeAsync(() => {
    const results: QuickAlertResult[] = [];

    void fire({ id: 'active-modal', title: 'Active modal' }).then((result) => results.push(result));
    void fire({ id: 'queued-modal', title: 'Queued modal' }).then((result) => results.push(result));

    quickAlert.close('queued-modal');
    tick();

    expect(results[0]).toEqual(jasmine.objectContaining({
      id: 'queued-modal',
      action: 'close',
      dismissedBy: 'api-close'
    }));
    expect(document.body.textContent).not.toContain('Queued modal');

    quickAlert.closeAll();
    tick();

    expect(results[1]).toEqual(jasmine.objectContaining({
      id: 'active-modal',
      dismissedBy: 'api-close'
    }));
    expect(document.querySelector('.quick-alert-card')).toBeNull();
  }));

  it('replaces an active alert with the same id instead of orphaning DOM nodes', fakeAsync(() => {
    const results: QuickAlertResult[] = [];

    void fire({ id: 'duplicate-toast', title: 'First toast', toast: true, timeout: 0 }).then((result) => results.push(result));
    void fire({ id: 'duplicate-toast', title: 'Second toast', toast: true, timeout: 0 }).then((result) => results.push(result));
    tick();

    expect(document.querySelectorAll('[data-quick-alert-id="duplicate-toast"]').length).toBe(1);
    expect(renderedAlertText()).not.toContain('First toast');
    expect(renderedAlertText()).toContain('Second toast');
    expect(results[0]).toEqual(jasmine.objectContaining({
      id: 'duplicate-toast',
      action: 'close',
      dismissedBy: 'api-close'
    }));

    quickAlert.close('duplicate-toast');
    tick();

    expect(results[1]).toEqual(jasmine.objectContaining({
      id: 'duplicate-toast',
      dismissedBy: 'api-close'
    }));
  }));

  it('uses globally unique generated ids across alert controllers', fakeAsync(() => {
    const firstAlert = createQuickAlert();
    const secondAlert = createQuickAlert();

    void firstAlert.fire({ title: 'First generated id', toast: true, timeout: 0 });
    void secondAlert.fire({ title: 'Second generated id', toast: true, timeout: 0 });

    const cards = Array.from(document.querySelectorAll<HTMLElement>('.quick-alert-card'));
    const ids = cards.map((card) => card.getAttribute('data-quick-alert-id'));

    expect(cards.length).toBe(2);
    expect(new Set(ids).size).toBe(2);
    expect(renderedAlertText()).toContain('First generated id');
    expect(renderedAlertText()).toContain('Second generated id');

    firstAlert.closeAll();
    secondAlert.closeAll();
    tick();
  }));

  it('restores the original page focus after queued modals finish', fakeAsync(() => {
    const opener = document.createElement('button');
    opener.type = 'button';
    opener.textContent = 'Open alerts';
    document.body.appendChild(opener);
    opener.focus();

    void fire({ id: 'focus-first', title: 'First modal' });
    void fire({ id: 'focus-second', title: 'Second modal' });

    click('[data-quick-alert-action="ok"]');
    tick();
    click('[data-quick-alert-action="ok"]');
    tick();

    expect(document.activeElement).toBe(opener);

    opener.remove();
  }));

  it('queues modal alerts across scoped alert controllers', fakeAsync(() => {
    const scopedAlert = createQuickAlert({ type: 'warning' });

    void fire({ id: 'root-modal', title: 'Root modal' });
    void scopedAlert.fire({ id: 'scoped-modal', title: 'Scoped modal' });

    expect(document.querySelectorAll('.quick-alert-modal').length).toBe(1);
    expect(renderedAlertText()).toContain('Root modal');
    expect(renderedAlertText()).not.toContain('Scoped modal');

    click('[data-quick-alert-action="ok"]');
    tick();

    expect(document.querySelectorAll('.quick-alert-modal').length).toBe(1);
    expect(renderedAlertText()).toContain('Scoped modal');

    scopedAlert.closeAll();
  }));

  it('moves focus back inside the modal when tab starts outside the dialog', () => {
    const outside = document.createElement('button');
    outside.type = 'button';
    outside.textContent = 'Outside';
    document.body.appendChild(outside);

    void fire({ buttons: 'confirm-cancel' });
    outside.focus();

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Tab' }));

    expect(document.activeElement?.getAttribute('data-quick-alert-action')).toBe('confirm');

    outside.remove();
  });

  it('does not leak configured options between alerts', () => {
    quickAlert.configure({ type: 'error', confirmButtonText: 'Delete' });
    void quickAlert.fire({ title: 'First', showConfirmButton: true });

    expect(document.querySelector('.quick-alert-icon-error')).not.toBeNull();
    expect(document.querySelector('[data-quick-alert-action="confirm"]')?.textContent).toContain('Delete');

    quickAlert.configure({});
    quickAlert.closeAll();
    void quickAlert.fire({ title: 'Second' });

    expect(document.querySelector('.quick-alert-icon-success')).not.toBeNull();
    expect(document.querySelector('[data-quick-alert-action="ok"]')?.textContent).toContain('OK');
    expect(document.body.textContent).not.toContain('Delete');
  });

  it('can reset global config defaults', () => {
    quickAlert.configure({ type: 'error', confirmButtonText: 'Delete' });
    quickAlert.resetConfig();

    void quickAlert.fire({ title: 'After reset', showConfirmButton: true });

    expect(document.querySelector('.quick-alert-icon-success')).not.toBeNull();
    expect(document.querySelector('[data-quick-alert-action="confirm"]')?.textContent).toContain('Confirm');
  });

  it('creates isolated alert controllers with their own defaults', () => {
    const scopedAlert = createQuickAlert({ type: 'warning', confirmButtonText: 'Archive' });

    void scopedAlert.fire({ title: 'Scoped', showConfirmButton: true });

    expect(document.querySelector('.quick-alert-icon-warning')).not.toBeNull();
    expect(document.querySelector('[data-quick-alert-action="confirm"]')?.textContent).toContain('Archive');

    scopedAlert.closeAll();
    void quickAlert.fire({ title: 'Root', showConfirmButton: true });

    expect(document.querySelector('.quick-alert-icon-success')).not.toBeNull();
    expect(document.querySelector('[data-quick-alert-action="confirm"]')?.textContent).toContain('Confirm');
  });

  it('renders inline svg icons and can hide them', () => {
    void fire({ type: 'success' });

    expect(document.querySelector('.quick-alert-icon svg')).not.toBeNull();
    expect(document.querySelector('.quick-alert-icon')?.textContent?.trim()).toBe('');

    quickAlert.closeAll();
    void fire({ showIcon: false });

    expect(document.querySelector('.quick-alert-icon')).toBeNull();
  });

  it('uses a 4 second default toast timeout while explicit timeout still wins', fakeAsync(() => {
    void fire({ toast: true, showProgressBar: false });

    tick(3999);
    expect(document.querySelector('.quick-alert-card')).not.toBeNull();

    tick(1);
    expect(document.querySelector('.quick-alert-card')).toBeNull();

    void fire({ toast: true, timeout: 100, showProgressBar: false });
    tick(100);

    expect(document.querySelector('.quick-alert-card')).toBeNull();
  }));

  it('renders side panel position classes for side-style alerts', () => {
    void fire({ position: 'center-left' });

    expect(document.querySelector('.quick-alert-center-left')).not.toBeNull();

    quickAlert.closeAll();
    void fire({ position: 'center-right' });

    expect(document.querySelector('.quick-alert-center-right')).not.toBeNull();
  });

  it('is safe when its document lookup returns no browser document', fakeAsync(() => {
    const alertForSsr = quickAlert as unknown as {
      getDocument: () => Document | null;
      fire: typeof quickAlert.fire;
    };
    const getDocument = alertForSsr.getDocument;
    const results: QuickAlertResult[] = [];
    const contentFactory = jasmine.createSpy('contentFactory');
    const onOpen = jasmine.createSpy('onOpen');
    const originalMatchMedia = window.matchMedia;
    const matchMedia = jasmine.createSpy('matchMedia');

    alertForSsr.getDocument = () => null;
    Object.defineProperty(window, 'matchMedia', {
      configurable: true,
      value: matchMedia
    });

    void alertForSsr.fire({
      title: 'SSR safe',
      theme: 'auto',
      content: contentFactory,
      onOpen
    }).then((result) => results.push(result));
    tick();

    alertForSsr.getDocument = getDocument;
    Object.defineProperty(window, 'matchMedia', {
      configurable: true,
      value: originalMatchMedia
    });

    expect(results[0].action).toBe('close');
    expect(results[0].isClose).toBeTrue();
    expect(contentFactory).not.toHaveBeenCalled();
    expect(onOpen).not.toHaveBeenCalled();
    expect(matchMedia).not.toHaveBeenCalled();
  }));

  it('closes with Escape and restores focus', fakeAsync(() => {
    const opener = document.createElement('button');
    opener.type = 'button';
    opener.textContent = 'Open';
    document.body.appendChild(opener);
    opener.focus();

    const results: QuickAlertResult[] = [];
    void fire({ showCancelButton: true }).then((result) => results.push(result));

    expect(document.activeElement?.getAttribute('data-quick-alert-action')).toBe('ok');

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    tick();

    expect(results[0].action).toBe('close');
    expect(results[0].dismissedBy).toBe('escape');
    expect(document.activeElement).toBe(opener);

    opener.remove();
  }));

  it('cleans progress timers when a toast is closed manually', fakeAsync(() => {
    void fire({ toast: true, timeout: 1000, showProgressBar: true });

    const progress = document.querySelector<HTMLElement>('.quick-alert-progress-bar');
    expect(progress).not.toBeNull();

    quickAlert.closeAll();
    tick(1000);

    expect(document.querySelector('.quick-alert-card')).toBeNull();
  }));

  it('supports theme classes, direct button classes, button variants, and accessible labels', () => {
    const sibling = document.createElement('main');
    sibling.textContent = 'Page content';
    document.body.appendChild(sibling);

    void fire({
      theme: 'dark',
      title: '',
      ariaLabel: 'Session expired alert',
      buttons: 'confirm-deny-cancel',
      showCloseButton: true,
      confirmAriaLabel: 'Approve transfer',
      denyAriaLabel: 'Reject transfer',
      cancelAriaLabel: 'Review later',
      closeAriaLabel: 'Close session alert',
      buttonVariant: 'outline',
      confirmButtonVariant: 'solid',
      denyButtonClass: 'danger-deny',
      cancelButtonClass: 'quiet-cancel',
      closeButtonClass: 'brand-close'
    });

    const card = document.querySelector<HTMLElement>('.quick-alert-card');
    const confirm = document.querySelector<HTMLButtonElement>('[data-quick-alert-action="confirm"]');
    const deny = document.querySelector<HTMLButtonElement>('[data-quick-alert-action="deny"]');
    const cancel = document.querySelector<HTMLButtonElement>('[data-quick-alert-action="cancel"]');
    const close = document.querySelector<HTMLButtonElement>('[data-quick-alert-action="close"]');
    const styles = document.getElementById('quick-alert-styles')?.textContent ?? '';

    expect(card?.classList.contains('quick-alert-theme-dark')).toBeTrue();
    expect(card?.getAttribute('aria-label')).toBe('Session expired alert');
    expect(confirm?.getAttribute('aria-label')).toBe('Approve transfer');
    expect(confirm?.classList.contains('quick-alert-button-solid')).toBeTrue();
    expect(deny?.getAttribute('aria-label')).toBe('Reject transfer');
    expect(deny?.classList.contains('danger-deny')).toBeTrue();
    expect(deny?.classList.contains('quick-alert-button-outline')).toBeTrue();
    expect(cancel?.classList.contains('quiet-cancel')).toBeTrue();
    expect(close?.getAttribute('aria-label')).toBe('Close session alert');
    expect(close?.classList.contains('brand-close')).toBeTrue();
    expect(styles).toContain('@media (prefers-reduced-motion: reduce)');
    expect(sibling.inert).toBeTrue();

    quickAlert.closeAll();

    expect(sibling.inert).toBeFalse();
    sibling.remove();
  });

  it('resolves auto theme from the current color-scheme preference', () => {
    const originalMatchMedia = window.matchMedia;
    const setMatchMedia = (matches: boolean): void => {
      Object.defineProperty(window, 'matchMedia', {
        configurable: true,
        value: jasmine.createSpy('matchMedia').and.callFake((query: string) => ({
          matches,
          media: query,
          onchange: null,
          addListener: () => undefined,
          removeListener: () => undefined,
          addEventListener: () => undefined,
          removeEventListener: () => undefined,
          dispatchEvent: () => false
        } as MediaQueryList))
      });
    };

    try {
      setMatchMedia(true);
      void fire({ id: 'auto-dark-theme', theme: 'auto' });

      let card = document.querySelector<HTMLElement>('[data-quick-alert-id="auto-dark-theme"]');
      expect(card?.classList.contains('quick-alert-theme-auto')).toBeTrue();
      expect(card?.classList.contains('quick-alert-theme-dark')).toBeTrue();
      expect(window.matchMedia).toHaveBeenCalledWith('(prefers-color-scheme: dark)');

      quickAlert.closeAll();

      setMatchMedia(false);
      void fire({ id: 'auto-default-theme', theme: 'auto' });

      card = document.querySelector<HTMLElement>('[data-quick-alert-id="auto-default-theme"]');
      expect(card?.classList.contains('quick-alert-theme-auto')).toBeTrue();
      expect(card?.classList.contains('quick-alert-theme-default')).toBeTrue();
    } finally {
      Object.defineProperty(window, 'matchMedia', {
        configurable: true,
        value: originalMatchMedia
      });
    }
  });

  it('keeps alerts open while async confirm or deny handlers are loading', fakeAsync(() => {
    const results: QuickAlertResult[] = [];
    let finishConfirm!: () => void;
    let rejectDeny!: () => void;

    void fire({
      id: 'async-confirm',
      buttons: 'confirm',
      preConfirm: () => new Promise<void>((resolve) => {
        finishConfirm = resolve;
      })
    }).then((result) => results.push(result));

    click('[data-quick-alert-action="confirm"]');
    tick();

    const confirmButton = document.querySelector<HTMLButtonElement>('[data-quick-alert-action="confirm"]');
    expect(confirmButton?.disabled).toBeTrue();
    expect(document.querySelector('.quick-alert-card')?.classList.contains('quick-alert-loading')).toBeTrue();
    expect(document.querySelector('.quick-alert-card')?.getAttribute('aria-busy')).toBe('true');

    finishConfirm();
    flushMicrotasks();
    tick();

    expect(results[0]).toEqual(jasmine.objectContaining({
      id: 'async-confirm',
      action: 'confirm',
      dismissedBy: 'confirm-button'
    }));

    void fire({
      id: 'async-deny',
      buttons: 'confirm-deny-cancel',
      preDeny: () => new Promise<void>((_resolve, reject) => {
        rejectDeny = reject;
      })
    }).then((result) => results.push(result));

    click('[data-quick-alert-action="deny"]');
    tick();
    rejectDeny();
    flushMicrotasks();
    tick();

    expect(document.querySelector('[data-quick-alert-id="async-deny"]')).not.toBeNull();
    expect(results.length).toBe(1);
  }));

  it('does not close with Escape while an async action is loading', fakeAsync(() => {
    const results: QuickAlertResult[] = [];
    let finishConfirm!: () => void;

    void fire({
      id: 'escape-loading',
      buttons: 'confirm',
      preConfirm: () => new Promise<void>((resolve) => {
        finishConfirm = resolve;
      })
    }).then((result) => results.push(result));

    click('[data-quick-alert-action="confirm"]');
    tick();
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    tick();

    expect(document.querySelector('[data-quick-alert-id="escape-loading"]')).not.toBeNull();
    expect(results.length).toBe(0);

    finishConfirm();
    flushMicrotasks();
    tick();

    expect(results[0]).toEqual(jasmine.objectContaining({
      id: 'escape-loading',
      action: 'confirm'
    }));
  }));

  it('pauses toast timers on hover or focus and emits remaining seconds', fakeAsync(() => {
    const timerValues: number[] = [];

    void fire({
      id: 'pausing-toast',
      toast: true,
      timeout: 3000,
      pauseOnHover: true,
      pauseOnFocus: true,
      onTimerChange: (remaining) => timerValues.push(remaining)
    });

    const toast = document.querySelector<HTMLElement>('[data-quick-alert-id="pausing-toast"]');
    expect(timerValues[0]).toBe(3);

    tick(1000);
    expect(timerValues).toContain(2);

    toast?.dispatchEvent(new Event('mouseenter'));
    tick(5000);
    expect(document.querySelector('[data-quick-alert-id="pausing-toast"]')).not.toBeNull();

    toast?.dispatchEvent(new Event('mouseleave'));
    tick(2000);

    expect(timerValues).toContain(0);
    expect(document.querySelector('[data-quick-alert-id="pausing-toast"]')).toBeNull();
  }));

  it('ignores timer callback errors during timeout cleanup', fakeAsync(() => {
    const results: QuickAlertResult[] = [];

    expect(() => {
      void fire({
        id: 'throwing-timer',
        toast: true,
        timeout: 100,
        showProgressBar: false,
        onTimerChange: () => {
          throw new Error('consumer timer failed');
        }
      }).then((result) => results.push(result));
    }).not.toThrow();

    tick(100);

    expect(document.querySelector('[data-quick-alert-id="throwing-timer"]')).toBeNull();
    expect(results[0]).toEqual(jasmine.objectContaining({
      id: 'throwing-timer',
      action: 'timeout'
    }));
  }));
});
