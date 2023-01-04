import React, {FC} from 'react'
import classNames from 'classnames'

import { Icon as FeatherIcon, IconComponentProps } from '@ailibs/feather-react-ts';


export type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark'

export interface IconProps extends IconComponentProps {
    /** 设置主题色 */
    theme?: ThemeProps,
    
}


/**
 * 基于开源图标库 [Feather-Icons](https://feathericons.com/) 封装。文档地址：[npm](https://www.npmjs.com/package/@ailibs/feather-react-ts)
 * ### 引用方法
 * ---
 * ~~~js
 * import { Icon } from 'lighting-ui'
 * ~~~
 * @param props 
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



export default Icon;