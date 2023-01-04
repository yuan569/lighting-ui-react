import React, { FC,useContext } from 'react'
import classNames from 'classnames'
import { TabsContext } from './tabs'

export interface TabProps {
  /** 索引 */
  index?: string;
  /** 是否禁用 */
  disabled?: boolean;
  /** 子节点 */
  children?: React.ReactNode;
  /** 选择事件的回调函数 */
  onSelect?: () => void;
}

export const Tab: FC<TabProps> = (props) => {
  const { index, disabled, children, onSelect } = props
  const context = useContext(TabsContext);
  const classes = classNames("tab-list-item", {
    'is-disabled': disabled,
    'is-active': context.index === index,
  })

  return (
    <li className={classes} onClick={onSelect}>
      {children}
    </li>
  );
};

Tab.displayName = 'Tab';


export default Tab;