import BaseController from './base';

export default class WxController extends BaseController {
  public async token() {
    const { ctx } = this;
    const { signature, timestamp, nonce, echostr } = this.getQuery();
    this.ctx.body = await ctx.service.crypto.checkSignature(signature, timestamp, nonce, echostr);
  }

  // 获取小程序access_token
  public async getToken() {
    const { ctx, config } = this;
    const result = await ctx.curl(
      config.wx.BaseUrl + `token?grant_type=client_credential&appid=${config.wx.AppID}&secret=${config.wx.AppSecret}`, {
        dataType: 'json',
        timeout: 10000,
      });
    const { data } = result;
    await this.getWechatRedis().set('wechat:token', data.access_token, 'EX', data.expires_in);
    this.success(result);
  }
}
