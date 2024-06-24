import React from "react";
import style from "./bar.module.css";

type BarDisplayProps = {
  x: number;
  y: number;
  width: number;
  height: number;
  isSelected: boolean;
  /* progress start point */
  progressX: number;
  progressWidth: number;
  barCornerRadius: number;
  styles: {
    backgroundColor: string;
    backgroundSelectedColor: string;
    progressColor: string;
    progressSelectedColor: string;
  };
  onMouseDown: (event: React.MouseEvent<SVGPolygonElement, MouseEvent>) => void;
  assignedUser?: string;
};
export const BarDisplay: React.FC<BarDisplayProps> = ({
  x,
  y,
  width,
  height,
  isSelected,
  progressX,
  progressWidth,
  barCornerRadius,
  styles,
  onMouseDown,
  assignedUser,
}) => {
  const getProcessColor = () => {
    return isSelected ? styles.progressSelectedColor : styles.progressColor;
  };

  const getBarColor = () => {
    return isSelected ? styles.backgroundSelectedColor : styles.backgroundColor;
  };
  let showAvatar = false;
  if (assignedUser !== undefined) {
    showAvatar = true;
  }
  let avatarX = x + 30;
  let avatarY = y + height / 2 - 10;
  let progressCornerRadius = barCornerRadius;
  let progressHeight = height;
  let progressY = y
  if (progressWidth < 20) {
    progressCornerRadius = 50;
    progressHeight = height / 3;
    progressY = progressY + progressHeight
  }
  return (
    <g onMouseDown={onMouseDown}>
      <rect
        x={x}
        width={width}
        y={y}
        height={height}
        ry={barCornerRadius}
        rx={barCornerRadius}
        fill={getBarColor()}
        className={style.barBackground}
      />
      <rect
        x={progressX}
        width={progressWidth}
        y={progressY}
        height={progressHeight}
        ry={progressCornerRadius}
        rx={progressCornerRadius}
        fill={getProcessColor()}
      />
      {showAvatar && <image x={avatarX} y={avatarY} href="https://www.nps.gov/maps/tools/symbol-library/assets/img/volleyball-black-22.svg" height="22px" width="22px" preserveAspectRatio="none"/>}
    </g>
  );
};
