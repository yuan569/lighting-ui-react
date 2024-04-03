import React, { FC, useState, KeyboardEvent, ReactElement, useRef } from 'react'
import classNames from 'classnames'
import Input, { InputProps } from '../Input/input'
import Icon from '../Icon/icon'
import Transition from '../Transition/transition'
import useClickOutside from '../../hooks/useClickOutside'

interface DataSourceObject {
  value: string;
}
export type DataSourceType<T = {}> = T & DataSourceObject
export interface SelectProps extends Omit<InputProps, 'onSelect'> {
  /** 默认下拉选项列表 */ 
  passedSuggestions: DataSourceType[];
  /** 选择下拉选项时回调 */ 
  onSelect?: (item: DataSourceType) => void;
  /** 自定义下拉选项模版 */
  renderOption?: (item: DataSourceType) => ReactElement;
  /** 是否禁用 */ 
  disabled?: boolean;
}

/**
 * ### 引用方法
 * ---
 * ~~~js
 * import { Select } from 'lighting-ui-react'
 * ~~~
 * 
 */

export const Select: FC<SelectProps> = (props) => {
  const {
    passedSuggestions,
    onSelect,
    value,
    renderOption,
    disabled,
    ...restProps
  } = props

  // input值
  const [inputValue, setInputValue] = useState(value as string)
  // 下拉选项值
  const [suggestions, setSugestions] = useState<DataSourceType[]>([])
  // 是否展示下拉选项
  const [showDropdown, setShowDropdown] = useState(false)
  // 高亮值
  const [highlightIndex, setHighlightIndex] = useState(-1)
  // 触发状态
  const triggerSelect = useRef(false)
  // 引用最外层元素
  const componentRef = useRef<HTMLDivElement>(null)
  

  // 响应-触发选择器
  const triggerSelectHandler = () => {
    if (triggerSelect.current) {
      setSugestions([])
      setSugestions(passedSuggestions)
      // setShowDropdown(true)
      if (passedSuggestions.length > 0) {
        setShowDropdown(true)
      }
    } else {
      setShowDropdown(false)
    }
    setHighlightIndex(-1)
  }
  // 点击空白区域
  useClickOutside(componentRef, ()=> {
    triggerSelect.current = false
    triggerSelectHandler()
  })
  // 设置高亮
  const highlight = (index: number) => {
    if (index < 0) index = 0
    if (index >= suggestions.length) {
      index = suggestions.length - 1
    }
    setHighlightIndex(index)
  }
  // 键盘事件回调
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    switch (e.keyCode) {
      case 13:
        if (suggestions[highlightIndex]) {
          handleSelect(e, suggestions[highlightIndex])
        }
        break
      case 38:
        highlight(highlightIndex - 1)
        break
      case 40:
        highlight(highlightIndex + 1)
        break
      case 27:
        setShowDropdown(false)
        break
      default:
        break
    }
  }
  // input change事件回调
  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const value = e.target.value.trim()
  //   console.log(value,'target value')
  //   setInputValue(value)
  //   triggerSelect.current = true
    

  // }
  // 触发选择器
  const handleClick = (e) => {
    if (!triggerSelect.current) {
      triggerSelect.current = true
    } else {
      triggerSelect.current = false
    }
    triggerSelectHandler()
  }


  // 点击下拉选项回调
  const handleSelect = (e, item: DataSourceType) => {
    // 阻止冒泡到父层容器
    e.stopPropagation()
    setInputValue(item.value)
    setShowDropdown(false)
    if (onSelect) {
      onSelect(item)
    }
    triggerSelect.current = false
  }

  const classes = classNames("lighting-select", {
      'is-opened': triggerSelect.current,
  })

  // 渲染自定义模版
  const renderTemplate = (item: DataSourceType) => {
    return renderOption ? renderOption(item) : item.value
  }
  // 生成下拉选择项
  const generateDropdown = () => {
    return (
      <Transition
        in={showDropdown}
        animation="zoom-in-top"
        timeout={300}
        onExited={() => { setSugestions([]) }}
      >
        <ul className="lighting-select-list" style={{ 'width': '200px' }}>
          
          {suggestions.map((item, index) => {
            const cnames = classNames('select-item', {
              'is-active': index === highlightIndex
            })
            return (
              <li key={index} className={cnames} onClick={(e) => handleSelect(e, item)}>
                {renderTemplate(item)}
              </li>
            )
          })}
        </ul>
      </Transition>
    )
  }
  return (
    <div className={classes} ref={componentRef} onClick={(e)=> handleClick(e)}>
      <Input
        style={{ 'width': '200px' }}
        value={inputValue}
        
        // onChange={handleChange}
        onKeyDown={handleKeyDown}
        readOnly={disabled ? false : true}
        disabled={disabled}
        {...restProps}
      />
      <Icon name="chevron-down" size="20" strokeWidth="1.2" className="lighting-select-suffix" />
      {suggestions && suggestions.length > 0 ? generateDropdown() : null}
    </div>
  )
}

export default Select;

