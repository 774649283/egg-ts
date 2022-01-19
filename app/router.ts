import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);
  /**
   * 微信api
   */
  router.get('/wx/token', controller.wx.token); // 校验消息推送配置token-只有在微信后台配置时才会使用到
  router.get('/wx/getToken', controller.wx.getToken); // 获取access_token
  router.get('/wx/sendMessage', controller.wx.sendMessage); // 推送消息
};
