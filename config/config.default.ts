import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1636623541140_2776';

  // add your egg config in here
  config.middleware = [
    'req',
  ];

  config.wx = {
    token: 'liubao',
    EncodingAESKey: 'cluv3G53IYCpRZcO646oYNUa1G57MBNVUiSKBX3JKlu', // 推送消息加密密钥
    BaseUrl: 'https://api.weixin.qq.com/cgi-bin/', // 微信小程序接口url前缀
    AppID: 'wxcf31728a7ef85bd8', // 小程序应用id
    AppSecret: '47e51409a77ce0ff5545beae6fb98a26', // 小程序密钥
  };


  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // the return config will combines to EggAppConfig
  return {
    ...config as {},
    ...bizConfig,
  };
};
