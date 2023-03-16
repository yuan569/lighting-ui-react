import React, { FC } from 'react'
// import { TabsContext } from './tabs'

export interface TabPanelsProps {
    /** 索引 */
    index?: string;
    /** 选择事件的回调函数 */
    onSelect?: () => void;
    /** 子节点 */
    children?: React.ReactNode;
}

export const TabPanels: FC<TabPanelsProps> = (props) => {
    const { children } = props

    return <div className="tab-panels">{React.Children.map(children, (child, index) => {
        const childElement = child as React.FunctionComponentElement<TabPanelsProps>
        return React.cloneElement(childElement, {
            index: index.toString(),
        })
    })}</div>
}

TabPanels.displayName = 'TabPanels';
TabPanels.defaultProps = {
    index: '0',
};

export default TabPanels;