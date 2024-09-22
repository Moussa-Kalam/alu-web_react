import React from "react";
import CourseList from "./CourseList";
import { render, screen } from "@testing-library/react";
import { StyleSheetTestUtils } from "aphrodite";

StyleSheetTestUtils.suppressStyleInjection()

test("renders CourseList component", () => {
    const listCourses = [
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 },
  ];
    render(<CourseList listCourses={listCourses} />);
    
    expect(screen.getAllByTestId("course-table-header")).toHaveLength(4);
    expect(screen.getAllByTestId("course-table-body")).toHaveLength(6);
});