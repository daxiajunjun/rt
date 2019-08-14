export default interface IConfig{
  /**
   * 启动端口
   */
  port: number;

  /**
   * Log文件输出地址
   */
  logDir: string;

  /**
   * 静态文件地址
   */
  staticDir: string;
}