declare module 'isomorphic-style-loader/StyleContext' {
  export interface Styles {
    [key: string]: string;
  }

  const StyleContext: React.Context<any>;

  export default StyleContext;
}