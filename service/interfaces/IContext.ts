import Koa from 'koa';
import { ILogger } from './ILog';

export interface IContext extends Koa.Context {
  log: ILogger
}