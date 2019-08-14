import Config from './config/index';
import Core from './core/core';
import App from './interfaces/App';

const app = new App();

const core = new Core(app)

core.loadApp().listen(Config.port, () => {
  app.log.app.info('service start');
  app.log.console.info(`service start in port: ${Config.port}`);
});
