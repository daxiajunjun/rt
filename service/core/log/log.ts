import log4js from 'koa-log4';
import Path from 'path';
import { ILogger } from '../../interfaces/ILog';

const LogConfigPath = Path.resolve(__dirname, './logger.json');

export default {
  /**
  * 初始化日志信息
  */
  initLog: (): ILogger => {
    log4js.configure(LogConfigPath);

    const log: ILogger = {
      err: log4js.getLogger('error'),
      app: log4js.getLogger('app'),
      http: log4js.getLogger('http'),
      console: log4js.getLogger('console')
    }
    return log;
  }
}