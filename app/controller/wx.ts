import BaseController from './base';

export default class WxController extends BaseController {
  public async token() {
    const { ctx } = this;
    const { signature, timestamp, nonce, echostr } = this.getQuery();
    this.ctx.body = await ctx.service.crypto.checkSignature(signature, timestamp, nonce, echostr);
  }
}
