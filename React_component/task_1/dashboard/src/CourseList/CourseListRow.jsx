import React from "react";

export default function CourseListRow({
  isHeader = false,
  textFirstCell,
  textSecondCell,
}) {
  return (
    <tr>
      {isHeader && (
        <>
          {textSecondCell === null ? (
            <th data-testid="course-table-header" colSpan="2">{textFirstCell}</th>
          ) : (
            <>
              <th data-testid="course-table-header">{textFirstCell}</th>
              <th data-testid="course-table-header">{textSecondCell}</th>
            </>
          )}
        </>
      )}
      {!isHeader && (
        <>
          <td data-testid="course-table-body">{textFirstCell}</td>
          <td data-testid="course-table-body">{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}
