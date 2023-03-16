import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Welcome page', module)
  .add('welcome', () => {
    return (
      <>
        <h1 style={{'marginTop': '30px'}}>欢迎来到 Lighting UI 组件库</h1>
        <p>Lighting UI 是一个轻量级的UI组件库，基于React Hooks、Typescirpt开发，适合toC项目的使用。</p>
        <ul>
          <li>支持按需引用</li>
          <li>详尽的文档和示例</li>
          <li>单元测试覆盖(React-Testing-Library)</li>
          <li>支持 TypeScript </li>
          <li>使用开源图标库<a href='https://feathericons.com/'> Feather-Icons</a>。文档地址：<a href='https://www.npmjs.com/package/@ailibs/feather-react-ts'> Github</a></li>
          <li>使用Sass组织样式。</li>
          <li>支持Travis CI/CD。</li>
        </ul>

        <h3>安装试试</h3>
        <code>
          npm install lighting-ui --save
        </code>
      </>
    )
  }, { info: { disable: true }, storyWrapper: false })