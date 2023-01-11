import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Icon from '../Icon/icon'

const defaultIcon = () => (
    <div>
        <Icon name="aperture" theme='primary' size="32" />
        <Icon name="codesandbox" theme='success' size="32" />
        <Icon name="cpu" theme='info' size="32" />
        <Icon name="crosshair" theme='warning' size="32" />
        <Icon name="github" theme='danger' size="32" />
    </div>
)



storiesOf('Icon', module)
    .add('图标', defaultIcon)
    