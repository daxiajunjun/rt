import Koa from 'koa';
import { ILogger } from './ILog';
import { IContext } from './IContext';


class App extends Koa{

}

interface App {
  log: ILogger;
  context: IContext;
}

export = App;
