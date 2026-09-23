export type QuickAlertAction =
  | 'confirm'
  | 'deny'
  | 'cancel'
  | 'ok'
  | 'close'
  | 'timeout';

export type QuickAlertDismissedBy =
  | 'confirm-button'
  | 'deny-button'
  | 'cancel-button'
  | 'ok-button'
  | 'close-button'
  | 'escape'
  | 'timeout'
  | 'api-close';

export type QuickAlertType = 'success' | 'error' | 'warning' | 'info' | 'question';

export type QuickAlertPosition =
  | 'top-right'
  | 'top-left'
  | 'bottom-right'
  | 'bottom-left'
  | 'center'
  | 'center-left'
  | 'center-right'
  | 'top-center'
  | 'bottom-center';

export type QuickAlertTransition = 'fade' | 'slide';

export type QuickAlertButtons =
  | 'ok'
  | 'confirm'
  | 'confirm-cancel'
  | 'confirm-deny-cancel'
  | 'none';

export type QuickAlertTheme =
  | 'default'
  | 'dark'
  | 'auto'
  | 'success'
  | 'minimal'
  | 'glass'
  | 'material'
  | 'bootstrap';

export type QuickAlertButtonVariant = 'solid' | 'outline' | 'ghost';

export type QuickAlertAsyncHook = () => void | boolean | Promise<void | boolean>;

export type QuickAlertTimerChange = (remainingSeconds: number, id: string) => void;

export interface QuickAlertContentContext {
  id: string;
  document: Document;
}

export type QuickAlertContent =
  | string
  | Node
  | ((context: QuickAlertContentContext) => string | Node);

export interface QuickAlertOpenEvent {
  id: string;
  element: HTMLElement;
  card: HTMLElement;
}

export type QuickAlertOpenCallback = (event: QuickAlertOpenEvent) => void;

export type QuickAlertLifecycleCallback = (result: QuickAlertResult) => void;

export interface QuickAlertCustomClassMap {
  popup?: string;
  overlay?: string;
  icon?: string;
  title?: string;
  subtitle?: string;
  message?: string;
  footer?: string;
  actions?: string;
  okButton?: string;
  confirmButton?: string;
  denyButton?: string;
  cancelButton?: string;
  closeButton?: string;
  progress?: string;
  progressBar?: string;
}

export type QuickAlertCustomClass = string | QuickAlertCustomClassMap;

export interface QuickAlertOptions {
  id?: string;
  title?: string;
  subtitle?: string;
  message?: string;
  content?: QuickAlertContent;
  footer?: string;
  type?: QuickAlertType;
  timeout?: number;
  toast?: boolean;
  position?: QuickAlertPosition;
  transition?: QuickAlertTransition;
  theme?: QuickAlertTheme;
  buttons?: QuickAlertButtons;
  showIcon?: boolean;
  showDenyButton?: boolean;
  showCloseButton?: boolean;
  showProgressBar?: boolean;
  showConfirmButton?: boolean;
  showCancelButton?: boolean;
  confirmButtonText?: string;
  okButtonText?: string;
  cancelButtonText?: string;
  denyButtonText?: string;
  ariaLabel?: string;
  confirmAriaLabel?: string;
  denyAriaLabel?: string;
  cancelAriaLabel?: string;
  okAriaLabel?: string;
  closeAriaLabel?: string;
  confirmButtonClass?: string;
  denyButtonClass?: string;
  cancelButtonClass?: string;
  okButtonClass?: string;
  closeButtonClass?: string;
  buttonVariant?: QuickAlertButtonVariant;
  confirmButtonVariant?: QuickAlertButtonVariant;
  denyButtonVariant?: QuickAlertButtonVariant;
  cancelButtonVariant?: QuickAlertButtonVariant;
  okButtonVariant?: QuickAlertButtonVariant;
  pauseOnHover?: boolean;
  pauseOnFocus?: boolean;
  onTimerChange?: QuickAlertTimerChange;
  preConfirm?: QuickAlertAsyncHook;
  preDeny?: QuickAlertAsyncHook;
  onOpen?: QuickAlertOpenCallback;
  onClose?: QuickAlertLifecycleCallback;
  onConfirm?: QuickAlertLifecycleCallback;
  onDeny?: QuickAlertLifecycleCallback;
  onCancel?: QuickAlertLifecycleCallback;
  onOk?: QuickAlertLifecycleCallback;
  onTimeout?: QuickAlertLifecycleCallback;
  customClass?: QuickAlertCustomClass;
}

export interface QuickAlertResult {
  id: string;
  action: QuickAlertAction;
  dismissedBy: QuickAlertDismissedBy;
  isConfirm: boolean;
  isDeny: boolean;
  isCancel: boolean;
  isOk: boolean;
  isClose: boolean;
  isTimeout: boolean;
}

export type NormalizedQuickAlertOptions = Required<Omit<
  QuickAlertOptions,
  | 'id'
  | 'buttons'
  | 'content'
  | 'customClass'
  | 'onTimerChange'
  | 'preConfirm'
  | 'preDeny'
  | 'onOpen'
  | 'onClose'
  | 'onConfirm'
  | 'onDeny'
  | 'onCancel'
  | 'onOk'
  | 'onTimeout'
>> & {
  id: string;
  buttons: QuickAlertButtons | null;
  content?: QuickAlertContent;
  customClass: QuickAlertCustomClass;
  onTimerChange?: QuickAlertTimerChange;
  preConfirm?: QuickAlertAsyncHook;
  preDeny?: QuickAlertAsyncHook;
  onOpen?: QuickAlertOpenCallback;
  onClose?: QuickAlertLifecycleCallback;
  onConfirm?: QuickAlertLifecycleCallback;
  onDeny?: QuickAlertLifecycleCallback;
  onCancel?: QuickAlertLifecycleCallback;
  onOk?: QuickAlertLifecycleCallback;
  onTimeout?: QuickAlertLifecycleCallback;
};
