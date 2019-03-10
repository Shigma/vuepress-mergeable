# vuepress-mergeable

Customize how a VuePress plugin merges its options by [deconstruct-merge](https://github.com/Shigma/deconstruct-merge).

## Why do I need this?

In VuePress, a plugin can be used multiple times but only one `options` will be kept. If your plugins are used in different places, their `options` will overwrite each other, causing undetectable side effects. This tool can help you create a plugin that automatically merges `options` to your liking.

## mergeable(plugin, mergeOptions?, defaultOptions?)

- **plugin:** the plugin you want to customize
- **mergeOptions:** options for [deconstruct-merge](https://github.com/Shigma/deconstruct-merge)
- **defaultOptions:** default options for the plugin

```js
// vuepress-plugin-my-plugin/index.js
const mergeable = require('vuepress-mergeable')

module.exports = mergeable((options) => ({
  ready() {
    console.log(options)
  }
}), {
  // mergeOptions
  foo: 'assign',
  bar: 'flat'
}, {
  // defaultOptions
  foo: { a: 1 },
})
```

```js
// .vuepress/config.js
module.exports = {
  plugins: [
    // apply the plugin multiple times
    ['my-plugin', {
      foo: { b: 2, c: 4 },
      baz: 'Hello',
    }],
    ['my-plugin', {
      foo: { b: 3 },
      bar: 'Hello',
      baz: 'World',
    }],
  ],
}
```

And this will be the merged options:

```
{ foo: { a: 1, b: 3, c: 4 },
  bar: ['Hello'],
  baz: 'World' }
```
