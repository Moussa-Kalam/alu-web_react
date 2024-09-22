import React from "react";
import { StyleSheet, css} from 'aphrodite';



export default function CourseListRow({
  isHeader = false,
  textFirstCell,
  textSecondCell,
}) {

const className = isHeader ? css(styles.tableHeader) : css(styles.tableBody);
  return (
    <tr>
      {isHeader && (
        <>
          {textSecondCell === null ? (
            <th className={className}  data-testid="course-table-header" colSpan="2">{textFirstCell}</th>
          ) : (
            <>
              <th className={className}  data-testid="course-table-header">{textFirstCell}</th>
              <th className={className}  data-testid="course-table-header">{textSecondCell}</th>
            </>
          )}
        </>
      )}
      {!isHeader && (
        <>
          <td className={className} data-testid="course-table-body">{textFirstCell}</td>
          <td className={className} data-testid="course-table-body">{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}


const styles = StyleSheet.create({
  tableHeader: {
    backgroundColor: "#deb5b545",
  },
  tableBody: {
    backgroundColor: "#f5f5f5ab",
  },
});