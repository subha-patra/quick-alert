# ⚡ Quick Alert for Angular 20+

**Quick Alert** is a lightweight, standalone, and dependency-free alert/toast notification service for Angular 20+. It provides a fast, flexible way to display success, error, info, or warning messages in modern Angular apps.

> ✅ Angular 20+ support (standalone & modular)  
> 💡 Zero configuration — instant alerts
> 🎨 Fully customizable via CSS variables

---


## 🚀 What's New in v1.0.0

- **Updated README** with clearer usage instructions

---

## 📦 Installation

```bash
npm install quick-alert
```
---

## 🧩 Usage

## Step 1: Import & Inject

```bash 
import { Quick } from 'quick-alert';
export class <ComponentName> {
   private alert = inject(Quick);

   showAlert(): void {
    this.alert.fire({
      title: 'Lorem Ipsum is simply dummy text',
      subtitle: 'Sub Title',
      message: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
      type: 'success',
      toast: true,
      showCloseButton: true,
      timeout: 5000
    });

    this.alert.on('confirm', (event: any) => {
      console.log('Confirmed:', event);
    });
  }
}
```
--- 
 
## 🎨 Theming with CSS Variables

Quick Alert supports full customization using CSS variables inside your component or global styles:

```bash
:host {
  --color: #101010;
  --backgroundColor: rgba(255, 255, 255, 0.8);
  --backgroundOverlayColor: rgba(0, 0, 0, 0.5);
  --progressbarColor: #ccc;
  --buttonBackgroundColor: #101010;
  --buttonHoverBackgroundColor: #757575;
  --buttonColor: #fff;
}
```

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
