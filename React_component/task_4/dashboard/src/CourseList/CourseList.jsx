import React from "react";
import CourseListRow from "./CourseListRow";
import './CourseList.css'
import CourseShape from "./CourseShape";
import PropTypes from "prop-types";


export default function CourseList({ listCourses = [] }) {
    return <table id="CourseList">
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
            {/* <CourseListRow isHeader={false} textFirstCell="ES6" textSecondCell="60" />
            <CourseListRow isHeader={false} textFirstCell="Webpack" textSecondCell="20" />
            <CourseListRow isHeader={false} textFirstCell="React" textSecondCell="40" /> */}
        </tbody>
    </table>
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

