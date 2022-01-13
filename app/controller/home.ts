import BaseController from './base';

export default class HomeController extends BaseController {
  public async index() {
    const { ctx } = this;
    console.log(this.getHelper().getReqIP());
    this.success({ data: await ctx.service.test.sayHi('egg') });
  }
}
