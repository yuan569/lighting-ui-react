import React, {
    FC,
    useContext,
    useState,
    FunctionComponentElement,
} from "react";
import classNames from "classnames";
import { MenuContext } from "./menu";
import { MenuItemProps } from "./menuItem";
import Icon from "../Icon/icon";
export interface SubMenuProps {
    /**索引*/
    index?: string;
    /**一级菜单名称*/
    title: string;
    /**class类名*/
    className?: string;
    /**子节点*/
    children?: React.ReactNode;
}

export const SubMenu: FC<SubMenuProps> = ({
    index,
    title,
    children,
    className,
}) => {
    const context = useContext(MenuContext);
    const openedSubMenus = context.defaultOpenSubMenus as Array<string>;
    const isOpend =
        index && context.mode === "vertical"
            ? openedSubMenus.includes(index)
            : false;
    const [menuOpen, setOpen] = useState(isOpend);
    const classes = classNames("menu-item submenu-item", className, {
        "is-active": context.index === index,
        "is-opened": menuOpen,
        "is-vertical": context.mode === "vertical",
    });
    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setOpen(!menuOpen);
    };
    let timer: any;
    const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
        clearTimeout(timer);
        e.preventDefault();
        timer = setTimeout(() => {
            setOpen(toggle);
        }, 300);
    };
    const clickEvents =
        context.mode === "vertical"
            ? {
                onClick: handleClick,
            }
            : {};
    const hoverEvents =
        context.mode !== "vertical"
            ? {
                onMouseEnter: (e: React.MouseEvent) => {
                    handleMouse(e, true);
                },
                onMouseLeave: (e: React.MouseEvent) => {
                    handleMouse(e, false);
                },
            }
            : {};
    const renderChildren = () => {
        const subMenuClasses = classNames("lighting-submenu", {
            "menu-opened": menuOpen,
        });
        const childrenComponent = React.Children.map(children, (child, i) => {
            const childrenElement = child as FunctionComponentElement<MenuItemProps>;
            if (childrenElement.type.displayName === "MenuItem") {
                return React.cloneElement(childrenElement, {
                    index: `${index}-${i}`,
                });
            } else {
                console.error(
                    "Warning: Menu has a child which is not a MenuItem Component"
                );
            }
        });
        return <ul className={subMenuClasses}>{childrenComponent}</ul>;
    };
    return (
        <li key={index} className={classes} {...hoverEvents}>
            <div className="submenu-title" {...clickEvents}>
                {title}
                <Icon
                    name="chevron-down"
                    size="20"
                    strokeWidth="1.2"
                    className="arrow-icon"
                />
            </div>
            {renderChildren()}
        </li>
    );
};

SubMenu.displayName = "SubMenu";
export default SubMenu;
