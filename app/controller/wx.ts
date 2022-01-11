import { Controller } from 'egg';

export default class WxController extends Controller {
  public async token() {
    this.ctx.body = 'liubao';
  }
}
