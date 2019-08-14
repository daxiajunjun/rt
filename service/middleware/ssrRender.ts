import React from 'react';
import { renderToString } from 'react-dom/server';
import Component from './ssr';
import path from 'path';
import fs from 'fs';
import Mustache from 'mustache';

export default function render() {
  const html = renderToString(React.createElement(Component()));
  let htmlStr = fs.readFileSync(path.resolve(__dirname, '../_view/index.html')).toString();
  htmlStr = htmlStr.replace(/{html}/, html);
  return Mustache.render(htmlStr, null);
}