import { getLatestNotifications } from "../utils/utils";
import Notifications from "./Notifications";
import { render, screen, fireEvent } from "@testing-library/react";
import { StyleSheetTestUtils } from "aphrodite";

StyleSheetTestUtils.suppressStyleInjection()

describe("Notifications tests", () => {
  it("should render the corrent message when there not notification", () => {
    render(<Notifications displayDrawer={true} />);
    expect(screen.getAllByRole("listitem")).toHaveLength(1);
  });
  it("should render all notifications", () => {
    const listNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      { id: 3, type: "urgent", html: getLatestNotifications() },
    ];
    render(<Notifications displayDrawer={true}  listNotifications={listNotifications} />);
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
    const { rerender } = render(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(screen.getAllByRole("listitem")).toHaveLength(2);

    const updatedListNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      { id: 3, type: "urgent", value: "New notification" },
    ];
    rerender(<Notifications displayDrawer={true} listNotifications={updatedListNotifications} />);
    expect(screen.getAllByRole("listitem")).toHaveLength(3);
  });

  it("should render the component with displayDrawer set to true", () => {
    render(<Notifications displayDrawer={true} />);
    screen.getByText('No new notification for now')
  });

  it("should render the component with displayDrawer set to false", () => {
    render(<Notifications displayDrawer={false} />);
    expect(screen.queryByText('No new notification for now')).toBeNull();
  });

  it("should call handleHideDrawer when close button is clicked", () => {
    const handleHideDrawerMock = jest.fn();
    render(<Notifications handleHideDrawer={handleHideDrawerMock} />);
    const closeButton = screen.getByAltText("close");
    fireEvent.click(closeButton);
    expect(handleHideDrawerMock).toHaveBeenCalled();
  });

  it("should call handleDisplayDrawer when title is clicked", () => {
    const handleDisplayDrawerMock = jest.fn();
    render(<Notifications handleDisplayDrawer={handleDisplayDrawerMock} />);
    const title = screen.getByText("Here is the list of notifications");
    fireEvent.click(title);
    expect(handleDisplayDrawerMock).toHaveBeenCalled();
  });
});
