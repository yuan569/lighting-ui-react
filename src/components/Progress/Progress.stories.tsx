import React from 'react'
import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
import Progress from '../Progress'

const defaultProgress = () => (
    <div>
        <Progress percent={35} />
        
    </div>
)

const progressWithDifferentHeight = () => (
    <div>
        <Progress percent={35} strokeHeight={15} />
        <Progress percent={35} strokeHeight={20} />
    </div>
)

const progressWithDifferentTheme = () => (
    <div>
        <Progress percent={35} theme='success' />
        <Progress percent={45} theme='info' />
        <Progress percent={55} theme='warning' />
        <Progress percent={65} theme='danger' />
    </div>
)



storiesOf('Progress', module)
    .add('默认的进度条', defaultProgress)
    .add('不同高度的进度条', progressWithDifferentHeight)
    .add('不同主题的进度条', progressWithDifferentTheme)
    