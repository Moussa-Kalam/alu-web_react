import { getLatestNotifications } from "../utils/utils";
import Notifications from "./Notifications";
import { render, screen } from "@testing-library/react";
import { StyleSheetTestUtils } from "aphrodite";

StyleSheetTestUtils.suppressStyleInjection()

describe("Notifications tests", () => {
  it("should render the corrent message when there not notification", () => {
    render(<Notifications />);
    expect(screen.getAllByRole("listitem")).toHaveLength(1);
  });
  it("should render all notifications", () => {
    const listNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      { id: 3, type: "urgent", html: getLatestNotifications() },
    ];
    render(<Notifications listNotifications={listNotifications} />);
    expect(screen.getAllByRole("listitem")).toHaveLength(3);
  });

  it("should render the corrent text", () => {
    render(<Notifications />);
    screen.getByText("Here is the list of notifications");
  });

  it("should update component when listNotifications prop changes", () => {
    const listNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
    ];
    const { rerender } = render(<Notifications listNotifications={listNotifications} />);
    expect(screen.getAllByRole("listitem")).toHaveLength(2);

    const updatedListNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      { id: 3, type: "urgent", value: "New notification" },
    ];
    rerender(<Notifications listNotifications={updatedListNotifications} />);
    expect(screen.getAllByRole("listitem")).toHaveLength(3);
  });
});
