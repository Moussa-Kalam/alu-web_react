import React from "react";
import CourseListRow from "./CourseListRow";
import { render, screen } from "@testing-library/react";
import { StyleSheetTestUtils } from "aphrodite";

StyleSheetTestUtils.suppressStyleInjection()
describe("Course List row", () => {
    it("should render the first and second if the isHeader is true", () => {
        render(<CourseListRow isHeader={true} textFirstCell="First" textSecondCell="Second" />);
        screen.getByText("First");
        screen.getByText("Second");
    });

    it("should render only the first element if the isHeader is true and the second element is null", () => {
        render(<CourseListRow isHeader={true} textFirstCell="First" textSecondCell={null} />);
        screen.getByText("First");
    });

    it("should render the two element if the header is false", () => {
        render(<CourseListRow isHeader={false} textFirstCell="First" textSecondCell="Second" />);
        screen.getByText("First");
        screen.getByText("Second"); 
    })

})