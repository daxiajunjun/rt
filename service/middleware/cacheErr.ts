import Koa from 'koa';
import { IContext } from '../interfaces/IContext';


export default function cacheErr() {
  return async (ctx: IContext, next:() => Promise<any>) => {
    try {
      await next();
    } catch (err) {
      handleError(err, ctx);
    }
  }
}

/**
 * c错误处理
 * @param err
 * @param ctx
 */
function handleError(err: any, ctx: IContext) {
  ctx.log.err.error(err);
  ctx.body = '内部错误';
}