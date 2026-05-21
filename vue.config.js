
'use strict'
const path = require('path')
const defaultSettings = require('./src/settings.js')


const name = defaultSettings.title // 网址标题

function resolve(dir) {
    return path.join(__dirname, dir)
  }
module.exports = {
    publicPath: '/hrsy/',
    outputDir: 'dist',
    assetsDir: 'static',
    lintOnSave: process.env.NODE_ENV === 'development',
    productionSourceMap: false,
    devServer: {
        port: 8082,
        open: true,
        overlay: {
            warnings: false,
            errors: true
        },
        proxy: {
            '/api': {
                target: "127.0.0.1:8086",
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            },
            '/auth': {
                target: process.env.VUE_APP_BASE_API,
                changeOrigin: true,
                pathRewrite: {
                    '^/auth': 'auth'
                }
            }
        }
    },
    configureWebpack: {
        // provide the app's title in webpack's name field, so that
        // it can be accessed in index.html to inject the correct title.
        name: name,
        resolve: {
            alias: {
            '@': resolve('src'),
            '@crud': resolve('src/components/Crud')
            }
        }
    }    
}