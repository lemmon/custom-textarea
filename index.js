const css = ''
  + ':host{'
    + 'display:block;'
    + 'position:relative;'
    + 'white-space:pre-wrap;'
    + 'overflow-wrap:break-word;'
    + 'word-break:normal;'
  + '}'
  + 'textarea{'
    + 'webkit-appearance:none;-moz-appearance:none;appearance:none;'
    + 'box-sizing:border-box;'
    + 'display:block;'
    + 'position:absolute;'
    + 'left:0;'
    + 'top:0;'
    + 'width:100%;'
    + 'height:100%;'
    + 'resize:none;'
    + 'overflow:hidden;'
    + 'margin:0;'
    + 'border:0;'
    + 'padding:inherit;'
    + 'font-family:inherit;'
    + 'font-size:inherit;'
    + 'font-weight:inherit;'
    + 'line-height:inherit;'
    + 'text-align:inherit;'
    + 'color:var(--color,inherit);'
    + 'background-color:transparent;'
    + 'box-shadow:none;'
    + 'outline:0;'
  + '}'
  + 'textarea::placeholder{'
    + 'color:var(--placeholder-color,inherit);'
    + 'opacity:var(--placeholder-opacity,.5);'
  + '}'

module.exports = class TextArea extends HTMLElement {

  constructor() {
    super()
    const shadow = this.attachShadow({ mode: 'open' })
    this._preview = document.createElement('div')
    this._preview.style.color = 'transparent'
    this._input = document.createElement('textarea')
    this._input.oninput = e => {
      this.textContent = e.target.value
      this.updatePreview()
    }
    const style = document.createElement('style')
    style.textContent = css
    shadow.appendChild(style)
    shadow.appendChild(this._preview)
    shadow.appendChild(this._input)
  }

  connectedCallback() {
    this._input.value = this.textContent
    this._input.disabled = this.hasAttribute('disabled')
    this._input.readOnly = this.hasAttribute('readonly')
    this._input.placeholder = this.getAttribute('placeholder') || ''
    this.updatePreview()
  }

  get name() {
    return this.getAttribute('name')
  }

  get value() {
    return this._input.value
  }

  set value(value) {
    this._input.value = value
    this.textContent = value
  }

  updatePreview() {
    this._preview.innerHTML = this._input.value
      .replace(/&/gm, '&amp;')
      .replace(/"/gm, '&quot;')
      .replace(/'/gm, '&#39;')
      .replace(/</gm, '&lt;')
      .replace(/>/gm, '&gt;')
      + ' '
  }
}
