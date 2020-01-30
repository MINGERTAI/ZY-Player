module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        mac: {
          icon: './build/icons/icon.icns'
        },
        win: {
          icon: './build/icons/icon.ico'
        },
        productName: 'ZY Player',
        publish: [{
          'provider': 'github',
          'owner': 'Hunlongyu',
          'repo': 'ZY-Player'
        }]
      },
      chainWebpackRendererProcess: config => {
        if (process.env.NODE_ENV === 'development') {
          config.plugins.delete('prefetch')
        }
      }
    }
  }
}