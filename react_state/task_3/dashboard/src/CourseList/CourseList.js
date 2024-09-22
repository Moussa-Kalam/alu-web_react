import React from "react";
import CourseListRow from "./CourseListRow";
import CourseShape from "./CourseShape";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";


export default function CourseList({ listCourses = [] }) {
    return <table id="CourseList" className={css(styles.CourseList)}>
        <thead>
            <CourseListRow isHeader={true} textFirstCell="Available courses" />
            <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
        </thead>
        <tbody>
        {listCourses.length > 0 ? (
          listCourses.map(({ id, name, credit }) => <CourseListRow key={id} textFirstCell={name} textSecondCell={credit} />)
        ) : (
          <CourseListRow textFirstCell="No course available yet" />
        )}
        </tbody>
    </table>
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

const styles = StyleSheet.create({
  CourseList: {
    width: '100%',
    marginTop: '40px',
  },
});

