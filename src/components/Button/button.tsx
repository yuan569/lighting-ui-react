import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes} from 'react'
import classNames from 'classnames'

export type ButtonSize = 'lg' | 'sm'

export type ButtonType = 'primary' | 'default' | 'success' | 'info' | 'danger' | 'warning' | 'link'


interface BaseButtonProps {
    /**设置Button的class名称*/
    className?: string;
    /**设置Button的禁用*/
    disabled?: boolean;
    /**设置Button的尺寸*/
    size?: ButtonSize;
    /**设置Button的类型*/
    btnType?: ButtonType;
    children: React.ReactNode;
    /**设置当Button为 "link" 类型时的链接地址*/
    href?: string;
    /**设置Button是否为描边状态*/
    plain?: boolean;
}
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>
/**
 * ### 引用方法
 * ---
 * ~~~js
 * import { Button } from 'lighting-ui-react'
 * ~~~
 * @param props 
 */

export const Button: FC<ButtonProps> = (props) => {
    const {
        btnType,
        className,
        disabled,
        size,
        children,
        href,
        plain,
        ...restProps
    } = props

    const classes = classNames('btn', className, {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        'disabled': (btnType === 'link') && disabled,
        'plain': plain

    })
    if (btnType === 'link' && href) {
        return (
            <a
                className={classes}
                href={href}
                {...restProps}
            >
                {children}
            </a>
        )
    } else {
        return (
            <button
                className={classes}
                disabled={disabled}
                {...restProps}
            >
                {children}
            </button>
        )
    }
}

Button.defaultProps = {
    disabled: false,
    plain: false,
    btnType: 'default'
}

export default Button;