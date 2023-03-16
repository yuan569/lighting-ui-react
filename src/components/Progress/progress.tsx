import React, { FC } from "react";
import { ThemeProps } from "../Icon/icon";

export interface ProgressProps {
  /**百分比*/
  percent: number;
  /**高度*/
  strokeHeight?: number;
  /**是否显示文本*/
  showText?: boolean;
  /**设置主题色*/
  theme?: ThemeProps;
}

/**
 * ### 引用方法
 * ---
 * ~~~js
 * import { Progress } from 'lighting-ui'
 * ~~~
 * 
 */

export const Progress: FC<ProgressProps> = props => {
  const { percent, strokeHeight, showText, theme } = props;
  return (
    <div className="lighting-progress-bar">
      <div
        className="lighting-progress-bar-outer"
        style={{ height: `${strokeHeight}px` }}
      >
        <div
          className={`lighting-progress-bar-inner color-${theme}`}
          style={{ width: `${percent}%` }}
        >
          {showText && <span className="inner-text">{`${percent}%`}</span>}
        </div>
      </div>
    </div>
  );
};
Progress.defaultProps = {
  strokeHeight: 12,
  showText: true,
  theme: "primary"
};

// Progress.displayName = "progress";
export default Progress;
