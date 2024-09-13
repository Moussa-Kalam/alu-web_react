import Notifications from "./Notifications";
import { render, screen } from "@testing-library/react";


describe("Notifications tests", () => {
    it("should render the correct number of notifications", () => {

    render(<Notifications />);
    expect(screen.getAllByRole("listitem")).toHaveLength(3);
    });

    it("should render the correct text", () => {
        render(<Notifications />);
        screen.getByText('Here is the list of notifications')
    });
});