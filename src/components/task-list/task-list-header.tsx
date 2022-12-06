import React from "react";
import { ColumnVisibility } from "../../types/public-types";
import styles from "./task-list-header.module.css";

export const TaskListHeaderDefault: React.FC<{
  headerHeight: number;
  rowWidth: string;
  fontFamily: string;
  fontSize: string;
  columnList: ColumnVisibility[];
}> = ({ headerHeight, fontFamily, fontSize, rowWidth, columnList}) => {
  return (
    <div
      className={styles.ganttTable}
      style={{
        fontFamily: fontFamily,
        fontSize: fontSize,
      }}
    >
      <div
        className={styles.ganttTable_Header}
        style={{
          height: headerHeight - 2,
        }}
      >
        {columnList.map(columnVisibility => {
          if(columnVisibility.isVisible === true) {
            return (
              <div
                className={styles.ganttTable_HeaderItem + ' ' + columnVisibility.headerCellClass}
                style={{
                  minWidth: rowWidth,
                }}
              >
                &nbsp;{columnVisibility.columnName}
              </div>
            )
          }
          else {
            return(<div></div>);
          }
        })}
      </div>
    </div>
  );
};
