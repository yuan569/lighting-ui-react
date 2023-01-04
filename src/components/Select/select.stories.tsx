import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Select } from './select'

const SimpleSelect = () => {

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

  return (
    <Select
      passedSuggestions={lakersWithNumber}
      onSelect={action('selected')}
      value="请选择"
    //renderOption={renderOption}
    />
  )
}

storiesOf('Select', module)
  .add('选择器', SimpleSelect)