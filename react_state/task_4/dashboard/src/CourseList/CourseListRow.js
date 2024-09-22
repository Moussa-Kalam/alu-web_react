import React from "react";
import { useState } from "react";



export default function CourseListRow({
  isHeader = false,
  textFirstCell,
  textSecondCell,
}) {

  const [rowChecked, setRowChecked] = useState(false);

  const styles = {
    backgroundColor: isHeader ? "#deb5b545" : "#f5f5f5ab",
  }
  const rowCheckedStyle = {
    backgroundColor: "#e6e4e4"
  }
  return (
    <tr>
      {isHeader && (
        <>
          {textSecondCell === null ? (
            <th style={styles} data-testid="course-table-header" colSpan="2">{textFirstCell}</th>
          ) : (
            <>
              <th style={styles} data-testid="course-table-header">{textFirstCell}</th>
              <th style={styles} data-testid="course-table-header">{textSecondCell}</th>
            </>
          )}
        </>
      )}
      {!isHeader && (
        <>
          <td style={rowChecked ? rowCheckedStyle : styles} data-testid="course-table-body"><input type="checkbox" checked={rowChecked} onChange={() => setRowChecked(!rowChecked)} /> {textFirstCell}</td>
          <td style={rowChecked ? rowCheckedStyle : styles}  data-testid="course-table-body">{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}
