import { Service, Singleton } from 'egg';
import { Redis } from 'ioredis';

export default class BaseService extends Service {
  /**
   * 获取Helper
   */
  getHelper() {
    return this.ctx.helper;
  }

  // redis 0库
  getWechatRedis() {
    return ((this.app.redis as Singleton<Redis>).get('wechat'));
  }

  // redis 1库
  getAppRedis() {
    return ((this.app.redis as Singleton<Redis>).get('app'));
  }

}
