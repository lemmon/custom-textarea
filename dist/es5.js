!function(e){"function"==typeof define&&define.amd?define(e):e()}((function(){"use strict";class e extends HTMLElement{constructor(){super();const e=this.attachShadow({mode:"open"});this._preview=document.createElement("div"),this._preview.style.color="transparent",this._input=document.createElement("textarea"),this._input.oninput=()=>{this.updatePreview()},this._input.onchange=()=>{this.textContent=this._input.value,this.dispatchEvent(new Event("change",{bubbles:!0,cancelable:!0}))};const t=document.createElement("style");t.textContent=":host{display:block;position:relative;white-space:pre-wrap;overflow-wrap:break-word;word-break:normal;cursor:text}textarea{-webkit-appearance:none;-moz-appearance:none;appearance:none;box-sizing:border-box;display:block;position:absolute;left:0;right:0;top:0;bottom:0;width:100%;height:100%;resize:none;overflow:hidden;padding:inherit;margin:0;border:0;font:inherit;text-align:inherit;color:inherit;background-color:initial;box-shadow:none;outline:0;cursor:inherit}textarea::placeholder{color:var(--placeholder-color,inherit);opacity:var(--placeholder-opacity,.5)}",e.appendChild(t),e.appendChild(this._preview),e.appendChild(this._input)}connectedCallback(){this._input.value=this.textContent,this.updatePreview()}static get observedAttributes(){return["placeholder","disabled","readonly"]}attributeChangedCallback(){this._input.disabled=this.hasAttribute("disabled"),this._input.readOnly=this.hasAttribute("readonly"),this._input.placeholder=this.getAttribute("placeholder")}get name(){return this.getAttribute("name")}set name(e){this.setAttribute("name",e)}get value(){return this._input.value}set value(e){this._input.value=e,this.textContent=e,this.updatePreview()}get placeholder(){return this.getAttribute("placeholder")}set placeholder(e){this.setAttribute("placeholder",e)}get disabled(){return this.hasAttribute("disabled")}set disabled(e){e?this.setAttribute("disabled",""):this.removeAttribute("disabled")}get readonly(){return this.hasAttribute("readonly")}set readonly(e){e?this.setAttribute("readonly",""):this.removeAttribute("readonly")}updatePreview(){this._preview.innerText=this._input.value+" "}}customElements.define("custom-textarea",e)}));
