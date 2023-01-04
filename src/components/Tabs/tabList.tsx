import React, {FC, useContext } from 'react'
import { TabsContext } from './tabs'

export interface TabListProps {
    /** 索引 */
    index?: string;
    /** 选择事件的回调函数 */
    onSelect?: () => void;
    /** 子节点 */
    children?: React.ReactNode;
}

export const TabList: FC<TabListProps> = (props) => {
    const { children } = props
    const context = useContext(TabsContext);

    return <ul className="tab-list">{React.Children.map(children, (child, index) => {
        const childElement = child as React.FunctionComponentElement<TabListProps>
        return React.cloneElement(childElement, {
            index: index.toString(),
            onSelect: () => context.onSelect(index.toString()),
        })
    })}</ul>
}

TabList.displayName = 'TabList';

export default TabList;