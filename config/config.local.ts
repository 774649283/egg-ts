import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config: PowerPartial<EggAppConfig> = {
    sequelize: {
      dialect: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      database: 'egg-ts-local',
      username: 'root',
      password: 'root',
    },

    // redis配置
    redis: {
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
    },
  };
  return config;
};
