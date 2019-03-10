const Mergeable = require('deconstruct-merge')

module.exports = function (plugin, mergeOptions, defaultOptions) {
  if (typeof plugin !== 'function') {
    plugin = () => plugin
  }

  const config = new Mergeable(mergeOptions).merge(defaultOptions)
  
  return (options, context) => {
    config.merge(options)
    return plugin(config.value(), context)
  }
}
