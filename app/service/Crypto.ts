import { Service } from 'egg';
import * as crypto from 'crypto';

export default class Crypto extends Service {
  // 解密encryptedData
  public async decryptData(sessionKey: any, encryptedData: any, iv: any) {
    sessionKey = Buffer.from(sessionKey, 'base64');
    iv = Buffer.from(iv, 'base64');
    encryptedData = Buffer.from(encryptedData, 'base64');
    const decipher = crypto.createDecipheriv('aes-128-cbc', sessionKey, iv);
    // 设置自动 padding 为 true，删除填充补位
    decipher.setAutoPadding(true);
    let decoded = decipher.update(encryptedData, 'binary', 'utf8');
    decoded += decipher.final('utf8');
    decoded = JSON.parse(decoded);
    return decoded;
  }

  /**
   * 微信推送校验加密
   * @param signature 微信加密签名
   * @param timestamp 时间戳
   * @param nonce 随机数
   * @param echostr 随机字符串
   */
  public async checkSignature(signature:any, timestamp:any, nonce:any, echostr:any) {
    const TOKEN = this.config.wx.token;
    const tmpStr = [ TOKEN, timestamp, nonce ].sort().reduce((prev, cur) => prev + cur); // 排序后拼接
    const sha1 = crypto.createHash('sha1');
    const sha1_result = sha1.update(tmpStr).digest('hex');
    if (sha1_result === signature) {
      return echostr;
    }
    return false;
  }
}
