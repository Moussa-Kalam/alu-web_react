import React from "react";
import NotificationItem from "./NotificationItem";
import { render, screen } from "@testing-library/react";
import { StyleSheetTestUtils } from "aphrodite";

StyleSheetTestUtils.suppressStyleInjection()


describe("Notification item", () => {
    it("should render the notification item", () => {
        render(<NotificationItem value="hello world" />);
        screen.getByText(/hello world/i);

    });

    it("should render the correct when inner html is provided", () => {
        render(<NotificationItem html="<strong>hello world</strong>" />);
        screen.getByText(/hello world/i);
    })

    it("should call the markAsRead function when clicked", () => {
        const mockMarkAsRead = jest.fn();
        render(<NotificationItem markAsRead={mockMarkAsRead} value="hello world" />);
        screen.getByText(/hello world/i).click();
        expect(mockMarkAsRead).toHaveBeenCalled();
    });
});


