# \<custom-textarea\>

Web Components custom-textarea element.

Reason behind this component is to create a plain unstyled autogrowing textarea.

[Demo](https://www.lemmonjuice.com/custom-textarea/)

## Install

```sh
npm i @lemmon/custom-textarea
```

or reference directly:

```html
<script src="https://unpkg.com/@lemmon/custom-textarea">
```

### Usage

```js
// does register the component for you
// with `custom-textarea` tagname
import '@lemmon/custom-textarea'
```

or

```js
// does not register the component,
// useful when you want to extend the component
// or to chose a different tag name
import Textarea from '@lemmon/custom-textarea/textarea'
class TextareaUpgraded extends Textarea {}
customElements.define('upgraded-textarea', TextareaUpgraded)
```

### Use With The CDN

```html
<script type="module" src="https://unpkg.com/@lemmon/custom-textarea"></script>

<!-- or for the ES5 version -->

<script src="https://unpkg.com/@lemmon/custom-textarea/dist/es5.js"></script>
```

## Example

```html
<custom-textarea name="text">Hello World!</custom-textarea>
```

You can apply your own styles. Fonts, colors, line-height, and padding are inherited. Placeholder styles can be defined using CSS variables.

```css
custom-textarea {
  --placeholder-color: orange; /* default: inherit */
  --placeholder-opacity: 1; /* default: 0.5 */
}
```

## License

MIT
