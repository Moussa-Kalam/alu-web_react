import React from "react";



export default function CourseListRow({
  isHeader = false,
  textFirstCell,
  textSecondCell,
}) {

const styles = {
  backgroundColor: isHeader ? "#deb5b545" : "#f5f5f5ab",
}
  return (
    <tr>
      {isHeader && (
        <>
          {textSecondCell === null ? (
            <th style={styles}  data-testid="course-table-header" colSpan="2">{textFirstCell}</th>
          ) : (
            <>
              <th style={styles}  data-testid="course-table-header">{textFirstCell}</th>
              <th style={styles}  data-testid="course-table-header">{textSecondCell}</th>
            </>
          )}
        </>
      )}
      {!isHeader && (
        <>
          <td style={styles} data-testid="course-table-body">{textFirstCell}</td>
          <td style={styles} data-testid="course-table-body">{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}
