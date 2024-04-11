import React, { FC, useState, createContext } from "react";
import classNames from "classnames";
import { MenuItemProps } from "./menuItem";

type MenuMode = "horizontal" | "vertical";
type SelectCallBack = (selectIndex: string) => void;
export interface MenuProps {
    /**默认索引*/
    defaultIndex?: string;
    /**class类名*/
    className?: string;
    /**排列方向*/
    mode?: MenuMode;
    /**自定义样式*/
    style?: React.CSSProperties;
    /**自定义回调函数*/
    onSelect?: SelectCallBack;
    /**子节点*/
    children?: React.ReactNode;
    /**默认展开的菜单项*/
    defaultOpenSubMenus?: string[];
}

interface IMenuContext {
    index: string;
    onSelect?: SelectCallBack;
    mode?: MenuMode;
    defaultOpenSubMenus: string[];
}

export const MenuContext = createContext<IMenuContext>({
    index: "0",
    defaultOpenSubMenus: ["2"],
});

/**
 * ### 引用方法
 * ---
 * ~~~js
 * import { Menu } from 'lighting-ui-react'
 * ~~~
 *
 */

export const Menu: FC<MenuProps> = (props) => {
    const {
        className,
        mode,
        style,
        children,
        defaultIndex,
        onSelect,
        defaultOpenSubMenus,
    } = props;
    const [currentActive, setActive] = useState(defaultIndex);
    const classes = classNames("lighting-menu", className, {
        "menu-vertical": mode === "vertical",
        "menu-horizontal": mode !== "vertical",
    });

    const handleClick = (index: string) => {
        setActive(index);
        if (onSelect) {
            onSelect(index);
        }
    };

    const passedContext: IMenuContext = {
        index: currentActive ? currentActive : "0",
        onSelect: handleClick,
        mode,
        defaultOpenSubMenus,
    };

    const renderChildren = () => {
        return React.Children.map(children, (child, index) => {
            const childElement =
                child as React.FunctionComponentElement<MenuItemProps>;
            const { displayName } = childElement.type;
            if (displayName === "MenuItem" || displayName === "SubMenu") {
                return React.cloneElement(childElement, {
                    index: index.toString(),
                });
            } else {
                console.error(
                    "Warning: Menu has a child which is not a MenuItem Component"
                );
            }
        });
    };
    return (
        <ul className={classes} style={style} data-testid="test-menu">
            <MenuContext.Provider value={passedContext}>
                {renderChildren()}
            </MenuContext.Provider>
        </ul>
    );
};

Menu.defaultProps = {
    defaultIndex: "0",
    mode: "horizontal",
    defaultOpenSubMenus: [],
};

export default Menu;
