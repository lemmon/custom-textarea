import css from './index.css'

export default class TextArea extends HTMLElement {
  constructor() {
    super()
    const root = this.attachShadow({ mode: 'open' })
    this._preview = document.createElement('div')
    this._preview.style.color = 'transparent'
    this._input = document.createElement('textarea')
    this._input.oninput = () => {
      this.updatePreview()
    }
    this._input.onchange = () => {
      this.textContent = this._input.value
      this.dispatchEvent(
        new Event('change', {
          bubbles: true,
          cancelable: true,
        })
      )
    }
    const style = document.createElement('style')
    style.textContent = css
    root.appendChild(style)
    root.appendChild(this._preview)
    root.appendChild(this._input)
  }

  connectedCallback() {
    this._input.value = this.textContent
    this.updatePreview()
  }

  static get observedAttributes() {
    return ['placeholder', 'disabled', 'readonly']
  }

  attributeChangedCallback() {
    this._input.disabled = this.hasAttribute('disabled')
    this._input.readOnly = this.hasAttribute('readonly')
    this._input.placeholder = this.getAttribute('placeholder')
  }

  get name() {
    return this.getAttribute('name')
  }

  set name(name) {
    this.setAttribute('name', name)
  }

  get value() {
    return this._input.value
  }

  set value(value) {
    this._input.value = value
    this.textContent = value
    this.updatePreview()
  }

  get placeholder() {
    return this.getAttribute('placeholder')
  }

  set placeholder(value) {
    this.setAttribute('placeholder', value)
  }

  get disabled() {
    return this.hasAttribute('disabled')
  }

  set disabled(is) {
    if (is) this.setAttribute('disabled', '')
    else this.removeAttribute('disabled')
  }

  get readonly() {
    return this.hasAttribute('readonly')
  }

  set readonly(is) {
    if (is) this.setAttribute('readonly', '')
    else this.removeAttribute('readonly')
  }

  updatePreview() {
    this._preview.innerText = this._input.value + ' '
  }
}
