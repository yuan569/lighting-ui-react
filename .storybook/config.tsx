import { configure, addDecorator, addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info'
import React from 'react'
import "../src/styles/index.scss"
const wrapperStyle: React.CSSProperties = {
  padding: '0 40px 30px'
}

const storyWrapper = (stroyFn: any) => (
  <div style={wrapperStyle}>
    {stroyFn()}
  </div>
)
console.log(withInfo,'withInfo')
addDecorator(storyWrapper)
addDecorator(withInfo)
addParameters({info: { inline: true, header: true}})
const loaderFn = () => {
  const allExports = [require('../src/welcome.stories.tsx')];
  const req = require.context('../src/components', true, /\.stories\.tsx$/);
  req.keys().forEach(fname => allExports.push(req(fname)));
  return allExports;
};

// automatically import all files ending in *.stories.js 
configure(loaderFn, module);
