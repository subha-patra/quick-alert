# quick-alert

Universal alert, modal, toast, and notification API for Angular, React, Vue, plain JavaScript, and SSR-safe apps.

`quick-alert@2.0.0` is framework-agnostic. There is no Angular service to inject and no React/Vue wrapper to install. Every platform uses the same import:

```ts
import { quickAlert } from 'quick-alert';
```

## Features

- One root import for Angular, React, Vue, Next/Nuxt, SSR-safe apps, and plain JavaScript.
- Modal alerts and toast notifications.
- Queued modal alerts so confirm dialogs do not overlap.
- Stacked toast notifications by position.
- Promise result for `confirm`, `deny`, `cancel`, `ok`, `close`, and `timeout`, including `id` and `dismissedBy`.
- Safe text rendering by default.
- Safe custom body content with text, DOM nodes, or browser-only content factories.
- Button presets for common action layouts.
- Async `preConfirm` and `preDeny` hooks with loading state.
- Lifecycle callbacks for open, action, timeout, and close events.
- Configurable title, subtitle, message, footer, type, position, timeout, progress bar, transition, and custom classes.
- Theme presets, `theme: 'auto'`, button variants, and direct button class helpers.
- Pauseable toast timers with countdown callbacks.
- Slot-based styling for popup, overlay, icon, text, buttons, close button, and progress bar.
- Inline SVG icons with optional `showIcon: false`.
- Scoped defaults with `createQuickAlert()` and root default cleanup with `resetConfig()`.
- Accessible modal behavior with `alertdialog`, focus handling, Escape close, focus restore, ARIA labels, reduced-motion CSS, and background inerting.
- Browser-safe and SSR-safe: server rendering does not touch `document`.
- No runtime framework dependency.

## Install

```bash
npm install quick-alert
```

Live demo/docs:

```text
https://subha-patra.github.io/quick-alert/
```

## Basic Usage

```ts
import { quickAlert } from 'quick-alert';

const result = await quickAlert.fire({
  title: 'Success',
  message: 'Your changes were saved.',
  type: 'success',
  buttons: 'confirm',
  confirmButtonText: 'Continue'
});

if (result.isConfirm) {
  console.log(result.id, result.dismissedBy);
}
```

## Toast Usage

```ts
import { quickAlert } from 'quick-alert';

quickAlert.fire({
  title: 'Uploaded',
  message: 'The file is ready.',
  type: 'info',
  toast: true,
  position: 'top-right',
  showProgressBar: true,
  showCloseButton: true
});
```

## Framework Examples

Angular:

```ts
import { Component } from '@angular/core';
import { quickAlert } from 'quick-alert';

@Component({
  selector: 'app-save-button',
  template: `<button type="button" (click)="save()">Save</button>`
})
export class SaveButton {
  async save(): Promise<void> {
    await quickAlert.fire({
      title: 'Saved',
      message: 'Angular uses the same quickAlert API.',
      type: 'success'
    });
  }
}
```

React:

```tsx
import { quickAlert } from 'quick-alert';

export function SaveButton() {
  return (
    <button
      type="button"
      onClick={() => quickAlert.fire({
        title: 'Saved',
        message: 'React uses the same quickAlert API.',
        type: 'success'
      })}
    >
      Save
    </button>
  );
}
```

Vue:

```vue
<script setup lang="ts">
import { quickAlert } from 'quick-alert';

function save() {
  quickAlert.fire({
    title: 'Saved',
    message: 'Vue uses the same quickAlert API.',
    type: 'success'
  });
}
</script>

<template>
  <button type="button" @click="save">Save</button>
</template>
```

Plain JavaScript (with a bundler such as Vite):

```js
import { quickAlert } from 'quick-alert';

document.querySelector('#save').addEventListener('click', () => {
  quickAlert.fire({
    title: 'Saved',
    message: 'Plain JavaScript uses the same quickAlert API.',
    type: 'success'
  });
});
```

Next.js client component:

```tsx
'use client';

import { quickAlert } from 'quick-alert';

export function SaveButton() {
  return (
    <button
      type="button"
      onClick={() => quickAlert.fire({
        title: 'Saved',
        theme: 'auto'
      })}
    >
      Save
    </button>
  );
}
```

Nuxt:

```vue
<script setup lang="ts">
import { quickAlert } from 'quick-alert';

function save() {
  quickAlert.fire({
    title: 'Saved',
    toast: true,
    theme: 'auto'
  });
}
</script>
```

## API

```ts
quickAlert.fire(options): Promise<QuickAlertResult>
quickAlert.close(id?: string): void
quickAlert.closeAll(): void
quickAlert.configure(defaults): void
quickAlert.resetConfig(): void
createQuickAlert(defaults): QuickAlertApi
```

`quickAlert.configure()` sets defaults for later alerts. Per-call options passed to `fire()` always win.

```ts
quickAlert.configure({
  type: 'info',
  position: 'top-right',
  timeout: 3000
});

quickAlert.resetConfig();
```

Use `createQuickAlert()` when one area of your app needs isolated defaults:

```ts
import { createQuickAlert } from 'quick-alert';

const billingAlert = createQuickAlert({
  type: 'info',
  position: 'top-right'
});

billingAlert.fire({
  title: 'Invoice sent'
});
```

## Button Presets

Use `buttons` for common layouts:

```ts
quickAlert.fire({
  title: 'Delete item?',
  type: 'warning',
  buttons: 'confirm-cancel',
  confirmButtonText: 'Delete',
  cancelButtonText: 'Keep item'
});
```

## Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | `string` | auto | Optional alert id for `close(id)`. |
| `title` | `string` | `''` | Main heading. |
| `subtitle` | `string` | `''` | Small text below the title. |
| `message` | `string` | `''` | Main body text. |
| `content` | `string \| Node \| (context) => string \| Node` | unset | Safe custom body content. Strings render as text; DOM nodes are appended. |
| `footer` | `string` | `''` | Footer text. |
| `type` | `'success' \| 'error' \| 'warning' \| 'info' \| 'question'` | `'success'` | Alert tone and icon style. |
| `toast` | `boolean` | `false` | Render as toast instead of modal. |
| `position` | `QuickAlertPosition` | `'center'` | Placement for modal/toast. |
| `transition` | `'fade' \| 'slide'` | `'slide'` | Entrance animation class. |
| `theme` | `'default' \| 'dark' \| 'auto' \| 'success' \| 'minimal' \| 'glass' \| 'material' \| 'bootstrap'` | `'default'` | Built-in visual preset. `auto` uses the current color-scheme preference. |
| `buttons` | `'ok' \| 'confirm' \| 'confirm-cancel' \| 'confirm-deny-cancel' \| 'none'` | unset | Preset action layout. When set, it wins over old button flags. |
| `timeout` | `number` | `4000` | Auto-close time for toast alerts. Explicit values still win. |
| `showIcon` | `boolean` | `true` | Show the built-in inline SVG icon. |
| `showProgressBar` | `boolean` | `true` | Show toast progress bar. |
| `showCloseButton` | `boolean` | `false` | Show close button. |
| `showConfirmButton` | `boolean` | `false` | Show confirm button instead of default OK. |
| `showDenyButton` | `boolean` | `false` | Show deny button. |
| `showCancelButton` | `boolean` | `false` | Show cancel button. |
| `confirmButtonText` | `string` | `'Confirm'` | Confirm label. |
| `okButtonText` | `string` | `'OK'` | OK label. |
| `denyButtonText` | `string` | `'Deny'` | Deny label. |
| `cancelButtonText` | `string` | `'Cancel'` | Cancel label. |
| `ariaLabel` | `string` | generated | Accessible alert label when no title is rendered. |
| `confirmAriaLabel` | `string` | button text | Confirm button accessible label. |
| `denyAriaLabel` | `string` | button text | Deny button accessible label. |
| `cancelAriaLabel` | `string` | button text | Cancel button accessible label. |
| `okAriaLabel` | `string` | button text | OK button accessible label. |
| `closeAriaLabel` | `string` | `'Close alert'` | Close button accessible label. |
| `buttonVariant` | `'solid' \| 'outline' \| 'ghost'` | `'solid'` | Default action button variant. |
| `confirmButtonVariant` | `'solid' \| 'outline' \| 'ghost'` | `buttonVariant` | Confirm button variant. |
| `denyButtonVariant` | `'solid' \| 'outline' \| 'ghost'` | `buttonVariant` | Deny button variant. |
| `cancelButtonVariant` | `'solid' \| 'outline' \| 'ghost'` | `buttonVariant` | Cancel button variant. |
| `okButtonVariant` | `'solid' \| 'outline' \| 'ghost'` | `buttonVariant` | OK button variant. |
| `confirmButtonClass` | `string` | `''` | Extra confirm button class. |
| `denyButtonClass` | `string` | `''` | Extra deny button class. |
| `cancelButtonClass` | `string` | `''` | Extra cancel button class. |
| `okButtonClass` | `string` | `''` | Extra OK button class. |
| `closeButtonClass` | `string` | `''` | Extra close button class. |
| `pauseOnHover` | `boolean` | `true` | Pause toast timeout while hovered. |
| `pauseOnFocus` | `boolean` | `true` | Pause toast timeout while focused. |
| `onTimerChange` | `(seconds, id) => void` | unset | Countdown callback for toast timeout. |
| `preConfirm` | `() => void \| boolean \| Promise<void \| boolean>` | unset | Async confirm hook. `false` or rejection keeps the modal open. |
| `preDeny` | `() => void \| boolean \| Promise<void \| boolean>` | unset | Async deny hook. `false` or rejection keeps the modal open. |
| `onOpen` | `({ id, element, card }) => void` | unset | Called after an alert is inserted into the DOM. |
| `onClose` | `(result) => void` | unset | Called before the alert promise resolves. |
| `onConfirm` | `(result) => void` | unset | Called for confirm-button results. |
| `onDeny` | `(result) => void` | unset | Called for deny-button results. |
| `onCancel` | `(result) => void` | unset | Called for cancel-button results. |
| `onOk` | `(result) => void` | unset | Called for OK-button results. |
| `onTimeout` | `(result) => void` | unset | Called for timeout results. |
| `customClass` | `string \| QuickAlertCustomClassMap` | `''` | Extra class for the popup or per-slot styling. |

Positions:

```ts
'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' |
'center' | 'center-left' | 'center-right' |
'top-center' | 'bottom-center'
```

## Result

```ts
type QuickAlertAction =
  | 'confirm'
  | 'deny'
  | 'cancel'
  | 'ok'
  | 'close'
  | 'timeout';

type QuickAlertDismissedBy =
  | 'confirm-button'
  | 'deny-button'
  | 'cancel-button'
  | 'ok-button'
  | 'close-button'
  | 'escape'
  | 'timeout'
  | 'api-close';

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
```

## Queue, Async, And Timer Examples

Modal alerts queue automatically. Toasts render immediately and stack by position:

```ts
quickAlert.fire({ id: 'first', title: 'First modal' });
quickAlert.fire({ id: 'second', title: 'Second modal' });

quickAlert.fire({ title: 'One', toast: true, position: 'top-right' });
quickAlert.fire({ title: 'Two', toast: true, position: 'top-right' });
```

Use `preConfirm` or `preDeny` for server-side verification:

```ts
await quickAlert.fire({
  title: 'Verify code?',
  type: 'warning',
  buttons: 'confirm-cancel',
  confirmButtonText: 'Verify',
  preConfirm: async () => {
    const ok = await verifyOtp();
    return ok;
  }
});
```

Toast timers pause on hover/focus by default and can report countdown changes:

```ts
quickAlert.fire({
  id: 'upload-toast',
  title: 'Uploading',
  toast: true,
  timeout: 5000,
  pauseOnHover: true,
  pauseOnFocus: true,
  onTimerChange: (seconds, id) => console.log(id, seconds)
});
```

## Themes And Accessibility

```ts
quickAlert.fire({
  title: '',
  message: 'Accessible themed alert',
  theme: 'dark',
  ariaLabel: 'Session expired alert',
  buttons: 'confirm-cancel',
  buttonVariant: 'outline',
  confirmButtonVariant: 'solid',
  confirmAriaLabel: 'Continue session',
  closeAriaLabel: 'Close session alert',
  showCloseButton: true
});
```

Use `theme: 'auto'` to resolve the theme from `prefers-color-scheme` when the alert opens:

```ts
quickAlert.fire({
  title: 'System theme',
  message: 'Uses dark mode when the OS prefers dark.',
  theme: 'auto'
});
```

## Safe Custom Content And Lifecycle

`message`, `subtitle`, and `footer` stay text-only. Use `content` when you need a richer body without raw HTML parsing:

```ts
quickAlert.fire({
  title: 'Order summary',
  content: ({ document }) => {
    const list = document.createElement('ul');
    const item = document.createElement('li');
    item.textContent = 'Safe DOM content';
    list.appendChild(item);
    return list;
  }
});
```

Lifecycle callbacks are useful for analytics, logs, and small integration hooks. Callback errors are ignored so alert cleanup and promise resolution continue:

```ts
quickAlert.fire({
  title: 'Delete item?',
  buttons: 'confirm-cancel',
  onOpen: ({ id }) => console.log('open', id),
  onConfirm: (result) => console.log('confirm', result.id),
  onCancel: (result) => console.log('cancel', result.id),
  onClose: (result) => console.log('close', result.dismissedBy),
  onTimeout: (result) => console.log('timeout', result.id)
});
```

## Styling

The built-in styles are injected when the first alert is shown. Override them with CSS variables from your app:

```css
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
}
```

Use `customClass` for per-alert styling. A string still applies to the popup:

```ts
quickAlert.fire({
  title: 'Delete item?',
  type: 'warning',
  customClass: 'danger-alert',
  buttons: 'confirm-cancel'
});
```

Use an object to target individual slots:

```ts
quickAlert.fire({
  title: 'Delete item?',
  type: 'warning',
  buttons: 'confirm-cancel',
  customClass: {
    popup: 'danger-alert',
    overlay: 'danger-overlay',
    icon: 'danger-icon',
    title: 'danger-title',
    message: 'danger-message',
    confirmButton: 'danger-confirm',
    cancelButton: 'danger-cancel',
    closeButton: 'danger-close',
    progressBar: 'danger-progress-bar'
  }
});
```

Side positions such as `center-left` and `center-right` are best for side-panel style alerts. Corner and top/bottom-center positions are usually better for toasts.

## v2.0.0 Notes

- Added `buttons` presets while keeping old `showConfirmButton`, `showCancelButton`, and `showDenyButton`.
- Added modal queueing and toast stacking.
- Added result `id` and `dismissedBy` metadata.
- Added async `preConfirm` and `preDeny` loading behavior.
- Added safe custom `content`, lifecycle callbacks, `theme: 'auto'`, and Next/Nuxt examples.
- Added themes, button variants, direct button classes, and ARIA labels.
- Added pauseable toast timers and `onTimerChange`.
- Added slot-based `customClass` object support.
- Added `quickAlert.resetConfig()` and `createQuickAlert(defaults)`.
- Replaced text icons with inline SVG icons and added `showIcon`.
- Changed the default toast timeout from `1000` to `4000`.
- Improved mobile/safe-area CSS, reduced-motion CSS, and background inerting.

## Migration From v1

`quick-alert@1.x` was Angular-service-first:

```ts
import { Quick } from 'quick-alert';
```

`quick-alert@2.x` is universal:

```ts
import { quickAlert } from 'quick-alert';
```

Angular users no longer inject a service. Call `quickAlert.fire()` directly from a component, service, effect, signal handler, or any browser-side app code.

---

📛 Badges

![npm](https://img.shields.io/npm/v/quick-alert)
![npm](https://img.shields.io/npm/dt/quick-alert)
![GitHub issues](https://img.shields.io/github/issues/subha-patra/quick-alert)
![GitHub stars](https://img.shields.io/github/stars/subha-patra/quick-alert)
![GitHub license](https://img.shields.io/github/license/subha-patra/quick-alert)

--- 

## 📄 License

[![License: MIT](https://raw.githubusercontent.com/subha-patra/quick-alert/2137f41d904fa40a0a6518e33801c3564dbce820/licence.svg)](LICENSE)
