import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config = {} as PowerPartial<EggAppConfig>;
  config.sequelize = {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    database: 'egg-wechat-prod',
    username: '',
    password: '',
  };

  // redis配置
  config.redis = {
    clients: {
      wechat: {
        port: 6379,
        host: '127.0.0.1',
        password: '',
        db: 0,
      },
      app: {
        port: 6379,
        host: '127.0.0.1',
        password: '',
        db: 1,
      },
    },
  };

  return config;
};
