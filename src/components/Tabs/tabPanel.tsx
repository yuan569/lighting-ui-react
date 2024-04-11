import React, { FC, useContext } from 'react'
import classNames from 'classnames'
import { TabsContext } from './tabs'

export interface TabPanelProps {
    /** 索引 */
    index?: string;
    /** 子节点 */
    children?: React.ReactNode;
}

export const TabPanel: FC<TabPanelProps> = (props) => {
    const { index, children } = props
    const context = useContext(TabsContext);



    const classes = classNames("tab-panel", {
        'is-active': context.index === index,
    })

    return (
        <div className={classes}>
            {children}
        </div>
    );
};

TabPanel.displayName = 'TabPanel';
TabPanel.defaultProps = {
    index: '0',
};

export default TabPanel;