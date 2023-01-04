import React, { FC } from "react";
import { ThemeProps } from "../Icon/icon";

export interface ProgressProps {
  percent: number;
  strokeHeight?: number;
  showText?: boolean;
  styles?: React.CSSProperties;
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

const Progress: FC<ProgressProps> = props => {
  const { percent, strokeHeight, showText, styles, theme } = props;
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
