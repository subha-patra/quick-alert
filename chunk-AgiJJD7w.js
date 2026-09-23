import{E as HC,Et as aT,Gn as uC,Gt as ft$1,Ht as fC,I as Ku,In as rC,N as JT,Nt as dg,O as II,Ot as cg,Vn as tC,X as Pp,Yn as v,Zt as gl,_n as nC,gt as Xh,ht as XT,j as Il,nr as xC,nt as Rg,pr as zo,rr as xE,tn as hl,ut as W$1,xt as Zu,yn as ng}from"./chunk-BDR4PTMU.js";import{n as Un,t as Fn}from"./main-EJ5NSJIL.js";var m={title:``,subtitle:``,message:``,footer:``,type:`success`,timeout:4e3,toast:!1,position:`center`,transition:`slide`,theme:`default`,buttons:null,showIcon:!0,showDenyButton:!1,showCloseButton:!1,showProgressBar:!0,showConfirmButton:!1,showCancelButton:!1,confirmButtonText:`Confirm`,okButtonText:`OK`,cancelButtonText:`Cancel`,denyButtonText:`Deny`,ariaLabel:``,confirmAriaLabel:``,denyAriaLabel:``,cancelAriaLabel:``,okAriaLabel:``,closeAriaLabel:``,confirmButtonClass:``,denyButtonClass:``,cancelButtonClass:``,okButtonClass:``,closeButtonClass:``,buttonVariant:`solid`,confirmButtonVariant:`solid`,denyButtonVariant:`solid`,cancelButtonVariant:`solid`,okButtonVariant:`solid`,pauseOnHover:!0,pauseOnFocus:!0,customClass:``};var K=`quick-alert-styles`;var j=`http://www.w3.org/2000/svg`;var X={success:[`M20 6 9 17l-5-5`],error:[`M12 8v5`,`M12 17h.01`],warning:[`M12 8v5`,`M12 17h.01`],info:[`M12 11v6`,`M12 7h.01`],question:[`M9.5 9a2.5 2.5 0 1 1 4.1 1.9c-.8.5-1.6 1.2-1.6 2.1`,`M12 17h.01`]};var Z=`
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
`;var D=class s{static controllers=new Set;static modalQueue=[];static inertedElements=new WeakMap;static idCounter=0;static domIdCounter=0;active=new Map;configuredDefaults={};listeningForKeys=!1;constructor(t={}){this.configuredDefaults=W$1({},t),s.controllers.add(this)}handleKeydown=t=>{let e=this.latestModal();if(e){if(t.key===`Escape`){if(t.preventDefault(),e.loadingAction)return;this.finish(e,`close`,`escape`);return}t.key===`Tab`&&this.trapFocus(t,e.card)}};fire(t={}){let e=this.getDocument();if(!e?.body)return Promise.resolve(this.result(`quick-alert-ssr`,`close`,`api-close`));let n=this.normalizeOptions(W$1(W$1({},this.configuredDefaults),t));this.ensureStyles(e),this.closeExistingById(n.id);let r=this.ensureRoot(e),l=s.activeModalForDocument(e),c=e.activeElement instanceof HTMLElement?e.activeElement:null,h=!n.toast&&l?.previousFocus?.isConnected?l.previousFocus:c;return new Promise(f=>{if(!n.toast&&l){s.modalQueue.push({controller:this,doc:e,options:n,previousFocus:h,resolve:f});return}this.activateRecord(e,r,n,h,f)})}close(t){if(t){this.resolveQueuedById(t),this.finishActiveById(t);return}let e=Array.from(this.active.values()).at(-1);e&&this.finish(e,`close`,`api-close`)}closeAll(){let t=[...s.modalQueue];s.modalQueue=[],t.forEach(e=>e.controller.completeQueued(e)),s.controllers.forEach(e=>{Array.from(e.active.values()).forEach(n=>e.finish(n,`close`,`api-close`))})}configure(t={}){this.configuredDefaults=W$1({},t)}resetConfig(){this.configuredDefaults={}}activateRecord(t,e,n,r,l){let c=this.render(t,n,r,l);this.active.set(c.id,c),n.toast?this.ensureToastStack(t,e,n.position).appendChild(c.item):e.appendChild(c.item),this.syncKeyListener(),this.syncDocumentInert(t),this.startTimers(c),this.safeCall(()=>n.onOpen?.({id:c.id,element:c.item,card:c.card})),this.focusInitialAction(c)}render(t,e,n,r){let l=t.createElement(`div`);if(l.className=`quick-alert-item`,!e.toast){let V=t.createElement(`div`);V.className=this.classNames(`quick-alert-overlay`,this.customClassFor(e,`overlay`)),l.appendChild(V)}let c=t.createElement(`section`);c.className=this.cardClass(t,e),c.dataset.quickAlertId=e.id,c.setAttribute(`data-quick-alert-id`,e.id),c.tabIndex=-1,e.toast?(c.setAttribute(`role`,`status`),c.setAttribute(`aria-live`,`polite`)):(c.setAttribute(`role`,`alertdialog`),c.setAttribute(`aria-modal`,`true`));let h=this.nextDomId(e.id),f=`quick-alert-title-${h}`,y=`quick-alert-message-${h}`;return this.renderCloseButton(t,c,e),this.renderContent(t,c,e,f,y),e.toast||(e.title&&c.setAttribute(`aria-labelledby`,f),(e.message||e.content!==void 0)&&c.setAttribute(`aria-describedby`,y),this.renderActions(t,c,e)),l.appendChild(c),{id:e.id,options:e,item:l,card:c,previousFocus:n,resolve:r,timeouts:[],intervals:[],listeners:[],loadingAction:null,timer:null}}renderCloseButton(t,e,n){if(!n.showCloseButton)return;let r=t.createElement(`button`);r.className=this.classNames(`quick-alert-close`,this.customClassFor(n,`closeButton`),n.closeButtonClass),r.type=`button`,r.textContent=`x`,r.setAttribute(`aria-label`,n.closeAriaLabel||`Close alert`),r.setAttribute(`data-quick-alert-action`,`close`),r.addEventListener(`click`,()=>this.finishById(n.id,`close`,`close-button`)),e.appendChild(r)}renderContent(t,e,n,r,l){let c=t.createElement(`div`);c.className=`quick-alert-header`,n.showIcon&&c.appendChild(this.renderIcon(t,n));let h=t.createElement(`div`);if(h.className=`quick-alert-copy`,n.title){let f=t.createElement(`h2`);f.className=this.classNames(`quick-alert-title`,this.customClassFor(n,`title`)),f.id=r,f.textContent=n.title,h.appendChild(f)}else e.setAttribute(`aria-label`,n.ariaLabel||`${n.type} alert`);if(n.subtitle){let f=t.createElement(`div`);f.className=this.classNames(`quick-alert-subtitle`,this.customClassFor(n,`subtitle`)),f.textContent=n.subtitle,h.appendChild(f)}if(c.appendChild(h),e.appendChild(c),n.content!==void 0||n.message){let f=t.createElement(`div`);f.className=this.classNames(`quick-alert-message`,this.customClassFor(n,`message`)),f.id=l,n.content!==void 0?this.appendContent(t,f,n.id,n.content):f.textContent=n.message,e.appendChild(f)}if(n.footer){let f=t.createElement(`div`);f.className=this.classNames(`quick-alert-footer`,this.customClassFor(n,`footer`)),f.textContent=n.footer,e.appendChild(f)}}appendContent(t,e,n,r){let l=typeof r==`function`?r({id:n,document:t}):r;if(typeof l==`string`){e.textContent=l;return}e.appendChild(l)}renderIcon(t,e){let n=t.createElement(`span`);n.className=this.classNames(`quick-alert-icon`,`quick-alert-icon-${e.type}`,this.customClassFor(e,`icon`)),n.setAttribute(`aria-hidden`,`true`);let r=t.createElementNS(j,`svg`);return r.setAttribute(`viewBox`,`0 0 24 24`),r.setAttribute(`focusable`,`false`),X[e.type].forEach(l=>{let c=t.createElementNS(j,`path`);c.setAttribute(`d`,l),r.appendChild(c)}),n.appendChild(r),n}renderActions(t,e,n){let r=this.resolveActions(n);if(!r.length)return;let l=t.createElement(`div`);l.className=this.classNames(`quick-alert-actions`,this.customClassFor(n,`actions`)),r.forEach(c=>{l.appendChild(this.actionButton(t,n,c,this.labelForAction(n,c)))}),e.appendChild(l)}actionButton(t,e,n,r){let l=t.createElement(`button`),c=this.variantForAction(e,n);return l.className=this.classNames(`quick-alert-button`,`quick-alert-button-${n}`,`quick-alert-button-${c}`,this.customClassFor(e,this.buttonClassSlot(n)),this.directButtonClass(e,n)),l.type=`button`,l.textContent=r,l.setAttribute(`aria-label`,this.ariaLabelForAction(e,n,r)),l.setAttribute(`data-quick-alert-action`,n),l.addEventListener(`click`,()=>{this.handleActionById(e.id,n)}),l}async handleActionById(t,e){let n=this.active.get(t);if(!n||n.loadingAction)return;let r=this.hookForAction(n.options,e);if(!r){this.finish(n,e,this.dismissedByForAction(e));return}this.setLoading(n,e,!0);try{if(await r()===!1){this.setLoading(n,e,!1);return}this.finish(n,e,this.dismissedByForAction(e))}catch{this.setLoading(n,e,!1)}}resolveActions(t){if(t.buttons)switch(t.buttons){case`none`:return[];case`ok`:return[`ok`];case`confirm`:return[`confirm`];case`confirm-cancel`:return[`confirm`,`cancel`];case`confirm-deny-cancel`:return[`confirm`,`deny`,`cancel`]}let e=[t.showConfirmButton?`confirm`:`ok`];return t.showDenyButton&&e.push(`deny`),t.showCancelButton&&e.push(`cancel`),e}labelForAction(t,e){switch(e){case`confirm`:return t.confirmButtonText;case`deny`:return t.denyButtonText;case`cancel`:return t.cancelButtonText;default:return t.okButtonText}}ariaLabelForAction(t,e,n){switch(e){case`confirm`:return t.confirmAriaLabel||n;case`deny`:return t.denyAriaLabel||n;case`cancel`:return t.cancelAriaLabel||n;default:return t.okAriaLabel||n}}variantForAction(t,e){switch(e){case`confirm`:return t.confirmButtonVariant||t.buttonVariant;case`deny`:return t.denyButtonVariant||t.buttonVariant;case`cancel`:return t.cancelButtonVariant||t.buttonVariant;default:return t.okButtonVariant||t.buttonVariant}}directButtonClass(t,e){switch(e){case`confirm`:return t.confirmButtonClass;case`deny`:return t.denyButtonClass;case`cancel`:return t.cancelButtonClass;default:return t.okButtonClass}}hookForAction(t,e){if(e===`confirm`)return t.preConfirm;if(e===`deny`)return t.preDeny}setLoading(t,e,n){t.loadingAction=n?e:null,t.card.classList.toggle(`quick-alert-loading`,n),t.card.setAttribute(`aria-busy`,n?`true`:`false`),t.card.querySelectorAll(`[data-quick-alert-action]`).forEach(r=>{r.disabled=n})}buttonClassSlot(t){switch(t){case`confirm`:return`confirmButton`;case`deny`:return`denyButton`;case`cancel`:return`cancelButton`;default:return`okButton`}}startTimers(t){if(!t.options.toast||t.options.timeout<=0)return;let e=t.card.ownerDocument.defaultView;if(e){if(t.timer={totalMs:t.options.timeout,remainingMs:t.options.timeout,running:!0,lastStartedAt:Date.now(),progressBar:null,lastSecond:null},t.options.pauseOnHover){let n=()=>this.pauseTimer(t),r=()=>this.resumeTimer(t);t.card.addEventListener(`mouseenter`,n),t.card.addEventListener(`mouseleave`,r),t.listeners.push(()=>{t.card.removeEventListener(`mouseenter`,n),t.card.removeEventListener(`mouseleave`,r)})}if(t.options.pauseOnFocus){let n=()=>this.pauseTimer(t),r=()=>this.resumeTimer(t);t.card.addEventListener(`focusin`,n),t.card.addEventListener(`focusout`,r),t.listeners.push(()=>{t.card.removeEventListener(`focusin`,n),t.card.removeEventListener(`focusout`,r)})}if(t.options.showProgressBar){let n=t.card.ownerDocument.createElement(`div`);n.className=this.classNames(`quick-alert-progress`,this.customClassFor(t.options,`progress`));let r=t.card.ownerDocument.createElement(`div`);r.className=this.classNames(`quick-alert-progress-bar`,this.customClassFor(t.options,`progressBar`)),n.appendChild(r),t.card.appendChild(n),t.timer.progressBar=r}this.emitTimerChange(t),this.updateProgress(t),t.intervals.push(e.setInterval(()=>this.tickTimer(t),50))}}tickTimer(t){let e=t.timer;if(!e||!e.running||!this.active.has(t.id))return;let n=Date.now(),r=Math.max(0,n-e.lastStartedAt);e.lastStartedAt=n,e.remainingMs=Math.max(0,e.remainingMs-r),this.updateProgress(t),this.emitTimerChange(t),e.remainingMs<=0&&this.finish(t,`timeout`,`timeout`)}pauseTimer(t){let e=t.timer;if(!e||!e.running)return;let n=Date.now();e.remainingMs=Math.max(0,e.remainingMs-Math.max(0,n-e.lastStartedAt)),e.running=!1,this.updateProgress(t),this.emitTimerChange(t)}resumeTimer(t){let e=t.timer;!e||e.running||e.remainingMs<=0||(e.running=!0,e.lastStartedAt=Date.now())}updateProgress(t){let e=t.timer;if(!e?.progressBar)return;let n=Math.max(0,e.remainingMs/e.totalMs*100);e.progressBar.style.width=`${n}%`}emitTimerChange(t){let e=t.timer;if(!e)return;let n=Math.ceil(e.remainingMs/1e3);e.lastSecond!==n&&(e.lastSecond=n,this.safeCall(()=>t.options.onTimerChange?.(n,t.id)))}finishById(t,e,n){let r=this.active.get(t);r&&this.finish(r,e,n)}finish(t,e,n){if(!this.active.has(t.id))return;t.timer&&n===`timeout`&&(t.timer.remainingMs=0,this.updateProgress(t),this.emitTimerChange(t)),this.clearTimers(t),t.listeners.forEach(l=>l()),t.listeners=[],t.item.remove(),this.active.delete(t.id),this.syncKeyListener(),this.syncDocumentInert(t.card.ownerDocument),this.removeRootIfEmpty(t.card.ownerDocument),!t.options.toast&&t.previousFocus?.isConnected&&t.previousFocus.focus({preventScroll:!0});let r=this.result(t.id,e,n);this.callLifecycle(t.options,e,r),this.safeCall(()=>t.options.onClose?.(r)),t.resolve(r),this.activateNextModal(t.card.ownerDocument)}clearTimers(t){let e=t.card.ownerDocument.defaultView;e&&(t.timeouts.forEach(n=>e.clearTimeout(n)),t.intervals.forEach(n=>e.clearInterval(n)),t.timeouts=[],t.intervals=[])}focusInitialAction(t){if(t.options.toast)return;let e=t.card.querySelector(`[data-quick-alert-action]`);e?e.focus({preventScroll:!0}):t.card.focus({preventScroll:!0})}trapFocus(t,e){let n=Array.from(e.querySelectorAll(`button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])`)).filter(h=>!h.hasAttribute(`disabled`)&&h.tabIndex!==-1);if(!n.length){t.preventDefault(),e.focus({preventScroll:!0});return}let r=n[0],l=n.at(-1),c=e.ownerDocument.activeElement;if(!(c instanceof HTMLElement)||!e.contains(c)){t.preventDefault(),r.focus({preventScroll:!0});return}if(t.shiftKey&&c===r){t.preventDefault(),l?.focus({preventScroll:!0});return}!t.shiftKey&&c===l&&(t.preventDefault(),r.focus({preventScroll:!0}))}latestModal(){return Array.from(this.active.values()).reverse().find(t=>!t.options.toast)}activateNextModal(t){if(s.activeModalForDocument(t)||!s.modalQueue.length)return;let e=s.modalQueue.findIndex(r=>r.doc===t);if(e<0)return;let[n]=s.modalQueue.splice(e,1);n&&n.controller.activateRecord(t,n.controller.ensureRoot(t),n.options,n.previousFocus,n.resolve)}closeExistingById(t){this.resolveQueuedById(t),this.finishActiveById(t)}resolveQueuedById(t){let e=s.modalQueue.filter(n=>n.options.id===t);return e.length?(s.modalQueue=s.modalQueue.filter(n=>n.options.id!==t),e.forEach(n=>n.controller.completeQueued(n)),!0):!1}completeQueued(t){let e=this.result(t.options.id,`close`,`api-close`);this.safeCall(()=>t.options.onClose?.(e)),t.resolve(e)}finishActiveById(t){let e=!1;return s.controllers.forEach(n=>{let r=n.active.get(t);r&&(n.finish(r,`close`,`api-close`),e=!0)}),e}static activeModalForDocument(t){for(let e of s.controllers){let n=Array.from(e.active.values()).find(r=>!r.options.toast&&r.card.ownerDocument===t);if(n)return n}}static hasActiveModal(t){return!!s.activeModalForDocument(t)}static inertedElementsFor(t){let e=s.inertedElements.get(t);if(e)return e;let n=new Map;return s.inertedElements.set(t,n),n}dismissedByForAction(t){switch(t){case`confirm`:return`confirm-button`;case`deny`:return`deny-button`;case`cancel`:return`cancel-button`;case`ok`:return`ok-button`;case`timeout`:return`timeout`;default:return`close-button`}}syncKeyListener(){let t=this.getDocument();if(!t)return;let e=Array.from(this.active.values()).some(n=>!n.options.toast);if(e&&!this.listeningForKeys){t.addEventListener(`keydown`,this.handleKeydown),this.listeningForKeys=!0;return}!e&&this.listeningForKeys&&(t.removeEventListener(`keydown`,this.handleKeydown),this.listeningForKeys=!1)}ensureRoot(t){let e=t.querySelector(`.quick-alert-root`);if(e)return e;let n=t.createElement(`div`);return n.className=`quick-alert-root`,t.body.appendChild(n),n}ensureToastStack(t,e,n){let r=`.quick-alert-toast-stack[data-quick-alert-position="${n}"]`,l=e.querySelector(r);if(l)return l;let c=t.createElement(`div`);return c.className=this.classNames(`quick-alert-toast-stack`,`quick-alert-${n}`),c.setAttribute(`data-quick-alert-position`,n),e.appendChild(c),c}removeRootIfEmpty(t){let e=t.querySelector(`.quick-alert-root`);e?.querySelectorAll(`.quick-alert-toast-stack`).forEach(n=>{n.querySelector(`.quick-alert-item`)||n.remove()}),e&&!e.querySelector(`.quick-alert-item`)&&e.remove()}syncDocumentInert(t){let e=s.hasActiveModal(t),n=t.querySelector(`.quick-alert-root`),r=s.inertedElementsFor(t);if(e){Array.from(t.body.children).forEach(l=>{!(l instanceof HTMLElement)||l===n||(r.has(l)||r.set(l,l.inert),l.inert=!0)});return}r.forEach((l,c)=>{c.inert=l}),r.clear()}ensureStyles(t){if(t.getElementById(K))return;let e=t.createElement(`style`);e.id=K,e.textContent=Z,t.head.appendChild(e)}normalizeOptions(t){return{title:t.title??m.title,subtitle:t.subtitle??m.subtitle,message:t.message??m.message,content:t.content,footer:t.footer??m.footer,type:t.type??m.type,timeout:this.normalizeTimeout(t.timeout),toast:t.toast??m.toast,position:t.position??m.position,transition:t.transition??m.transition,theme:t.theme??m.theme,buttons:t.buttons??m.buttons,showIcon:t.showIcon??m.showIcon,showDenyButton:t.showDenyButton??m.showDenyButton,showCloseButton:t.showCloseButton??m.showCloseButton,showProgressBar:t.showProgressBar??m.showProgressBar,showConfirmButton:t.showConfirmButton??m.showConfirmButton,showCancelButton:t.showCancelButton??m.showCancelButton,confirmButtonText:t.confirmButtonText??m.confirmButtonText,okButtonText:t.okButtonText??m.okButtonText,cancelButtonText:t.cancelButtonText??m.cancelButtonText,denyButtonText:t.denyButtonText??m.denyButtonText,ariaLabel:t.ariaLabel??m.ariaLabel,confirmAriaLabel:t.confirmAriaLabel??m.confirmAriaLabel,denyAriaLabel:t.denyAriaLabel??m.denyAriaLabel,cancelAriaLabel:t.cancelAriaLabel??m.cancelAriaLabel,okAriaLabel:t.okAriaLabel??m.okAriaLabel,closeAriaLabel:t.closeAriaLabel??m.closeAriaLabel,confirmButtonClass:t.confirmButtonClass??m.confirmButtonClass,denyButtonClass:t.denyButtonClass??m.denyButtonClass,cancelButtonClass:t.cancelButtonClass??m.cancelButtonClass,okButtonClass:t.okButtonClass??m.okButtonClass,closeButtonClass:t.closeButtonClass??m.closeButtonClass,buttonVariant:t.buttonVariant??m.buttonVariant,confirmButtonVariant:t.confirmButtonVariant??t.buttonVariant??m.confirmButtonVariant,denyButtonVariant:t.denyButtonVariant??t.buttonVariant??m.denyButtonVariant,cancelButtonVariant:t.cancelButtonVariant??t.buttonVariant??m.cancelButtonVariant,okButtonVariant:t.okButtonVariant??t.buttonVariant??m.okButtonVariant,pauseOnHover:t.pauseOnHover??m.pauseOnHover,pauseOnFocus:t.pauseOnFocus??m.pauseOnFocus,onTimerChange:t.onTimerChange,preConfirm:t.preConfirm,preDeny:t.preDeny,onOpen:t.onOpen,onClose:t.onClose,onConfirm:t.onConfirm,onDeny:t.onDeny,onCancel:t.onCancel,onOk:t.onOk,onTimeout:t.onTimeout,customClass:t.customClass??m.customClass,id:t.id||this.nextId()}}normalizeTimeout(t){return typeof t!=`number`||!Number.isFinite(t)?m.timeout:Math.max(0,t)}cardClass(t,e){let n=this.resolveTheme(t,e.theme);return this.classNames(`quick-alert-card`,e.toast?`quick-alert-toast`:`quick-alert-modal`,`quick-alert-${e.position}`,`quick-alert-${e.transition}`,e.theme===`auto`&&`quick-alert-theme-auto`,`quick-alert-theme-${n}`,e.theme!==`auto`&&e.theme!==n&&`quick-alert-theme-${e.theme}`,this.customClassFor(e,`popup`))}resolveTheme(t,e){return e!==`auto`?e:t.defaultView?.matchMedia?.(`(prefers-color-scheme: dark)`).matches?`dark`:`default`}customClassFor(t,e){return typeof t.customClass==`string`?e===`popup`?t.customClass:``:t.customClass[e]??``}classNames(...t){return t.filter(Boolean).join(` `)}callLifecycle(t,e,n){let r=this.lifecycleForAction(t,e);this.safeCall(()=>r?.(n))}lifecycleForAction(t,e){switch(e){case`confirm`:return t.onConfirm;case`deny`:return t.onDeny;case`cancel`:return t.onCancel;case`ok`:return t.onOk;case`timeout`:return t.onTimeout;default:return}}safeCall(t){try{t()}catch{}}result(t,e,n){return{id:t,action:e,dismissedBy:n,isConfirm:e===`confirm`,isDeny:e===`deny`,isCancel:e===`cancel`,isOk:e===`ok`,isClose:e===`close`,isTimeout:e===`timeout`}}nextId(){return s.idCounter+=1,`quick-alert-${s.idCounter}`}nextDomId(t){return s.domIdCounter+=1,`${t.trim().replace(/[^A-Za-z0-9_-]+/g,`-`).replace(/^-+|-+$/g,``)||`alert`}-${s.domIdCounter}`}getDocument(){return typeof document>`u`?null:document}};var L=(s={})=>new D(s);var w=L();async function I(s,t,e){let n=await s(t,{signal:e});if(!n.ok)throw new Error(`Stats request failed: ${n.status}`);return n.json()}function W(s){return new Date(Date.UTC(s.getUTCFullYear(),s.getUTCMonth(),s.getUTCDate()))}function Y(s){return s.toISOString().slice(0,10)}async function tt(s,t,e,n){let r=new Date(t);if(Number.isNaN(r.getTime()))throw new Error(`Invalid package creation date`);let l=W(e);l.setUTCDate(l.getUTCDate()-1);let c=[];for(let f=W(r);f<=l;){let y=new Date(f);y.setUTCDate(y.getUTCDate()+364),y>l&&y.setTime(l.getTime()),c.push(`https://api.npmjs.org/downloads/point/${Y(f)}:${Y(y)}/quick-alert`),f=new Date(y),f.setUTCDate(f.getUTCDate()+1)}if(!c.length)return 0;let h=await Promise.all(c.map(f=>I(s,f,n)));if(h.some(f=>!Number.isFinite(f.downloads)||f.downloads<0))throw new Error(`Invalid npm download count`);return h.reduce((f,y)=>f+y.downloads,0)}async function G(s,t=new Date,e){let n={},r=(async()=>{let c=await I(s,`https://registry.npmjs.org/quick-alert`,e),h=c[`dist-tags`]?.latest;if(h&&(n.version=h,n.updatedAt=c.time?.[h]),c.time?.created)try{n.downloads=await tt(s,c.time.created,t,e)}catch{}})(),l=(async()=>{let c=await I(s,`https://api.github.com/repos/subha-patra/quick-alert`,e);Number.isInteger(c.stargazers_count)&&c.stargazers_count>=0&&(n.stars=c.stargazers_count)})();return await Promise.allSettled([r,l]),n}var et=(s,t)=>t.key;var B=(s,t)=>t.name;var nt=(s,t)=>t.label+t.value+s;function ot(s,t){s&1&&(hl(0,`span`),HC(1,`Published version: `),hl(2,`strong`),HC(3),gl()()),s&2&&(II(3),Il(`v`,t))}function it(s,t){if(s&1&&(hl(0,`span`),HC(1,`Latest update: `),hl(2,`strong`,68),HC(3),gl()()),s&2){let e=t,n=fC();II(2),cg(`title`,e),II(),Rg(n.publishedAgo(e))}}function at(s,t){if(s&1&&(hl(0,`span`),HC(1,`Total downloads: `),hl(2,`strong`),HC(3),gl()()),s&2){let e=fC();II(3),Rg(e.packageStats().downloads?.toLocaleString(`en-US`))}}function rt(s,t){if(s&1&&(hl(0,`a`,5)(1,`span`,69),HC(2,`★`),gl(),HC(3,` Star `),hl(4,`strong`),HC(5),gl()()),s&2){let e=t;cg(`href`,fC().githubUrl,xE),Xh(`aria-label`,`Star quick-alert on GitHub, `+e+` stars`),II(5),Rg(e.toLocaleString(`en-US`))}}function st(s,t){if(s&1){let e=uC();hl(0,`button`,70),dg(`click`,function(){Zu(e);return Ku(fC().scrollToTop())}),HC(1,`↑`),gl()}}function lt(s,t){if(s&1){let e=uC();hl(0,`article`,21)(1,`div`,71)(2,`h3`),HC(3),gl(),hl(4,`p`),HC(5),gl(),hl(6,`button`,72),dg(`click`,function(){let r=Zu(e).$implicit;return Ku(fC().runCopyableExample(r))}),HC(7,`Try me!`),gl()(),hl(8,`div`,11)(9,`div`,12)(10,`span`),HC(11,`Example code`),gl(),hl(12,`button`,7),dg(`click`,function(){let r=Zu(e).$implicit;return Ku(fC().copyToClipboard(r.code))}),HC(13),gl()(),hl(14,`pre`)(15,`code`),HC(16),gl()()()()}if(s&2){let e=t.$implicit,n=fC();II(3),Rg(e.title),II(2),Rg(e.description),II(),Xh(`data-testid`,`run-docs-`+e.key),II(6),Xh(`data-testid`,`copy-docs-`+e.key)(`aria-label`,n.copiedValue()===e.code?`Copied `+e.title+` code`:`Copy `+e.title+` code`),II(),Rg(n.copiedValue()===e.code?`Copied`:`Copy`),II(3),Rg(e.code)}}function ct(s,t){if(s&1){let e=uC();hl(0,`details`)(1,`summary`),HC(2),gl(),hl(3,`div`,11)(4,`div`,12)(5,`span`),HC(6),gl(),hl(7,`button`,7),dg(`click`,function(){let r=Zu(e).$implicit;return Ku(fC().copyToClipboard(r.code))}),HC(8),gl()(),hl(9,`pre`)(10,`code`),HC(11),gl()()()()}if(s&2){let e=t.$implicit,n=fC();II(2),Rg(e.name),II(4),Rg(e.name),II(),Xh(`aria-label`,`Copy `+e.name+` example`),II(),Rg(n.copiedValue()===e.code?`Copied`:`Copy`),II(3),Rg(e.code)}}function dt(s,t){if(s&1){let e=uC();hl(0,`article`,28)(1,`div`,73)(2,`strong`),HC(3),gl(),hl(4,`span`),HC(5,`Alert preview`),gl(),ng(6,`i`),gl(),hl(7,`div`,74)(8,`h3`),HC(9),gl(),hl(10,`button`,72),dg(`click`,function(){let r=Zu(e).$implicit;return Ku(fC().showThemeDemo(r))}),HC(11,`Try me!`),gl()(),hl(12,`div`,11)(13,`div`,12)(14,`span`),HC(15,`Theme code`),gl(),hl(16,`button`,7),dg(`click`,function(){let r=Zu(e).$implicit,l=fC();return Ku(l.copyToClipboard(l.themeSnippet(r)))}),HC(17),gl()(),hl(18,`pre`)(19,`code`),HC(20),gl()()()()}if(s&2){let e=t.$implicit,n=fC();II(),xC(`theme-preview theme-`+e),II(2),Rg(e),II(6),Rg(e),II(),Xh(`data-testid`,`try-theme-`+e),II(6),Xh(`aria-label`,`Copy `+e+` theme code`),II(),Rg(n.copiedValue()===n.themeSnippet(e)?`Copied`:`Copy`),II(3),Rg(n.themeSnippet(e))}}function ut(s,t){if(s&1&&(hl(0,`tr`)(1,`th`,60)(2,`code`),HC(3),gl()(),hl(4,`td`)(5,`code`),HC(6),gl()(),hl(7,`td`),HC(8),gl()()),s&2){let e=t.$implicit;II(3),Rg(e.name),II(3),Rg(e.defaultValue),II(2),Rg(e.description)}}function mt(s,t){if(s&1){let e=uC();hl(0,`button`,7),dg(`click`,function(){let r=Zu(e).$implicit;return Ku(fC().showPositionDemo(r))}),HC(1),gl()}if(s&2){let e=t.$implicit;Xh(`data-testid`,`show-position-`+e),II(),Rg(e)}}function pt(s,t){if(s&1){let e=uC();hl(0,`button`,7),dg(`click`,function(){let r=Zu(e).$implicit;return Ku(fC().showButtonPresetDemo(r))}),HC(1),gl()}if(s&2){let e=t.$implicit;Xh(`data-testid`,`show-buttons-`+e),II(),Rg(e)}}function ft(s,t){if(s&1&&(hl(0,`tr`)(1,`th`,60)(2,`code`),HC(3),gl()(),hl(4,`td`),HC(5),gl()()),s&2){let e=t.$implicit;II(3),Rg(e.name),II(2),Rg(e.description)}}function ht(s,t){if(s&1&&(hl(0,`tr`)(1,`th`,60)(2,`code`),HC(3),gl()(),hl(4,`td`),HC(5),gl()()),s&2){let e=t.$implicit;II(3),Rg(e.name),II(2),Rg(e.description)}}function gt(s,t){if(s&1){let e=uC();hl(0,`div`,57)(1,`span`,69),HC(2),gl(),hl(3,`strong`),HC(4),gl(),hl(5,`button`,72),dg(`click`,function(){let r=Zu(e).$implicit;return Ku(fC().showTypeDemo(r))}),HC(6,`Try me!`),gl(),hl(7,`div`,11)(8,`div`,12)(9,`span`),HC(10,`Icon code`),gl(),hl(11,`button`,7),dg(`click`,function(){let r=Zu(e).$implicit,l=fC();return Ku(l.copyToClipboard(l.iconSnippet(r)))}),HC(12),gl()(),hl(13,`pre`)(14,`code`),HC(15),gl()()()()}if(s&2){let e=t.$implicit,n=fC();II(),xC(`icon-mark icon-`+e),II(),Rg(e===`success`?`✓`:e===`error`?`×`:e===`warning`?`!`:e===`info`?`i`:`?`),II(2),Rg(e),II(),Xh(`data-testid`,`show-type-`+e),II(6),Xh(`aria-label`,`Copy `+e+` icon code`),II(),Rg(n.copiedValue()===n.iconSnippet(e)?`Copied`:`Copy`),II(3),Rg(n.iconSnippet(e))}}function bt(s,t){if(s&1&&(hl(0,`li`)(1,`span`),HC(2),gl(),hl(3,`code`),HC(4),gl()()),s&2){let e=t.$implicit;II(2),Rg(e.label),II(2),Rg(e.value)}}var J=class s{document=v(ft$1);title=v(Fn);meta=v(Un);previousTitle=this.title.getTitle();previousIconHref=this.document.head.querySelector(`link[rel="icon"]`)?.getAttribute(`href`)??null;previousDescription=this.meta.getTag(`name="description"`)?.getAttribute(`content`)??null;previousCanonicalHref=this.document.head.querySelector(`link[rel="canonical"]`)?.getAttribute(`href`)??null;browserAbort=new AbortController;packageStats=zo({});githubUrl=`https://github.com/subha-patra/quick-alert`;showScrollTop=zo(!1);installCommand=`npm install quick-alert`;usageSnippet=`import { quickAlert } from 'quick-alert';

const result = await quickAlert.fire({
  title: 'Saved',
  message: 'Your changes are ready.',
  type: 'success',
  buttons: 'ok'
});

console.log(result.action, result.dismissedBy);`;resultSnippet=`const result = await quickAlert.fire({
  title: 'Delete item?',
  type: 'warning',
  buttons: 'confirm-cancel'
});

if (result.isConfirm) {
  console.log('Confirmed', result.id);
} else {
  console.log('Dismissed by', result.dismissedBy);
}`;methodsSnippet=`quickAlert.configure({ theme: 'minimal' });

const billingAlert = createQuickAlert({
  type: 'info',
  position: 'top-right'
});
await billingAlert.fire({ title: 'Invoice sent', toast: true });

quickAlert.close('alert-id');
quickAlert.closeAll();
quickAlert.resetConfig();`;copiedValue=zo(null);lastAction=zo(`Waiting for an alert action`);eventLog=zo([{label:`ready`,value:`Open a demo alert`}]);angularSnippet=`import { quickAlert } from 'quick-alert';

await quickAlert.fire({
  title: 'Saved',
  message: 'Angular uses the same API.',
  type: 'success'
});`;reactSnippet=`import { quickAlert } from 'quick-alert';

<button onClick={() => quickAlert.fire({
  title: 'Saved',
  type: 'success'
})}>
  Save
</button>`;vueSnippet=`<script setup lang="ts">
import { quickAlert } from 'quick-alert';

function save() {
  quickAlert.fire({ title: 'Saved', type: 'success' });
}
<\/script>`;javascriptSnippet=`import { quickAlert } from 'quick-alert';

document.querySelector('#save').addEventListener('click', () => {
  quickAlert.fire({ title: 'Saved', type: 'success' });
});`;ssrSnippet=`import { quickAlert } from 'quick-alert';

// Safe during SSR: no document access happens until browser render.
await quickAlert.fire({ title: 'Browser-only UI' });`;nextSnippet=`'use client';

import { quickAlert } from 'quick-alert';

export function SaveButton() {
  return (
    <button onClick={() => quickAlert.fire({
      title: 'Saved from Next.js',
      theme: 'auto'
    })}>
      Save
    </button>
  );
}`;nuxtSnippet=`<script setup lang="ts">
import { quickAlert } from 'quick-alert';

const notify = () => {
  quickAlert.fire({
    title: 'Saved from Nuxt',
    toast: true,
    theme: 'auto'
  });
};
<\/script>`;frameworkSnippets=[{name:`Angular`,code:this.angularSnippet},{name:`React`,code:this.reactSnippet},{name:`Vue`,code:this.vueSnippet},{name:`Plain JavaScript`,code:this.javascriptSnippet},{name:`Next.js`,code:this.nextSnippet},{name:`Nuxt`,code:this.nuxtSnippet},{name:`SSR`,code:this.ssrSnippet}];buttonPresetSnippet=`await quickAlert.fire({
  title: 'Delete item?',
  type: 'warning',
  buttons: 'confirm-cancel',
  confirmButtonText: 'Delete',
  cancelButtonText: 'Keep item'
});`;slotClassSnippet=`quickAlert.fire({
  title: 'Styled alert',
  customClass: {
    popup: 'brand-alert',
    title: 'brand-alert-title',
    confirmButton: 'brand-alert-confirm'
  }
});`;scopedDefaultsSnippet=`import { createQuickAlert, quickAlert } from 'quick-alert';

const billingAlert = createQuickAlert({
  type: 'info',
  position: 'top-right'
});

quickAlert.resetConfig();`;customContentSnippet=`quickAlert.fire({
  title: 'Safe custom content',
  message: 'Fallback text for plain rendering.',
  content: ({ document }) => {
    const list = document.createElement('ul');
    list.append('Safe DOM content only');
    return list;
  }
});`;lifecycleSnippet=`quickAlert.fire({
  title: 'Run lifecycle hooks',
  buttons: 'confirm-cancel',
  onOpen: ({ id }) => console.log('open', id),
  onConfirm: (result) => console.log('confirm', result.id),
  onCancel: (result) => console.log('cancel', result.id),
  onClose: (result) => console.log('close', result.dismissedBy),
  onTimeout: (result) => console.log('timeout', result.id)
});`;autoThemeSnippet=`quickAlert.fire({
  title: 'System theme',
  message: 'Uses dark theme when the OS prefers dark mode.',
  theme: 'auto'
});`;apiReferenceSnippet=`const result: QuickAlertResult = await quickAlert.fire({
  id: 'docs-toast',
  title: 'Saved',
  subtitle: 'Billing',
  message: 'Invoice sent.',
  footer: 'You can close this safely.',
  type: 'success',
  toast: false,
  position: 'center',
  transition: 'slide',
  theme: 'dark',
  content: ({ document }) => document.createTextNode('Safe custom content'),
  buttons: 'confirm-cancel',
  timeout: 4000,
  showIcon: true,
  showCloseButton: true,
  showProgressBar: true,
  confirmButtonText: 'Continue',
  cancelButtonText: 'Later',
  ariaLabel: 'Billing confirmation',
  confirmAriaLabel: 'Continue billing flow',
  closeAriaLabel: 'Close billing confirmation',
  buttonVariant: 'outline',
  confirmButtonClass: 'brand-confirm',
  pauseOnHover: true,
  pauseOnFocus: true,
  onTimerChange: (seconds, id) => console.log(id, seconds),
  preConfirm: async () => verifyOnServer(),
  onOpen: ({ id }) => console.log('open', id),
  onClose: (result) => console.log('close', result.dismissedBy),
  onConfirm: (result) => console.log('confirm', result.id),
  onTimeout: (result) => console.log('timeout', result.id),
  customClass: { popup: 'brand-alert' }
});

if (result.isConfirm && result.dismissedBy === 'confirm-button') {
  quickAlert.close('docs-toast');
}`;copyableExamples=[{key:`success-modal`,title:`Success modal`,description:`Confirm and cancel actions with a promise result.`,code:`const result = await quickAlert.fire({
  title: 'Payment received',
  subtitle: 'Success modal',
  message: 'The customer has paid and the receipt is ready.',
  type: 'success',
  toast: false,
  buttons: 'confirm-cancel',
  confirmButtonText: 'View receipt',
  cancelButtonText: 'Later',
  showCloseButton: true
});`,run:()=>this.showAlert()},{key:`info-toast`,title:`Toast with progress`,description:`A positioned toast with close button and progress bar.`,code:`quickAlert.fire({
  title: 'Toast notification',
  message: 'This toast closes by itself and shows a progress bar.',
  type: 'info',
  toast: true,
  position: 'top-right',
  showCloseButton: true,
  showProgressBar: true
});`,run:()=>this.showToast()},{key:`warning-deny-cancel`,title:`Warning actions`,description:`Confirm, deny, and cancel buttons for destructive flows.`,code:`const result = await quickAlert.fire({
  title: 'Delete API key?',
  subtitle: 'This cannot be undone',
  message: 'Deny and cancel buttons make destructive confirmation flows clear.',
  type: 'warning',
  toast: false,
  buttons: 'confirm-deny-cancel',
  confirmButtonText: 'Review',
  denyButtonText: 'Delete key',
  cancelButtonText: 'Cancel',
  showCloseButton: true
});`,run:()=>this.showWarningModal()},{key:`positions`,title:`Toast position`,description:`Move toast notifications to any supported screen position.`,code:`quickAlert.fire({
  title: 'Bottom-right toast',
  message: 'Position can be changed per alert.',
  type: 'success',
  toast: true,
  position: 'bottom-right',
  timeout: 3500,
  showProgressBar: true,
  showCloseButton: true
});`,run:()=>this.showPositionToast()},{key:`button-presets`,title:`Button presets`,description:`Use one option for common action layouts.`,code:`const result = await quickAlert.fire({
  title: 'Delete item?',
  type: 'warning',
  buttons: 'confirm-cancel',
  confirmButtonText: 'Delete',
  cancelButtonText: 'Keep item',
  showCloseButton: true
});`,run:()=>this.showButtonPresetDemo(`confirm-cancel`)},{key:`theme-accessibility`,title:`Theme and ARIA labels`,description:`Use themes, variants, button classes, and accessible labels together.`,code:`quickAlert.fire({
  title: '',
  message: 'Theme, button variants, custom classes, and ARIA labels can be set per alert.',
  type: 'question',
  theme: 'dark',
  ariaLabel: 'Accessible themed alert',
  buttons: 'confirm-cancel',
  buttonVariant: 'outline',
  confirmButtonVariant: 'solid',
  confirmAriaLabel: 'Confirm themed alert',
  closeAriaLabel: 'Close themed alert',
  showCloseButton: true
});`,run:()=>this.showThemeAccessibilityDemo()},{key:`custom-class-slots`,title:`Slot customClass`,description:`Style popup, overlay, icon, text, buttons, close button, and progress.`,code:`quickAlert.fire({
  title: 'Slot customClass',
  subtitle: 'Every visible slot can be styled',
  message: 'Pass classes for every alert slot.',
  type: 'warning',
  buttons: 'confirm-deny-cancel',
  showCloseButton: true,
  customClass: {
    popup: 'qa-demo-popup',
    overlay: 'qa-demo-overlay',
    confirmButton: 'qa-demo-confirm',
    progressBar: 'qa-demo-progress-bar'
  }
});`,run:()=>this.showCustomClassSlotsDemo()},{key:`queue-modals`,title:`Queue modals`,description:`Open two modals and quick-alert keeps only one visible at a time.`,code:`quickAlert.fire({
  id: 'queue-first',
  title: 'First queued modal',
  toast: false
});

quickAlert.fire({
  id: 'queue-second',
  title: 'Second queued modal',
  toast: false
});`,run:()=>this.showQueueDemo()},{key:`stack-toasts`,title:`Stack toasts`,description:`Multiple toasts in the same position stack without overlapping.`,code:`quickAlert.fire({
  id: 'stack-one',
  title: 'Stacked toast one',
  toast: true,
  position: 'top-right'
});

quickAlert.fire({
  id: 'stack-two',
  title: 'Stacked toast two',
  toast: true,
  position: 'top-right'
});`,run:()=>this.showStackDemo()},{key:`async-confirm`,title:`Async confirm`,description:`Keep the modal open with a loading state while server work runs.`,code:`await quickAlert.fire({
  title: 'Verify on server',
  message: 'The confirm button enters loading state while preConfirm resolves.',
  type: 'warning',
  toast: false,
  buttons: 'confirm-cancel',
  confirmButtonText: 'Verify',
  preConfirm: () => new Promise(resolve => setTimeout(resolve, 900))
});`,run:()=>this.showAsyncDemo()},{key:`pauseable-timer`,title:`Pauseable timer`,description:`Pause timeout and progress while the toast is hovered or focused.`,code:`quickAlert.fire({
  id: 'pausing-timer',
  title: 'Pauseable timer',
  toast: true,
  timeout: 5000,
  pauseOnHover: true,
  pauseOnFocus: true,
  onTimerChange: (seconds, id) => console.log(id, seconds)
});`,run:()=>this.showPausingTimerDemo()},{key:`custom-content`,title:`Safe custom content`,description:`Render safe DOM nodes without adding unsafe HTML parsing.`,code:`quickAlert.fire({
  title: 'Safe custom content',
  message: 'Fallback text is ignored when content is provided.',
  type: 'info',
  content: ({ document }) => {
    const list = document.createElement('ul');
    list.append('DOM node content', 'No innerHTML');
    return list;
  }
});`,run:()=>this.showCustomContentDemo()},{key:`lifecycle-callbacks`,title:`Lifecycle callbacks`,description:`Use lifecycle callbacks for analytics and event logs.`,code:`quickAlert.fire({
  title: 'Lifecycle callbacks',
  buttons: 'confirm-cancel',
  onOpen: ({ id }) => console.log('open', id),
  onConfirm: (result) => console.log('confirm', result.id),
  onCancel: (result) => console.log('cancel', result.id),
  onClose: (result) => console.log('close', result.dismissedBy),
  onTimeout: (result) => console.log('timeout', result.id)
});`,run:()=>this.showLifecycleDemo()},{key:`auto-theme`,title:`Auto theme`,description:`Resolve default or dark styling from the user system preference.`,code:`quickAlert.fire({
  title: 'Auto theme',
  message: 'theme: auto resolves when the alert opens.',
  type: 'success',
  theme: 'auto',
  ariaLabel: 'Auto theme alert'
});`,run:()=>this.showAutoThemeDemo()},{key:`global-config`,title:`Global defaults`,description:`Configure shared defaults, then reset them when needed.`,code:`quickAlert.configure({
  type: 'info',
  toast: true,
  position: 'top-right',
  timeout: 3500,
  showProgressBar: true
});

quickAlert.fire({ id: 'docs-toast', title: 'Configured default' });
quickAlert.resetConfig();`,run:()=>{this.configureDefaults(),this.showConfiguredToast(),this.resetDefaults()}},{key:`scoped-defaults`,title:`Scoped defaults`,description:`Create isolated alert instances so defaults do not leak across app areas.`,code:`import { createQuickAlert } from 'quick-alert';

const billingAlert = createQuickAlert({
  type: 'question',
  position: 'center',
  toast: false,
  buttons: 'ok'
});

await billingAlert.fire({
  title: 'Scoped defaults',
  message: 'Only this alert instance receives these defaults.'
});`,run:()=>this.showScopedDefaultsDemo()},{key:`close-methods`,title:`Close by API`,description:`Close one tracked alert by id, or clean up every active alert.`,code:`quickAlert.close('docs-toast');
quickAlert.closeAll();`,run:()=>{this.closeTrackedAlert(),this.closeAllAlerts()}}];alertTypes=[`success`,`error`,`warning`,`info`,`question`];themes=[`default`,`dark`,`auto`,`success`,`minimal`,`glass`,`material`,`bootstrap`];positions=[`top-right`,`top-left`,`bottom-right`,`bottom-left`,`center`,`center-left`,`center-right`,`top-center`,`bottom-center`];buttonPresets=[`ok`,`confirm`,`confirm-cancel`,`confirm-deny-cancel`,`none`];configRows=[{name:`id`,defaultValue:`generated`,description:`Identify an alert for close(id) and result tracking.`},{name:`title, subtitle, message, footer`,defaultValue:`''`,description:`Text-only content in the four text areas.`},{name:`content`,defaultValue:`undefined`,description:`Safe text, a DOM Node, or a browser-only DOM factory. Overrides message.`},{name:`type`,defaultValue:`'success'`,description:`success, error, warning, info, or question icon.`},{name:`toast, position`,defaultValue:`false, center`,description:`Choose modal or toast and where it appears.`},{name:`timeout, showProgressBar`,defaultValue:`4000, true`,description:`Toast duration in milliseconds and progress visibility.`},{name:`pauseOnHover, pauseOnFocus, onTimerChange`,defaultValue:`true, true, none`,description:`Pause a timed alert and observe the remaining seconds.`},{name:`buttons`,defaultValue:`automatic OK`,description:`ok, confirm, confirm-cancel, confirm-deny-cancel, or none.`},{name:`showConfirmButton, showDenyButton, showCancelButton`,defaultValue:`false`,description:`Legacy button flags when buttons is omitted.`},{name:`confirmButtonText, denyButtonText, cancelButtonText, okButtonText`,defaultValue:`action names`,description:`Visible action labels.`},{name:`showCloseButton, showIcon`,defaultValue:`false, true`,description:`Toggle the close control and state icon.`},{name:`theme, transition`,defaultValue:`default, slide`,description:`Visual preset and fade or slide entrance.`},{name:`buttonVariant, [action]ButtonVariant`,defaultValue:`solid`,description:`Use solid, outline, or ghost buttons globally or per action.`},{name:`[action]ButtonClass, customClass`,defaultValue:`''`,description:`Add action classes or classes for individual alert slots.`},{name:`ariaLabel, [action]AriaLabel, closeAriaLabel`,defaultValue:`''`,description:`Accessible labels for the dialog and controls.`},{name:`preConfirm, preDeny`,defaultValue:`undefined`,description:`Async actions; returning false keeps the modal open.`},{name:`onOpen, onClose, onConfirm, onDeny, onCancel, onOk, onTimeout`,defaultValue:`undefined`,description:`Lifecycle callbacks for UI work and analytics.`}];resultRows=[{name:`action`,description:`confirm, deny, cancel, ok, close, or timeout.`},{name:`id`,description:`The alert id supplied or generated when opened.`},{name:`dismissedBy`,description:`The exact button, Escape, timeout, or API close.`},{name:`isConfirm, isDeny, isCancel`,description:`Flags for a decision button.`},{name:`isOk, isClose, isTimeout`,description:`Flags for acknowledgement or dismissal.`}];dismissalRows=[{name:`confirm-button, deny-button, cancel-button, ok-button`,description:`An action button was pressed.`},{name:`close-button`,description:`The close control was pressed.`},{name:`escape`,description:`The modal was dismissed with Escape.`},{name:`timeout`,description:`The timed alert finished.`},{name:`api-close`,description:`close(id) or closeAll() dismissed the alert.`}];copyResetTimeout=null;constructor(){this.title.setTitle(`quick-alert | Universal Alert and Toast`),this.meta.updateTag({name:`description`,content:`Explore quick-alert: accessible modals and toasts for Angular, React, Vue, and plain JavaScript. Try every feature and copy working examples.`});let t=this.document.head.querySelector(`base`)?.getAttribute(`href`)??`/`;this.setPageLink(`icon`,`${t}quick-alert-favicon.svg`),this.setPageLink(`canonical`,`https://subha-patra.github.io/quick-alert/`),Pp(()=>{if(this.browserAbort.signal.aborted)return;let e=()=>this.showScrollTop.set(window.scrollY>400);window.addEventListener(`scroll`,e,{passive:!0,signal:this.browserAbort.signal}),e(),G(globalThis.fetch.bind(globalThis),new Date,this.browserAbort.signal).then(n=>{this.browserAbort.signal.aborted||this.packageStats.set(n)})})}ngOnDestroy(){this.browserAbort.abort(),this.clearCopyResetTimeout(),w.closeAll(),this.title.setTitle(this.previousTitle),this.previousDescription===null?this.meta.removeTag(`name="description"`):this.meta.updateTag({name:`description`,content:this.previousDescription}),this.restorePageLink(`icon`,this.previousIconHref),this.restorePageLink(`canonical`,this.previousCanonicalHref)}setPageLink(t,e){let n=this.document.head.querySelector(`link[rel="${t}"]`);n||(n=this.document.createElement(`link`),n.rel=t,this.document.head.appendChild(n)),n.href=e,t===`icon`&&(n.type=`image/svg+xml`)}restorePageLink(t,e){let n=this.document.head.querySelector(`link[rel="${t}"]`);n&&(e===null?n.remove():n.setAttribute(`href`,e))}publishedAgo(t){let e=Math.max(0,Math.floor((Date.now()-Date.parse(t))/864e5)),n=new Intl.RelativeTimeFormat(`en`,{numeric:`auto`});return e<7?n.format(-e,`day`):e<30?n.format(-Math.floor(e/7),`week`):e<365?n.format(-Math.floor(e/30),`month`):n.format(-Math.floor(e/365),`year`)}scrollToTop(){let t=window.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches??!1;window.scrollTo({top:0,behavior:t?`auto`:`smooth`})}async showAlert(){await this.runAlert(`success modal`,{title:`Payment received`,subtitle:`Success modal`,message:`The customer has paid and the receipt is ready.`,type:`success`,toast:!1,showCloseButton:!0,buttons:`confirm-cancel`,confirmButtonText:`View receipt`,cancelButtonText:`Later`})}async showWarningModal(){await this.runAlert(`warning modal`,{title:`Delete API key?`,subtitle:`This cannot be undone`,message:`Deny and cancel buttons make destructive confirmation flows clear.`,type:`warning`,toast:!1,showCloseButton:!0,buttons:`confirm-deny-cancel`,confirmButtonText:`Review`,denyButtonText:`Delete key`,cancelButtonText:`Cancel`})}async showErrorModal(){await this.runAlert(`error modal`,{title:`Payment failed`,message:`The card was declined. Ask the customer to try another payment method.`,type:`error`,toast:!1,showCloseButton:!0})}async showOkModal(){await this.runAlert(`ok modal`,{title:`Plain OK dialog`,message:`When confirm is hidden, quick-alert resolves with the ok action.`,type:`question`,toast:!1,okButtonText:`Got it`,showCloseButton:!0})}async showTypeDemo(t){await this.runAlert(`${t} type`,{title:`${t} alert`,message:`This live example uses type: '${t}'.`,type:t,toast:!1,buttons:`ok`,okButtonText:`OK`,showCloseButton:!0})}showPositionDemo(t){this.runAlert(`position ${t}`,{id:`position-${t}`,title:`${t} position`,message:`This toast uses position: '${t}'.`,type:`info`,toast:!0,position:t,timeout:2500,showCloseButton:!0,showProgressBar:!0})}async showTransitionDemo(t){await this.runAlert(`${t} transition`,{title:`${t} transition`,message:`This modal uses transition: '${t}'.`,type:`question`,toast:!1,transition:t,buttons:`ok`,okButtonText:`Nice`,showCloseButton:!0})}async showButtonPresetDemo(t){await this.runAlert(`buttons ${t}`,{title:`buttons: '${t}'`,message:`Button presets cover common action layouts with one option.`,type:t===`none`?`info`:`warning`,toast:!1,buttons:t,showCloseButton:!0,confirmButtonText:`Confirm`,denyButtonText:`Deny`,cancelButtonText:`Cancel`,okButtonText:`OK`})}async showLegacyFlagsDemo(){await this.runAlert(`legacy button flags`,{title:`Legacy button flags`,message:`The old showConfirmButton, showDenyButton, and showCancelButton options still work.`,type:`warning`,toast:!1,showConfirmButton:!0,showDenyButton:!0,showCancelButton:!0,showCloseButton:!0,confirmButtonText:`Confirm flag`,denyButtonText:`Deny flag`,cancelButtonText:`Cancel flag`})}async showTextPartsDemo(){await this.runAlert(`title subtitle message footer`,{title:`Title text`,subtitle:`Subtitle text`,message:`Message text shows the main alert content.`,footer:`Footer text can hold small notes or help copy.`,type:`info`,toast:!1,buttons:`ok`,okButtonText:`okButtonText`,showCloseButton:!0})}async showNoIconDemo(){await this.runAlert(`showIcon false`,{title:`No icon`,message:`This example uses showIcon: false.`,type:`success`,toast:!1,showIcon:!1,buttons:`ok`,showCloseButton:!0})}showNoProgressToast(){this.runAlert(`showProgressBar false`,{title:`No progress bar`,message:`This toast uses showProgressBar: false.`,type:`info`,toast:!0,position:`top-center`,timeout:2500,showProgressBar:!1,showCloseButton:!0})}async showStringClassDemo(){await this.runAlert(`customClass string`,{title:`String customClass`,message:`A string customClass applies to the popup card.`,type:`success`,toast:!1,customClass:`qa-demo-string-class`,buttons:`ok`,showCloseButton:!0})}async showCustomClassSlotsDemo(){await this.runAlert(`customClass slots`,{title:`Slot customClass`,subtitle:`Every visible slot can be styled`,message:`This call passes popup, overlay, icon, text, button, close, and progress slot classes.`,footer:`Use CSS in your app to style these classes.`,type:`warning`,toast:!1,buttons:`confirm-deny-cancel`,showCloseButton:!0,confirmButtonText:`Styled confirm`,denyButtonText:`Styled deny`,cancelButtonText:`Styled cancel`,customClass:{popup:`qa-demo-popup`,overlay:`qa-demo-overlay`,icon:`qa-demo-icon`,title:`qa-demo-title`,subtitle:`qa-demo-subtitle`,message:`qa-demo-message`,footer:`qa-demo-footer`,actions:`qa-demo-actions`,okButton:`qa-demo-ok`,confirmButton:`qa-demo-confirm`,denyButton:`qa-demo-deny`,cancelButton:`qa-demo-cancel`,closeButton:`qa-demo-close`,progress:`qa-demo-progress`,progressBar:`qa-demo-progress-bar`}})}showQueueDemo(){this.runAlert(`queue first`,{id:`queue-first`,title:`First queued modal`,message:`Open another modal before closing this one; quick-alert keeps them in order.`,type:`question`,toast:!1,buttons:`ok`,showCloseButton:!0}),this.runAlert(`queue second`,{id:`queue-second`,title:`Second queued modal`,message:`This modal waits until the first one resolves.`,type:`info`,toast:!1,buttons:`ok`,showCloseButton:!0})}showStackDemo(){this.runAlert(`stack one`,{id:`stack-one`,title:`Stacked toast one`,message:`Toasts render immediately in the same position stack.`,type:`success`,toast:!0,position:`top-right`,timeout:3500,showCloseButton:!0}),this.runAlert(`stack two`,{id:`stack-two`,title:`Stacked toast two`,message:`The second toast sits below the first instead of overlapping.`,type:`info`,toast:!0,position:`top-right`,timeout:3500,showCloseButton:!0})}async showThemeAccessibilityDemo(){await this.runAlert(`theme accessibility`,{title:``,message:`Theme, button variants, custom classes, and ARIA labels can be set per alert.`,type:`question`,toast:!1,theme:`dark`,ariaLabel:`Accessible themed alert`,buttons:`confirm-cancel`,buttonVariant:`outline`,confirmButtonVariant:`solid`,confirmButtonText:`Confirm theme`,cancelButtonText:`Cancel`,confirmAriaLabel:`Confirm themed alert`,closeAriaLabel:`Close themed alert`,confirmButtonClass:`qa-demo-confirm`,showCloseButton:!0})}async showAsyncDemo(){await this.runAlert(`async preConfirm`,{title:`Verify on server`,message:`The confirm button enters loading state while preConfirm resolves.`,type:`warning`,toast:!1,buttons:`confirm-cancel`,confirmButtonText:`Verify`,cancelButtonText:`Cancel`,showCloseButton:!0,preConfirm:()=>new Promise(t=>{setTimeout(t,900)})})}showPausingTimerDemo(){this.runAlert(`pausing timer`,{id:`pausing-timer`,title:`Pauseable timer`,message:`Hover or focus this toast to pause its timeout and progress bar.`,type:`info`,toast:!0,position:`top-center`,timeout:5e3,pauseOnHover:!0,pauseOnFocus:!0,showProgressBar:!0,showCloseButton:!0,onTimerChange:(t,e)=>this.addEvent(`timer`,`${e}: ${t}s`)})}async showResultMetadataDemo(){await this.runAlert(`result metadata`,{id:`metadata-demo`,title:`Result metadata`,message:`The resolved result includes id and dismissedBy for analytics.`,type:`success`,toast:!1,buttons:`confirm-cancel`,confirmButtonText:`Track confirm`,cancelButtonText:`Track cancel`,showCloseButton:!0})}async showCustomContentDemo(){await this.runAlert(`custom content`,{title:`Safe custom content`,message:`This fallback text is ignored because content is provided.`,type:`info`,toast:!1,buttons:`ok`,showCloseButton:!0,content:({document:t})=>{let e=t.createElement(`ul`);return e.className=`qa-demo-content-list`,[`DOM node content`,`No innerHTML`,`Text remains safe by default`].forEach(n=>{let r=t.createElement(`li`);r.textContent=n,e.appendChild(r)}),e}})}async showLifecycleDemo(){await this.runAlert(`lifecycle callbacks`,{title:`Lifecycle callbacks`,message:`Open, action, timeout, and close callbacks can feed analytics or logs.`,type:`question`,toast:!1,buttons:`confirm-cancel`,confirmButtonText:`Run confirm`,cancelButtonText:`Cancel`,showCloseButton:!0,onOpen:({id:t})=>this.addEvent(`onOpen`,t),onConfirm:t=>this.addEvent(`onConfirm`,t.id),onCancel:t=>this.addEvent(`onCancel`,t.id),onTimeout:t=>this.addEvent(`onTimeout`,t.id),onClose:t=>this.addEvent(`onClose`,t.dismissedBy)})}async showAutoThemeDemo(){await this.runAlert(`auto theme`,{title:`Auto theme`,message:`theme: auto resolves to dark or default when the alert opens.`,type:`success`,toast:!1,theme:`auto`,ariaLabel:`Auto theme alert`,buttons:`ok`,showCloseButton:!0})}showToast(){this.runAlert(`info toast`,{title:`Toast notification`,message:`This toast closes by itself and shows a progress bar.`,type:`info`,toast:!0,position:`top-right`,showCloseButton:!0,showProgressBar:!0})}showPositionToast(){this.runAlert(`bottom toast`,{title:`Bottom-right toast`,message:`Position can be changed per alert.`,type:`success`,toast:!0,position:`bottom-right`,timeout:3500,showProgressBar:!0,showCloseButton:!0})}configureDefaults(){w.configure({type:`info`,toast:!0,position:`top-right`,timeout:3500,showProgressBar:!0}),this.addEvent(`configure`,`toast defaults applied`),this.lastAction.set(`Configured default toast options`)}resetDefaults(){w.resetConfig(),this.addEvent(`resetConfig`,`global defaults cleared`),this.lastAction.set(`Reset quick-alert defaults`)}showConfiguredToast(){this.runAlert(`configured toast`,{id:`docs-toast`,title:`Configured default`,message:`This alert inherits type, toast, position, timeout, and progress settings.`,showCloseButton:!0})}async showScopedDefaultsDemo(){let e=await L({type:`question`,position:`center`,toast:!1,buttons:`ok`,okButtonText:`Scoped OK`}).fire({title:`Scoped defaults`,message:`This alert was created with createQuickAlert(defaults).`,showCloseButton:!0});this.recordResult(`createQuickAlert`,e)}closeTrackedAlert(){w.close(`docs-toast`),this.addEvent(`close(id)`,`docs-toast`),this.lastAction.set(`Closed alert id: docs-toast`)}closeAllAlerts(){w.closeAll(),this.addEvent(`closeAll`,`all active alerts`),this.lastAction.set(`Closed all active alerts`)}runCopyableExample(t){t.run()}scrollToSection(t){typeof document<`u`&&document.getElementById(t)?.scrollIntoView({behavior:`smooth`,block:`start`})}themeSnippet(t){return`quickAlert.fire({
  title: '${t} theme',
  theme: '${t}',
  buttons: 'confirm-cancel'
});`}iconSnippet(t){return`quickAlert.fire({
  title: '${t} alert',
  type: '${t}',
  buttons: 'ok'
});`}showThemeDemo(t){this.runAlert(`${t} theme`,{title:`${t} theme`,theme:t,type:`info`,toast:!1,buttons:`confirm-cancel`,showCloseButton:!0})}copyToClipboard(t){let e=globalThis.navigator?.clipboard;e?.writeText?e.writeText(t).catch(()=>this.copyWithTextarea(t)):this.copyWithTextarea(t),this.copiedValue.set(t),this.addEvent(`copied`,t),this.clearCopyResetTimeout(),this.copyResetTimeout=setTimeout(()=>this.copiedValue.set(null),1600)}async runAlert(t,e){let n=await w.fire(e);this.recordResult(t,n)}recordResult(t,e){this.lastAction.set(`${t}: ${e.action} (${e.dismissedBy})`),this.addEvent(t,`${e.id}:${e.dismissedBy}`)}addEvent(t,e){this.eventLog.update(n=>[{label:t,value:e},...n].slice(0,7))}clearCopyResetTimeout(){this.copyResetTimeout&&(clearTimeout(this.copyResetTimeout),this.copyResetTimeout=null)}copyWithTextarea(t){if(typeof document>`u`)return;let e=document.createElement(`textarea`);e.value=t,e.setAttribute(`readonly`,``),e.style.position=`fixed`,e.style.opacity=`0`,document.body.appendChild(e),e.select(),document.execCommand(`copy`),e.remove()}static ɵfac=function(e){return new(e||s)};static ɵcmp=aT({type:s,selectors:[[`app-alert`]],decls:317,vars:15,consts:[[1,`alert-docs`],[1,`intro`],[1,`eyebrow`],[1,`lead`],[`aria-label`,`Package statistics`,1,`package-stats`],[`data-testid`,`github-stars`,`target`,`_blank`,`rel`,`noopener noreferrer`,3,`href`],[`aria-label`,`On this page`,1,`page-nav`],[`type`,`button`,3,`click`],[`type`,`button`,`data-testid`,`scroll-to-top`,`title`,`Scroll to top`,`aria-label`,`Scroll to top`,`aria-hidden`,`false`,1,`scroll-to-top`],[`data-testid`,`docs-section`,`id`,`install`,`aria-labelledby`,`install-title`,1,`docs-section`],[`id`,`install-title`],[1,`code-block`],[1,`code-toolbar`],[`type`,`button`,`data-testid`,`copy-install-command`,3,`click`],[`data-testid`,`docs-section`,`id`,`usage`,`aria-labelledby`,`usage-title`,1,`docs-section`],[`id`,`usage-title`],[1,`note`],[`data-testid`,`sweetalert-docs-examples`,`id`,`examples`,`aria-labelledby`,`examples-title`,1,`docs-section`],[`id`,`examples-title`],[`aria-live`,`polite`,1,`live-result`],[1,`example-list`],[`data-testid`,`docs-example-row`,1,`example-row`],[`data-testid`,`docs-section`,`id`,`integrations`,`aria-labelledby`,`integrations-title`,1,`docs-section`],[`id`,`integrations-title`],[1,`integration-list`],[`data-testid`,`docs-section`,`id`,`themes`,`aria-labelledby`,`themes-title`,1,`docs-section`],[`id`,`themes-title`],[1,`theme-list`],[1,`theme-row`],[`data-testid`,`docs-section`,`id`,`configuration`,`aria-labelledby`,`configuration-title`,1,`docs-section`],[`id`,`configuration-title`],[1,`table-scroll`],[`data-testid`,`docs-section`,`id`,`options`,`aria-labelledby`,`options-title`,1,`docs-section`],[`id`,`options-title`],[1,`option-group`],[1,`option-buttons`],[`type`,`button`],[`type`,`button`,`data-testid`,`show-legacy-flags`,`title`,`showConfirmButton, showDenyButton, showCancelButton`,3,`click`],[`type`,`button`,`data-testid`,`show-transition-fade`,3,`click`],[`type`,`button`,`data-testid`,`show-custom-class-slots`,3,`click`],[`type`,`button`,`data-testid`,`show-theme-accessibility-demo`,3,`click`],[`type`,`button`,`data-testid`,`show-queue-demo`,3,`click`],[`type`,`button`,`data-testid`,`show-stack-demo`,3,`click`],[`type`,`button`,`data-testid`,`show-async-demo`,3,`click`],[`type`,`button`,`data-testid`,`show-pausing-timer-demo`,3,`click`],[`type`,`button`,`data-testid`,`show-custom-content-demo`,3,`click`],[`type`,`button`,`data-testid`,`show-lifecycle-demo`,3,`click`],[`type`,`button`,`data-testid`,`show-auto-theme-demo`,3,`click`],[`type`,`button`,`data-testid`,`show-result-metadata-demo`,3,`click`],[`data-testid`,`docs-section`,`id`,`buttons`,`aria-labelledby`,`buttons-title`,1,`docs-section`],[`id`,`buttons-title`],[`type`,`button`,`aria-label`,`Copy result example`,3,`click`],[`data-testid`,`docs-section`,`id`,`dismissals`,`aria-labelledby`,`dismissals-title`,1,`docs-section`],[`id`,`dismissals-title`],[`data-testid`,`docs-section`,`id`,`icons`,`aria-labelledby`,`icons-title`,1,`docs-section`],[`id`,`icons-title`],[1,`icon-list`],[1,`icon-row`],[`data-testid`,`docs-section`,`id`,`methods`,`aria-labelledby`,`methods-title`,1,`docs-section`],[`id`,`methods-title`],[`scope`,`row`],[1,`option-buttons`,`method-actions`],[`type`,`button`,`data-testid`,`close-tracked-alert`,3,`click`],[`type`,`button`,`data-testid`,`close-all-alerts`,3,`click`],[`type`,`button`,`aria-label`,`Copy methods example`,3,`click`],[`aria-labelledby`,`log-title`,1,`docs-section`,`result-section`],[`id`,`log-title`],[1,`event-log`],[3,`title`],[`aria-hidden`,`true`],[`type`,`button`,`data-testid`,`scroll-to-top`,`title`,`Scroll to top`,`aria-label`,`Scroll to top`,`aria-hidden`,`false`,1,`scroll-to-top`,3,`click`],[1,`example-detail`],[`type`,`button`,1,`try-button`,3,`click`],[`aria-hidden`,`true`,1,`theme-preview`],[1,`theme-copy`]],template:function(e,n){if(e&1&&(hl(0,`main`,0)(1,`header`,1)(2,`p`,2),HC(3,`Documentation and live examples `),hl(4,`span`),HC(5,`v2.0.0`),gl()(),hl(6,`h1`),HC(7,`quick-alert`),gl(),hl(8,`p`,3),HC(9,`Alerts and toasts for Angular, React, Vue, and plain JavaScript. Try an example, then copy the code beside it.`),gl(),hl(10,`div`,4),JT(11,ot,4,1,`span`),JT(12,it,4,2,`span`),JT(13,at,4,1,`span`),JT(14,rt,6,3,`a`,5),gl(),hl(15,`nav`,6)(16,`button`,7),dg(`click`,function(){return n.scrollToSection(`install`)}),HC(17,`Install`),gl(),hl(18,`button`,7),dg(`click`,function(){return n.scrollToSection(`examples`)}),HC(19,`Examples`),gl(),hl(20,`button`,7),dg(`click`,function(){return n.scrollToSection(`integrations`)}),HC(21,`Integrations`),gl(),hl(22,`button`,7),dg(`click`,function(){return n.scrollToSection(`themes`)}),HC(23,`Themes`),gl(),hl(24,`button`,7),dg(`click`,function(){return n.scrollToSection(`configuration`)}),HC(25,`API reference`),gl()()(),JT(26,st,2,0,`button`,8),hl(27,`section`,9)(28,`h2`,10),HC(29,`Download & install`),gl(),hl(30,`p`),HC(31,`Install the package in any JavaScript project. It has no framework runtime dependency.`),gl(),hl(32,`div`,11)(33,`div`,12)(34,`span`),HC(35,`Terminal`),gl(),hl(36,`button`,13),dg(`click`,function(){return n.copyToClipboard(n.installCommand)}),HC(37),gl()(),hl(38,`pre`)(39,`code`),HC(40,`npm install quick-alert`),gl()()()(),hl(41,`section`,14)(42,`h2`,15),HC(43,`Usage`),gl(),hl(44,`p`),HC(45,`Import the same API in every framework, then call `),hl(46,`code`),HC(47,`fire()`),gl(),HC(48,` from a browser event.`),gl(),hl(49,`div`,11)(50,`div`,12)(51,`span`),HC(52,`JavaScript / TypeScript`),gl(),hl(53,`button`,7),dg(`click`,function(){return n.copyToClipboard(n.usageSnippet)}),HC(54),gl()(),hl(55,`pre`)(56,`code`),HC(57),gl()()(),hl(58,`p`,16),HC(59,`On the server, importing the package is safe. Open alerts from a browser event or mounted component.`),gl()(),hl(60,`section`,17)(61,`h2`,18),HC(62,`Examples`),gl(),hl(63,`p`),HC(64,`Each example opens the actual alert. The code on the right uses the same public API.`),gl(),hl(65,`div`,19)(66,`span`),HC(67,`Last result`),gl(),hl(68,`strong`),HC(69),gl()(),hl(70,`div`,20),nC(71,lt,17,7,`article`,21,et),gl()(),hl(73,`section`,22)(74,`h2`,23),HC(75,`Integrations`),gl(),hl(76,`p`),HC(77,`One root import works across frameworks. Use the call in a client event handler; no provider or plugin registration is required.`),gl(),hl(78,`div`,24),nC(79,ct,12,5,`details`,null,B),gl()(),hl(81,`section`,25)(82,`h2`,26),HC(83,`Themes`),gl(),hl(84,`p`),HC(85,`Select a built-in preset with `),hl(86,`code`),HC(87,`theme`),gl(),HC(88,`. The `),hl(89,`code`),HC(90,`auto`),gl(),HC(91,` preset follows the user's color scheme when the alert opens.`),gl(),hl(92,`div`,27),nC(93,dt,21,8,`article`,28,tC),gl()(),hl(95,`section`,29)(96,`h2`,30),HC(97,`Configuration parameters`),gl(),hl(98,`p`),HC(99,`Pass an options object to `),hl(100,`code`),HC(101,`quickAlert.fire()`),gl(),HC(102,`. Global defaults can be set with `),hl(103,`code`),HC(104,`configure()`),gl(),HC(105,`; use `),hl(106,`code`),HC(107,`createQuickAlert()`),gl(),HC(108,` for isolated defaults.`),gl(),hl(109,`div`,31)(110,`table`)(111,`thead`)(112,`tr`)(113,`th`),HC(114,`Option`),gl(),hl(115,`th`),HC(116,`Default`),gl(),hl(117,`th`),HC(118,`What it does`),gl()()(),hl(119,`tbody`),nC(120,ut,9,3,`tr`,null,B),gl()()()(),hl(122,`section`,32)(123,`h2`,33),HC(124,`Options in action`),gl(),hl(125,`p`),HC(126,`Try the smaller options individually, then copy the option name from the reference table above.`),gl(),hl(127,`div`,34)(128,`h3`),HC(129,`Positions`),gl(),hl(130,`div`,35),nC(131,mt,2,2,`button`,36,tC),gl()(),hl(133,`div`,34)(134,`h3`),HC(135,`Button layouts`),gl(),hl(136,`div`,35),nC(137,pt,2,2,`button`,36,tC),hl(139,`button`,37),dg(`click`,function(){return n.showLegacyFlagsDemo()}),HC(140,`Legacy flags`),gl()()(),hl(141,`div`,34)(142,`h3`),HC(143,`Transitions and styling`),gl(),hl(144,`div`,35)(145,`button`,38),dg(`click`,function(){return n.showTransitionDemo(`fade`)}),HC(146,`fade`),gl(),hl(147,`button`,7),dg(`click`,function(){return n.showTransitionDemo(`slide`)}),HC(148,`slide`),gl(),hl(149,`button`,7),dg(`click`,function(){return n.showNoIconDemo()}),HC(150,`No icon`),gl(),hl(151,`button`,7),dg(`click`,function(){return n.showNoProgressToast()}),HC(152,`No progress bar`),gl(),hl(153,`button`,7),dg(`click`,function(){return n.showTextPartsDemo()}),HC(154,`Text sections`),gl(),hl(155,`button`,7),dg(`click`,function(){return n.showStringClassDemo()}),HC(156,`String class`),gl(),hl(157,`button`,39),dg(`click`,function(){return n.showCustomClassSlotsDemo()}),HC(158,`Class slots`),gl(),hl(159,`button`,40),dg(`click`,function(){return n.showThemeAccessibilityDemo()}),HC(160,`ARIA and variants`),gl()()(),hl(161,`div`,34)(162,`h3`),HC(163,`Flows and timing`),gl(),hl(164,`div`,35)(165,`button`,41),dg(`click`,function(){return n.showQueueDemo()}),HC(166,`Modal queue`),gl(),hl(167,`button`,42),dg(`click`,function(){return n.showStackDemo()}),HC(168,`Toast stack`),gl(),hl(169,`button`,43),dg(`click`,function(){return n.showAsyncDemo()}),HC(170,`Async confirm`),gl(),hl(171,`button`,44),dg(`click`,function(){return n.showPausingTimerDemo()}),HC(172,`Pauseable timer`),gl(),hl(173,`button`,45),dg(`click`,function(){return n.showCustomContentDemo()}),HC(174,`Safe content`),gl(),hl(175,`button`,46),dg(`click`,function(){return n.showLifecycleDemo()}),HC(176,`Lifecycle`),gl(),hl(177,`button`,47),dg(`click`,function(){return n.showAutoThemeDemo()}),HC(178,`Auto theme`),gl(),hl(179,`button`,48),dg(`click`,function(){return n.showResultMetadataDemo()}),HC(180,`Result metadata`),gl()()()(),hl(181,`section`,49)(182,`h2`,50),HC(183,`Handling buttons`),gl(),hl(184,`p`)(185,`code`),HC(186,`fire()`),gl(),HC(187,` returns a promise. Read the action flag or the exact `),hl(188,`code`),HC(189,`dismissedBy`),gl(),HC(190,` value.`),gl(),hl(191,`div`,11)(192,`div`,12)(193,`span`),HC(194,`Promise result`),gl(),hl(195,`button`,51),dg(`click`,function(){return n.copyToClipboard(n.resultSnippet)}),HC(196),gl()(),hl(197,`pre`)(198,`code`),HC(199),gl()()(),hl(200,`div`,31)(201,`table`)(202,`thead`)(203,`tr`)(204,`th`),HC(205,`Result key`),gl(),hl(206,`th`),HC(207,`Meaning`),gl()()(),hl(208,`tbody`),nC(209,ft,6,2,`tr`,null,B),gl()()()(),hl(211,`section`,52)(212,`h2`,53),HC(213,`Handling dismissals`),gl(),hl(214,`p`),HC(215,`The `),hl(216,`code`),HC(217,`dismissedBy`),gl(),HC(218,` field tells you how an alert ended, including Escape, timeout, and API close.`),gl(),hl(219,`div`,31)(220,`table`)(221,`thead`)(222,`tr`)(223,`th`),HC(224,`Reason`),gl(),hl(225,`th`),HC(226,`When it happens`),gl()()(),hl(227,`tbody`),nC(228,ht,6,2,`tr`,null,B),gl()()()(),hl(230,`section`,54)(231,`h2`,55),HC(232,`Icons`),gl(),hl(233,`p`),HC(234,`The five alert types use inline SVG icons. Set `),hl(235,`code`),HC(236,`showIcon: false`),gl(),HC(237,` when an icon is not needed.`),gl(),hl(238,`div`,56),nC(239,gt,16,8,`div`,57,tC),gl()(),hl(241,`section`,58)(242,`h2`,59),HC(243,`Methods`),gl(),hl(244,`div`,31)(245,`table`)(246,`thead`)(247,`tr`)(248,`th`),HC(249,`Method`),gl(),hl(250,`th`),HC(251,`Purpose`),gl()()(),hl(252,`tbody`)(253,`tr`)(254,`th`,60)(255,`code`),HC(256,`quickAlert.fire(options)`),gl()(),hl(257,`td`),HC(258,`Open a modal or toast and await its result.`),gl()(),hl(259,`tr`)(260,`th`,60)(261,`code`),HC(262,`quickAlert.close(id?)`),gl()(),hl(263,`td`),HC(264,`Close the matching alert or the current one.`),gl()(),hl(265,`tr`)(266,`th`,60)(267,`code`),HC(268,`quickAlert.closeAll()`),gl()(),hl(269,`td`),HC(270,`Close active alerts and queued modals.`),gl()(),hl(271,`tr`)(272,`th`,60)(273,`code`),HC(274,`quickAlert.configure(defaults)`),gl()(),hl(275,`td`),HC(276,`Set defaults for the shared controller.`),gl()(),hl(277,`tr`)(278,`th`,60)(279,`code`),HC(280,`quickAlert.resetConfig()`),gl()(),hl(281,`td`),HC(282,`Restore the original defaults.`),gl()(),hl(283,`tr`)(284,`th`,60)(285,`code`),HC(286,`createQuickAlert(defaults)`),gl()(),hl(287,`td`),HC(288,`Create an independent controller with scoped defaults.`),gl()()()()(),hl(289,`div`,61)(290,`button`,7),dg(`click`,function(){return n.configureDefaults()}),HC(291,`Configure defaults`),gl(),hl(292,`button`,7),dg(`click`,function(){return n.showConfiguredToast()}),HC(293,`Try configured toast`),gl(),hl(294,`button`,7),dg(`click`,function(){return n.resetDefaults()}),HC(295,`Reset config`),gl(),hl(296,`button`,7),dg(`click`,function(){return n.showScopedDefaultsDemo()}),HC(297,`Try scoped alert`),gl(),hl(298,`button`,62),dg(`click`,function(){return n.closeTrackedAlert()}),HC(299,`Close by ID`),gl(),hl(300,`button`,63),dg(`click`,function(){return n.closeAllAlerts()}),HC(301,`Close all`),gl()(),hl(302,`div`,11)(303,`div`,12)(304,`span`),HC(305,`Controller methods`),gl(),hl(306,`button`,64),dg(`click`,function(){return n.copyToClipboard(n.methodsSnippet)}),HC(307),gl()(),hl(308,`pre`)(309,`code`),HC(310),gl()()()(),hl(311,`section`,65)(312,`h2`,66),HC(313,`Result log`),gl(),hl(314,`ul`,67),nC(315,bt,5,2,`li`,null,nt),gl()()()),e&2){let r,l,c;II(11),XT((r=n.packageStats().version)?11:-1,r),II(),XT((l=n.packageStats().updatedAt)?12:-1,l),II(),XT(n.packageStats().downloads!==void 0?13:-1),II(),XT((c=n.packageStats().stars)?14:-1,c),II(12),XT(n.showScrollTop()?26:-1),II(10),Xh(`aria-label`,n.copiedValue()===n.installCommand?`Copied install command`:`Copy install command`),II(),Rg(n.copiedValue()===n.installCommand?`Copied`:`Copy`),II(16),Xh(`aria-label`,n.copiedValue()===n.usageSnippet?`Copied usage code`:`Copy usage code`),II(),Rg(n.copiedValue()===n.usageSnippet?`Copied`:`Copy`),II(3),Rg(n.usageSnippet),II(12),Rg(n.lastAction()),II(2),rC(n.copyableExamples),II(8),rC(n.frameworkSnippets),II(14),rC(n.themes),II(27),rC(n.configRows),II(11),rC(n.positions),II(6),rC(n.buttonPresets),II(59),Rg(n.copiedValue()===n.resultSnippet?`Copied`:`Copy`),II(3),Rg(n.resultSnippet),II(10),rC(n.resultRows),II(19),rC(n.dismissalRows),II(11),rC(n.alertTypes),II(68),Rg(n.copiedValue()===n.methodsSnippet?`Copied`:`Copy`),II(3),Rg(n.methodsSnippet),II(5),rC(n.eventLog())}},styles:[`.alert-docs[_ngcontent-%COMP%]{min-height:100vh;background:#f7f9fc;color:#252a35;font:16px/1.6 Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;padding:36px clamp(16px,4vw,56px) 100px}.intro[_ngcontent-%COMP%], .docs-section[_ngcontent-%COMP%]{max-width:1040px;margin-inline:auto}.intro[_ngcontent-%COMP%]{padding:20px 0 0}.eyebrow[_ngcontent-%COMP%]{color:#5664a9;font-size:12px;font-weight:750;margin:0 0 12px;text-transform:uppercase}.eyebrow[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#697386;margin-left:8px}h1[_ngcontent-%COMP%]{font-size:clamp(42px,6vw,64px);line-height:1;margin:0}.lead[_ngcontent-%COMP%]{color:#596273;font-size:19px;max-width:700px;margin:18px 0 0}.package-stats[_ngcontent-%COMP%]{align-items:center;color:#657083;display:flex;flex-wrap:wrap;gap:8px 22px;min-height:24px;margin-top:20px;font-size:13px}.package-stats[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#4058ab;font-weight:700}.package-stats[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{align-items:center;color:#36435a;display:inline-flex;gap:5px;text-decoration:none}.package-stats[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .package-stats[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus-visible{color:#4058ab;text-decoration:underline}.package-stats[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:inherit}.scroll-to-top[_ngcontent-%COMP%]{align-items:center;background:#fff;border:1px solid #cbd3e2;border-radius:50%;bottom:calc(20px + env(safe-area-inset-bottom));box-shadow:0 5px 18px #25345424;color:#384964;cursor:pointer;display:flex;font:22px/1 system-ui,sans-serif;height:44px;justify-content:center;position:fixed;right:calc(20px + env(safe-area-inset-right));width:44px;z-index:20}.scroll-to-top[_ngcontent-%COMP%]:hover, .scroll-to-top[_ngcontent-%COMP%]:focus-visible{border-color:#5665d8;color:#4354c4;outline:2px solid #adb8f2;outline-offset:2px}.page-nav[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:10px}.page-nav[_ngcontent-%COMP%]{border-bottom:1px solid #dce2eb;margin-top:28px;padding-bottom:13px}.page-nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:0;background:none;color:#46536b;cursor:pointer;font:inherit;font-size:14px;font-weight:650;padding:5px 11px}.page-nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .page-nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus-visible{color:#4354c4;text-decoration:underline}.code-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:transparent;border:0;cursor:pointer;font:inherit;font-size:12px;font-weight:700;padding:7px 12px}.docs-section[_ngcontent-%COMP%]{border-top:1px solid #dce2eb;padding:48px 0 54px;scroll-margin-top:18px}.docs-section#install[_ngcontent-%COMP%]{border-top:0}.docs-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#4f5869;font-size:27px;font-weight:550;line-height:1.2;margin:0 0 16px;text-align:center;text-transform:uppercase}.docs-section[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{color:#5b6574;margin:0 auto 26px;max-width:780px;text-align:center}.docs-section[_ngcontent-%COMP%] > .note[_ngcontent-%COMP%]{color:#697386;font-size:14px;margin-top:14px}.docs-section[_ngcontent-%COMP%] > .code-block[_ngcontent-%COMP%]{max-width:780px;margin-inline:auto}.code-block[_ngcontent-%COMP%]{background:#272c36;border:1px solid #242a33;border-radius:4px;min-width:0;overflow:hidden}.code-toolbar[_ngcontent-%COMP%]{align-items:center;background:#20252d;color:#bdc7d5;display:flex;font-size:11px;font-weight:650;justify-content:space-between;min-height:32px;padding-left:12px;text-transform:uppercase}.code-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{align-self:stretch;border-left:1px solid #3b414d;color:#e4e8f0;min-width:62px}.code-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .code-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus-visible{background:#45506b;color:#fff}pre[_ngcontent-%COMP%]{color:#dce7d2;font:13px/1.55 ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;margin:0;overflow:auto;padding:12px 14px;tab-size:2}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{white-space:pre}code[_ngcontent-%COMP%]{font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace}.live-result[_ngcontent-%COMP%]{align-items:baseline;background:#edf1f8;border-left:3px solid #5665d8;color:#546074;display:flex;flex-wrap:wrap;gap:14px;margin-bottom:16px;padding:9px 14px}.live-result[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:12px;font-weight:800;text-transform:uppercase}.live-result[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#263247;font-size:14px;overflow-wrap:anywhere}.example-list[_ngcontent-%COMP%]{border-top:1px solid #dce2eb}.example-row[_ngcontent-%COMP%]{display:grid;gap:24px;grid-template-columns:minmax(0,260px) minmax(0,1fr);padding:24px 0;border-bottom:1px solid #dce2eb}.example-detail[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .theme-copy[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:17px;font-weight:650;line-height:1.3;margin:0 0 7px}.example-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#677180;font-size:14px;line-height:1.5;margin:0 0 16px}.try-button[_ngcontent-%COMP%]{background:#6262d7;border:1px solid #6262d7;border-radius:4px;color:#fff;cursor:pointer;font:inherit;font-size:14px;font-weight:700;min-height:38px;padding:6px 18px}.try-button[_ngcontent-%COMP%]:hover, .try-button[_ngcontent-%COMP%]:focus-visible{background:#4b4bb6;outline:2px solid #b6b6f4;outline-offset:2px}.example-row[_ngcontent-%COMP%]   .code-block[_ngcontent-%COMP%]{align-self:start}.integration-list[_ngcontent-%COMP%]{border-top:1px solid #dce2eb;max-width:780px;margin-inline:auto}.integration-list[_ngcontent-%COMP%]   details[_ngcontent-%COMP%]{border-bottom:1px solid #dce2eb;padding:11px 0}.integration-list[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%]{color:#354158;cursor:pointer;font-weight:650;padding:3px 5px}.integration-list[_ngcontent-%COMP%]   .code-block[_ngcontent-%COMP%]{margin-top:10px}.theme-list[_ngcontent-%COMP%]{border-top:1px solid #dce2eb}.theme-row[_ngcontent-%COMP%]{align-items:center;border-bottom:1px solid #dce2eb;display:grid;gap:20px;grid-template-columns:170px 140px minmax(0,1fr);padding:20px 0}.theme-preview[_ngcontent-%COMP%]{background:#fff;border:1px solid #cbd3e2;border-radius:4px;box-shadow:0 3px 10px #20314c12;color:#283246;display:grid;gap:3px;height:94px;padding:12px 15px}.theme-preview[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:14px;line-height:1.2;text-transform:capitalize}.theme-preview[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#6b7280;font-size:11px}.theme-preview[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{background:#6262d7;border-radius:3px;height:12px;margin-top:6px;width:44px}.theme-dark[_ngcontent-%COMP%]{background:#252b37;color:#fff}.theme-dark[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#bdc5d4}.theme-auto[_ngcontent-%COMP%]{background:linear-gradient(145deg,#252b37 0 50%,#fff 50% 100%);color:#fff}.theme-success[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{background:#29a569}.theme-minimal[_ngcontent-%COMP%]{box-shadow:none;border-color:transparent}.theme-glass[_ngcontent-%COMP%]{background:#ffffffb0;box-shadow:0 8px 18px #6986af40}.theme-material[_ngcontent-%COMP%]{box-shadow:0 6px 14px #20314c38}.theme-bootstrap[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{background:#0d6efd}.theme-copy[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-transform:capitalize}.theme-copy[_ngcontent-%COMP%]   .try-button[_ngcontent-%COMP%]{padding-inline:12px}.table-scroll[_ngcontent-%COMP%]{overflow-x:auto}table[_ngcontent-%COMP%]{border-collapse:collapse;font-size:14px;text-align:left;width:100%}thead[_ngcontent-%COMP%]{background:#fff;color:#465269}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{border-bottom:1px solid #e1e6ee;padding:11px 14px;vertical-align:top}th[_ngcontent-%COMP%]{font-weight:650}tbody[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{color:#c12c6b;min-width:210px}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background:#f0f3f9}td[_ngcontent-%COMP%]{color:#4f5a69}td[_ngcontent-%COMP%]   code[_ngcontent-%COMP%], th[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#eef1f5;border-radius:3px;overflow-wrap:anywhere;padding:2px 4px}.option-group[_ngcontent-%COMP%]{border-top:1px solid #dce2eb;padding:16px 0}.option-group[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#37445b;font-size:16px;margin:0 0 10px}.option-buttons[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:8px}.option-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:#fff;border:1px solid #cdd6e5;border-radius:4px;color:#33435f;cursor:pointer;font:inherit;font-size:13px;padding:7px 12px}.option-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .option-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus-visible{border-color:#6262d7;color:#4b4bb6;outline:none}.method-actions[_ngcontent-%COMP%]{margin:20px 0}.icon-list[_ngcontent-%COMP%]{border-top:1px solid #dce2eb}.icon-row[_ngcontent-%COMP%]{align-items:center;border-bottom:1px solid #dce2eb;display:grid;gap:16px;grid-template-columns:54px 90px 112px minmax(0,1fr);padding:16px 0}.icon-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{text-transform:capitalize}.icon-mark[_ngcontent-%COMP%]{align-items:center;border:2px solid currentColor;border-radius:50%;display:flex;font-size:26px;height:48px;justify-content:center;width:48px}.icon-success[_ngcontent-%COMP%]{color:#34a268}.icon-error[_ngcontent-%COMP%]{color:#e06b72}.icon-warning[_ngcontent-%COMP%]{color:#de9a4e}.icon-info[_ngcontent-%COMP%]{color:#41a9d0}.icon-question[_ngcontent-%COMP%]{color:#829bab}.icon-row[_ngcontent-%COMP%]   .try-button[_ngcontent-%COMP%]{padding-inline:10px}.event-log[_ngcontent-%COMP%]{list-style:none;margin:0 auto;max-width:780px;padding:0}.event-log[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{border-bottom:1px solid #dce2eb;display:flex;gap:16px;justify-content:space-between;padding:9px 0}.event-log[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{overflow-wrap:anywhere}@media(max-width:760px){.alert-docs[_ngcontent-%COMP%]{padding-inline:16px}.example-row[_ngcontent-%COMP%]{gap:12px;grid-template-columns:1fr}.example-detail[_ngcontent-%COMP%]{display:grid;gap:8px;grid-template-columns:minmax(0,1fr) auto}.example-detail[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .example-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{grid-column:1;margin:0}.example-detail[_ngcontent-%COMP%]   .try-button[_ngcontent-%COMP%]{align-self:center;grid-column:2;grid-row:1/3}.theme-row[_ngcontent-%COMP%]{grid-template-columns:130px minmax(0,1fr)}.theme-row[_ngcontent-%COMP%]   .code-block[_ngcontent-%COMP%]{grid-column:1/-1}.icon-row[_ngcontent-%COMP%]{grid-template-columns:48px 1fr auto}.icon-row[_ngcontent-%COMP%]   .code-block[_ngcontent-%COMP%]{grid-column:1/-1}}@media(max-width:480px){.docs-section[_ngcontent-%COMP%]{padding-block:34px}.docs-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:22px}.page-nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding-inline:5px}.example-detail[_ngcontent-%COMP%]{display:block}.example-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:12px}.theme-row[_ngcontent-%COMP%]{grid-template-columns:104px 1fr}.theme-preview[_ngcontent-%COMP%]{padding:10px}.event-log[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:grid;gap:0}}`]})};export{J as Alert};