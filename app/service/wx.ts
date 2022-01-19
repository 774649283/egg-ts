import BaseService from './base';

export default class Wx extends BaseService {
  /**
     * 推送消息
     * @param touser 用户的 OpenID
     * @param msgtype 消息类型
     * @param text 文本消息，msgtype="text" 时必填
     * @param image 图片消息，msgtype="image" 时必填
     * @param link 图文链接，msgtype="link" 时必填
     * @param miniprogrampage 小程序卡片，msgtype="miniprogrampage" 时必填
   */
  public async sendMessage(touser:string, msgtype = 'text', text:object, image:object, link:object, miniprogrampage:object) {
    const { ctx, config } = this;
    const accessToken = await this.getWechatRedis().get('wechat:token');
    return await ctx.curl(
      config.wx.BaseUrl + `message/custom/send?access_token=${accessToken}`, {
        method: 'POST',
        contentType: 'json',
        data: {
          touser, msgtype,
          text,
          image,
          link,
          miniprogrampage,
        },
        dataType: 'json',
      });
  }
}
