import Log from './log/log';
import log4js from 'koa-log4';
import App from '../interfaces/App';
import bodyParser from 'koa-bodyparser';
import koaStatic from 'koa-static';
import config from '../config';
import cacheErr from '../middleware/cacheErr';

import router from '../router/index';

export default class Core{

  app: App;

  constructor(app: App) {
    this.app = app;
  }
  /*
  * 加载日志信息，中间件信息等
  */
  loadApp() {
    this.loadLog()
      .loadMiddleware()
      .loadRoute()

    return this.app;
  }

  /**
   * 加载日志
   */
  loadLog(){
    const log = Log.initLog();
    this.app.log = log;
    this.app.use(async (ctx, next) => {
      ctx.log = log;
      await next()
    })
    this.app.use(log4js.koaLogger(this.app.log.http, {level: log4js.levels.INFO}));
    return this;
  }

  /**
   * 加载中间件
   */
  loadMiddleware(){
    this.app.use(cacheErr())
      .use(bodyParser())
      .use(koaStatic(config.staticDir));

      return this;
  }

  /**
   * 加载路由
   */
  loadRoute() {
    this.app.use(router.routes())
      .use(router.allowedMethods());

      return this;
  }
}