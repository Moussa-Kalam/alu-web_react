import React from "react";
import NotificationItem from "./NotificationItem";
import { render, screen } from "@testing-library/react";


describe("Notification item", () => {
    it("should render the notification item", () => {
        render(<NotificationItem value="hello world" />);
        screen.getByText(/hello world/i);

    });

    it("should render the correct when inner html is provided", () => {
        render(<NotificationItem html="<strong>hello world</strong>" />);
        screen.getByText(/hello world/i);
    })
});


