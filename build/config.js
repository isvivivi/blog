module.exports = {
  admin: {
    dev: {
      env: "development",
      publicPath: "/",
      host: "localhost",
      port: "8090",
      assetsSubDirectory: "static",
      devtoolType: "eval-cheap-module-source-map",
      proxyTable: {
        "/admin_api": {
          target: "http://0.0.0.0:3000/admin_api/",
          changeOrigin: true,
          pathRewrite: {
            "^/admin_api": "/",
          },
          secure: false,
        },
      },
    },
    build: {
      env: "production",
      publicPath: "./", // html引用资源路径
      assetsPath: "static", // 静态资源目录
      assetsSubDirectory: "static", // html资源存放目录
      devtoolType: "source-map", // 代码位置信息
    },
  },

  client: {
    dev: {
      env: "development",
      publicPath: "/",
      host: "localhost",
      port: "8080",
      assetsSubDirectory: "static",
      devtoolType: "eval-cheap-module-source-map",
      proxyTable: {
        "/client_api": {
          target: "http://0.0.0.0:3000/client_api/",
          changeOrigin: true,
          pathRewrite: {
            "^/client_api": "/",
          },
          secure: false,
        },
      },
    },
    build: {
      env: "production",
      publicPath: "./",
      assetsPath: "static",
      assetsSubDirectory: "static",
      devtoolType: "source-map",
    },
  },
};
