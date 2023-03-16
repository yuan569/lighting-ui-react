import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Select } from './select'
// import Button from '../Button'


const lakersWithNumber = [
  { value: 'bradley', label: 11 },
  { value: 'pope', label: 1 },
  { value: 'caruso', label: 4 },
  { value: 'cook', label: 2 },
  { value: 'cousins', label: 15 },
  { value: 'james', label: 23 },
  { value: 'AD', label: 3 },
  { value: 'green', label: 14 },
  { value: 'howard', label: 39 },
  { value: 'kuzma', label: 0 },
]

const SimpleSelect = () => {
  return (
    <Select
      passedSuggestions={lakersWithNumber}
      onSelect={action('selected')}
      value="请选择"
    //renderOption={renderOption}
    />
  )
}

const SelectWithDifferentSize = () => {
  return (
    <div style={{ display: 'flex', width: '630px', justifyContent: 'space-between' }}>
      <div>
        <Select
          passedSuggestions={lakersWithNumber}
          onSelect={action('selected')}
          value="请选择"
          size='sm'
        />
      </div>
      <div>
        <Select
          passedSuggestions={lakersWithNumber}
          onSelect={action('selected')}
          value="请选择"
        />
      </div>
      <div>
        <Select
          passedSuggestions={lakersWithNumber}
          onSelect={action('selected')}
          value="请选择"
          size='lg'
        />
      </div>
    </div>
  )
}

storiesOf('Select', module)
  .add('选择器', SimpleSelect)
  .add('不同尺寸的选择器', SelectWithDifferentSize)