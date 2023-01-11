import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Input } from './input'
// const ControlledInput = () => {
//   const [value, setValue] = useState()
//   return <Input value={value} style={{width: '260px'}} defaultValue={value} onChange={(e) => {setValue(e.target.value)}}/>
// }
const defaultInput = () => (
  <Input
    style={{width: '260px'}}
    placeholder="placeholder"
    onChange={action('changed')}
  />
)
const disabledInput = () => (
  <Input
    style={{width: '260px'}}
    placeholder="disabled input"
    disabled 
  />
)

const iconInput = () => (
  <Input
    style={{width: '260px'}}
    placeholder="input with icon"
    icon={{name: 'user', size: '18', strokeWidth: '1.2'}}
  />  
)

const sizeInput = () => (
  <div>
    <Input
      style={{width: '260px'}}
      placeholder="large size"
      size="lg"
    />
    <Input
      style={{width: '260px'}}
      placeholder="default size"
    />
    <Input
      style={{width: '260px'}}
      placeholder="small size"
      size="sm"
    />
  </div>
)

const pandInput = () => (
  <div>
    <Input
      style={{width: '260px'}}
      defaultValue="prepend text"
      prepend="https://"
    />
    <Input
      style={{width: '260px'}}
      defaultValue="google"
      append=".com"
    />
    
  </div>
)


storiesOf('Input', module)
  .add('默认的 Input', defaultInput)
  .add('被禁用的 Input', disabledInput)
  .add('带图标的 Input', iconInput)
  .add('大小不同的 Input', sizeInput)
  .add('带前后缀的 Input', pandInput)
