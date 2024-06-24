import React from "react";
import { TaskItemProps } from "../task-item";
import styles from "./project.module.css";

export const Project: React.FC<TaskItemProps> = ({ task, isSelected }) => {
  const barColor = isSelected
    ? task.styles.backgroundSelectedColor
    : task.styles.backgroundColor;
  const processColor = isSelected
    ? task.styles.progressSelectedColor
    : task.styles.progressColor;
  const projectWith = task.x2 - task.x1;

  const projectLeftTriangle = [
    task.x1,
    task.y + task.height / 2 - 1,
    task.x1,
    task.y + task.height,
    task.x1 + 15,
    task.y + task.height / 2 - 1,
  ].join(",");
  const projectRightTriangle = [
    task.x2,
    task.y + task.height / 2 - 1,
    task.x2,
    task.y + task.height,
    task.x2 - 15,
    task.y + task.height / 2 - 1,
  ].join(",");
  let showTriangles = task.barCornerRadius < 6;
  let showAvatar = false;
  if (task.assignedUser !== undefined) {
    showAvatar = true;
  }
  let avatarX = task.x1 + 30;
  let avatarY = task.y + task.height / 2 - 10;
  return (
    <g tabIndex={0} className={styles.projectWrapper}>
      <rect
        fill={barColor}
        x={task.x1}
        width={projectWith}
        y={task.y}
        height={task.height}
        rx={task.barCornerRadius}
        ry={task.barCornerRadius}
        className={styles.projectBackground}
      />
      <rect
        x={task.progressX}
        width={task.progressWidth}
        y={task.y}
        height={task.height}
        ry={task.barCornerRadius}
        rx={task.barCornerRadius}
        fill={processColor}
      />
      {showTriangles && <polygon
        className={styles.projectTop}
        points={projectLeftTriangle}
        fill={barColor}
      />}
      {showTriangles && <polygon
        className={styles.projectTop}
        points={projectRightTriangle}
        fill={barColor}
        />}
      {showAvatar && <image x={avatarX} y={avatarY} href="https://www.nps.gov/maps/tools/symbol-library/assets/img/volleyball-black-22.svg" height="22px" width="22px" preserveAspectRatio="none"/>}
    </g>
  );
};
