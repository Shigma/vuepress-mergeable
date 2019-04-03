const Mergeable = require('deconstruct-merge')

module.exports = function (plugin, mergeOptions, defaultOptions) {
  if (typeof plugin !== 'function') {
    const rawPlugin = plugin
    plugin = () => rawPlugin
  }

  const config = new Mergeable(mergeOptions).merge(defaultOptions)

  return (options, context) => {
    config.merge(options)
    return plugin(config.value(), context)
  }
}
