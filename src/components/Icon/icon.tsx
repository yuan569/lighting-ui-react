import React, {FC} from 'react'
import classNames from 'classnames'

import { Icon as FeatherIcon, IconComponentProps as FeatherIconProps } from '@ailibs/feather-react-ts';


export type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark'

export interface IconProps extends FeatherIconProps {
    /** 设置主题色 */
    theme?: ThemeProps,
    /** 设置图标尺寸 */
    size?: string,
    /** 设置图标粗细 */
    strokeWidth?: string,
}


/**
 * * 提供了 280+ 常用的 icon 图标
 * * 基于开源图标库 [Feather-Icons](https://feathericons.com/) 封装。文档地址：[NPM 包](https://www.npmjs.com/package/@ailibs/feather-react-ts)
 * * 给组件设置 name 属性即可。
 * 
 * ### 引用方法
 * ---
 * ~~~js
 * import { Icon } from 'lighting-ui-react'
 * ~~~
 */

export const Icon: FC<IconProps> = (props) => {
    const {
        className,
        theme,
        ...restProps
    } = props

    const classes = classNames('lighting-icon', className, {
        [`icon-${theme}`]: theme,

    })
    return (
        <FeatherIcon
            className={classes}
            {...restProps}
        />
    )
}

Icon.defaultProps = {
    size: '24',
    strokeWidth: '2',
}

export default Icon;