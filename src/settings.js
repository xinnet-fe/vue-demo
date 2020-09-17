/*
 * @Author: your name
 * @Date: 2020-09-16 10:25:11
 * @LastEditTime: 2020-09-17 11:07:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \202003-xinnet-webd:\works\demo-vue\src\settings.js
 */
const webpackConfig = require('./webpackConfig.js')

module.exports = {
  title: '代理专区',

  /**
   * @type {boolean} true | false
   * @description Whether show the settings right-panel
   */
  showSettings: false,

  /**
   * @type {boolean} true | false
   * @description Whether need tagsView
   */
  tagsView: false,

  /**
   * @type {boolean} true | false
   * @description Whether fix the header
   */
  fixedHeader: false,

  /**
   * @type {boolean} true | false
   * @description Whether show the logo in sidebar
   */
  sidebarLogo: true,

  /**
   * @type {string | array} 'production' | ['production', 'development']
   * @description Need show err logs component.
   * The default is only used in the production env
   * If you want to also use it in dev, you can pass ['production', 'development']
   */
  errorLog: 'production',

  // 消息框停留时间
  duration: 2000,

  // 是否显示layout
  showLayout: true,

  // 开发环境
  hasDevelopment: process.env.NODE_ENV === 'development',

  // 研发环境token，要每天登录测试环境从浏览器cookie中获取
  xbtoken: 'Hxzd5RCZwJM9bjM3EWL',

  xbTokenKey: process.env.NODE_ENV === 'development' ? 'xbtoken' : 'xbtoken_id',

  logoutApi: process.env.VUE_APP_ENV === 'production' ? 'https://login.xinnet.com/?service=https://console.xinnet.com/agent/index.html' : 'https://login.xinnet.com/?service=https://console.xinnet.com/agent/index.html',

  // webpack配置，覆盖掉vue.config.js中初始值
  webpackConfig
}
