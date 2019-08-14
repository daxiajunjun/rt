import * as React from 'react';
import StyleContext from 'isomorphic-style-loader/StyleContext';

export default (App: any) => {
  const css = new Set(); // CSS for all rendered React components
  const insertCss = (...styles: any) => {
    styles.forEach((style: any) => {
      css.add(style._getCss());
    });
  };

  <StyleContext.Provider value={{ insertCss }}>
    <App />
  </StyleContext.Provider>

  return function () {
    return <div>hello world</div>;
  }
}