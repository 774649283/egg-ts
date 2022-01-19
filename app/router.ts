import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);
  /**
   * 微信api
   */
  router.get('/wx/token', controller.wx.token);
  router.get('/wx/getToken', controller.wx.getToken);
};
