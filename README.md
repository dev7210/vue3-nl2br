# vue3-nl2br

A vue component which turns new lines into line breaks.

## Why not just use CSS?

See [Why not just use CSS `white-space: pre;`? · Issue #7](https://github.com/dev7210/vue3-nl2br/issues/7)

## Requirement

- [Vue.js] `^3.0.0-0`

## Installation

```shell
npm install --save vue3-nl2br
```

## Usage

```html
<nl2br tag="p" :text="`line1\nline2`" class="foo bar" />
```

is rendered to

```html
<p class="foo bar">line1<br>line2</p>
```

### (1) Global registration


```js
import Vue from 'vue'
import Nl2br from 'vue3-nl2br'

Vue.component('nl2br', Nl2br)
```

### (2) Local registration

https://vuejs.org/v2/guide/components.html#Local-Registration

```vue
// MyComponent.vue

<template>
  <nl2br tag="p" :text="`line1\nline2`" />
</template>

<script>
import Nl2br from 'vue3-nl2br'

export default {
  name: 'MyComponent',
  components: {
    Nl2br,
  },
  // ...
}
</script>
```

## Props

- `tag`: HTML tag name which is passed to [h function](https://vuejs.org/v2/guide/render-function.html#createElement-Arguments)
  - Type: `String`
  - Required: true
- `text`: Text in the tag.
  - Type: `String`
  - Required: true
- `class`: HTML class name(s) 
  - Type: `String`
  - Required: false

## License

[MIT](https://opensource.org/licenses/MIT)
