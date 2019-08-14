declare module '*.scss';

declare module 'isomorphic-style-loader/StyleContext' {
  export interface Styles {
    [key: string]: string;
  }

  const StyleContext;

  export default StyleContext;
}