import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes} from 'react'
import classNames from 'classnames'

export enum ButtonSize {
    Large = 'lg',
    Small = 'sm'
}

export enum ButtonType {
    Primary = 'primary',
    Default = 'default',
    Danger = 'danger',
    Link = 'link'
}

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
    /**设置Button为 “link” 类型时的链接地址*/
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
 * import { Button } from 'lighting-ui'
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
        'disabled': (btnType === ButtonType.Link) && disabled,
        'plain': plain

    })
    if (btnType === ButtonType.Link && href) {
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
    btnType: ButtonType.Default
}

export default Button;