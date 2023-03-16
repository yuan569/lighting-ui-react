import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Button from './button'



const buttonWithSize = () => (
    <div>
        <Button size='lg'>large button</Button>
        <Button>default button</Button>
        <Button size='sm'>small button</Button>
    </div>
)

const buttonWithType = () => (
    <div>
        <Button btnType='default' onClick={action('clicked')}>default button</Button>
        <Button btnType='primary' onClick={action('clicked')}>primary button</Button>
        <Button btnType='success' onClick={action('clicked')}>success button</Button>
        <Button btnType='info' onClick={action('clicked')}>info button</Button>
        <Button btnType='warning' onClick={action('clicked')}>warning button</Button>
        <Button btnType='danger' onClick={action('clicked')}>danger button</Button>
        <Button btnType='link' href='https://www.baidu.com'>link button</Button>
    </div>
)

const buttonWithPlain = () => (
    <div>
        <Button btnType='default' plain onClick={action('clicked')}>default button</Button>
        <Button btnType='primary' plain onClick={action('clicked')}>primary button</Button>
        <Button btnType='success' plain onClick={action('clicked')}>success button</Button>
        <Button btnType='info'  plain onClick={action('clicked')}>info button</Button>
        <Button btnType='warning' plain onClick={action('clicked')}>warning button</Button>
        <Button btnType='danger' plain onClick={action('clicked')}>danger button</Button>
    </div>
)

storiesOf('Button', module)
    .add('不同类型的 Button', buttonWithType)
    .add('描边的 Button', buttonWithPlain)
    .add('不同尺寸的 Button', buttonWithSize)
