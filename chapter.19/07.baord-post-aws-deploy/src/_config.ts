interface IAppConfig {
  title: string;
  apiUrl: string;
}

type BUILD_MODE = 'production' | 'development' | 'test';
type AppConfigTypes = { [type in BUILD_MODE]: IAppConfig };

const config: AppConfigTypes = {
  development: {
    title: 'Board - dev',
    apiUrl: 'http://localhost:3000/graphql',
  },
  test: {
    title: 'Board',
    apiUrl: 'http://localhost:3000/graphql',
  },
  production: {
    title: 'Board',
    apiUrl: 'https://xxxxxx.ap-northeast-2.amazonaws.com/product/graphql',
  },
};

function getConfig(): IAppConfig {
  return config[process.env.NODE_ENV as BUILD_MODE];
}

export default getConfig;
