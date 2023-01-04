import React, { FC, useState, createContext, createRef } from 'react'
import classNames from 'classnames'

type TabMode = 'line' | 'card'
type SelectCallBack = (selectIndex: string) => void;
export interface TabsProps {
    /** 默认索引 */
    defaultIndex?: string;
    /** class名称 */
    className?: string;
    /** 排列方式 */
    mode?: TabMode;
    /** 内联样式 */
    style?: React.CSSProperties;
    /** 选择事件的回调函数 */
    onSelect?: SelectCallBack;
    /** 子节点 */
    children?: React.ReactNode;
}

interface ITabsContext {
    index: string;
    onSelect?: SelectCallBack;
    mode?: TabMode;
}

export const TabsContext = createContext<ITabsContext>({ index: '0' })



/**
 * ### 引用方法
 * ---
 * ~~~js
 * import { Tabs } from 'lighting-ui'
 * ~~~
 * 
 */


export const Tabs: FC<TabsProps> = (props) => {
    const { className, mode, style, children, defaultIndex, onSelect } = props

    const [currentActive, setActive] = useState(defaultIndex ? defaultIndex : '0')
    const classes = classNames("lighting-tabs", className, {
        'tabs-line': mode === 'line',
        'tabs-card': mode !== 'line'
    })

    const handleSelect = (index: string) => {
        // console.log(index, 'handleSelect, index')

        setActive(index)

        if (onSelect) {
            onSelect(index)
        }

    }

    const passedContext: ITabsContext = {
        index: currentActive ? currentActive : '0',
        onSelect: handleSelect,
        mode,
    }

    return (
        <div
            className={classes} style={style}
            data-testid="test-tabs"
        >
            <TabsContext.Provider value={passedContext}>{children}</TabsContext.Provider>
        </div>

    )
}

Tabs.defaultProps = {
    defaultIndex: '0',
    mode: 'line',
};

export default Tabs;