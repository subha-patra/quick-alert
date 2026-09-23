type QuickAlertAction = 'confirm' | 'deny' | 'cancel' | 'ok' | 'close' | 'timeout';
type QuickAlertDismissedBy = 'confirm-button' | 'deny-button' | 'cancel-button' | 'ok-button' | 'close-button' | 'escape' | 'timeout' | 'api-close';
type QuickAlertType = 'success' | 'error' | 'warning' | 'info' | 'question';
type QuickAlertPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'center' | 'center-left' | 'center-right' | 'top-center' | 'bottom-center';
type QuickAlertTransition = 'fade' | 'slide';
type QuickAlertButtons = 'ok' | 'confirm' | 'confirm-cancel' | 'confirm-deny-cancel' | 'none';
type QuickAlertTheme = 'default' | 'dark' | 'auto' | 'success' | 'minimal' | 'glass' | 'material' | 'bootstrap';
type QuickAlertButtonVariant = 'solid' | 'outline' | 'ghost';
type QuickAlertAsyncHook = () => void | boolean | Promise<void | boolean>;
type QuickAlertTimerChange = (remainingSeconds: number, id: string) => void;
interface QuickAlertContentContext {
    id: string;
    document: Document;
}
type QuickAlertContent = string | Node | ((context: QuickAlertContentContext) => string | Node);
interface QuickAlertOpenEvent {
    id: string;
    element: HTMLElement;
    card: HTMLElement;
}
type QuickAlertOpenCallback = (event: QuickAlertOpenEvent) => void;
type QuickAlertLifecycleCallback = (result: QuickAlertResult) => void;
interface QuickAlertCustomClassMap {
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
type QuickAlertCustomClass = string | QuickAlertCustomClassMap;
interface QuickAlertOptions {
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
interface QuickAlertResult {
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

interface QuickAlertApi {
    fire(options?: QuickAlertOptions): Promise<QuickAlertResult>;
    close(id?: string): void;
    closeAll(): void;
    configure(defaults?: QuickAlertOptions): void;
    resetConfig(): void;
}
declare const createQuickAlert: (defaults?: QuickAlertOptions) => QuickAlertApi;
declare const quickAlert: QuickAlertApi;

export { createQuickAlert, quickAlert };
export type { QuickAlertAction, QuickAlertApi, QuickAlertAsyncHook, QuickAlertButtonVariant, QuickAlertButtons, QuickAlertContent, QuickAlertContentContext, QuickAlertCustomClass, QuickAlertCustomClassMap, QuickAlertDismissedBy, QuickAlertLifecycleCallback, QuickAlertOpenCallback, QuickAlertOpenEvent, QuickAlertOptions, QuickAlertPosition, QuickAlertResult, QuickAlertTheme, QuickAlertTimerChange, QuickAlertTransition, QuickAlertType };
