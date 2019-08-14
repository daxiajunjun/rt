import Path from 'path';
import IConfig from '../interfaces/IConfig';

const config: IConfig = {
  port: 5000,
  logDir: Path.resolve(__dirname, '../logs'),
  staticDir: Path.resolve(__dirname, '../_view/')
}

export default config;