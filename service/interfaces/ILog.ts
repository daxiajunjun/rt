import { Logger } from "log4js";

export interface ILogger{
  err: Logger;
  app: Logger
  http: Logger,
  console: Logger
};