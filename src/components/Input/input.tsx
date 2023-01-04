import React, { FC, ReactElement, InputHTMLAttributes, ChangeEvent } from 'react'
import classNames from 'classnames'
import Icon, { IconProps } from '../Icon/icon'

type InputSize = 'lg' | 'sm'
export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
  /**是否禁用 Input */
  disabled?: boolean;
  /**设置 input 大小，支持 lg 或者是 sm */
  size?: InputSize;
  /**添加图标，在左侧悬浮添加一个图标，用于提示 */
  icon?: IconProps;
  /**添加前缀 用于配置一些固定组合 */
  prepend?: string | ReactElement;
  /**添加后缀 用于配置一些固定组合 */
  append?: string | ReactElement;
  /**添加输入框 change 事件的回调函数 */
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

/**
 * 支持 HTMLInput 的所有基本属性
 * ### 引用方法
 * ---
 * ~~~js
 * import { Input } from 'lighting-ui'
 * ~~~
 */
export const Input: FC<InputProps> = (props) => {
  const {
    disabled,
    size,
    icon,
    prepend,
    append,
    style,
    ...restProps
  } = props
  const cnames = classNames('lighting-input-wrapper', {
    [`input-size-${size}`]: size,
    'is-disabled': disabled,
    'input-group': prepend || append,
    'input-group-append': !!append,
    'input-group-prepend': !!prepend
  })
  const fixControlledValue = (value: any) => {
    if (typeof value === 'undefined' || value === null) {
      return ''
    }
    return value
  }
  if ('value' in props) {
    delete restProps.defaultValue
    restProps.value = fixControlledValue(props.value)
  }
  return (
    <div className={cnames} style={style}>
      {prepend && <div className="lighting-input-group-prepend">{prepend}</div>}
      {icon && <div className="icon-wrapper"><Icon {...icon} /></div>}
      <input
        className="lighting-input-inner"
        disabled={disabled}
        {...restProps}
      />
      {append && <div className="lighting-input-group-append">{append}</div>}
    </div>
  )
}

export default Input;