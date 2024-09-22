import Header from "./Header";
import { screen, render } from "@testing-library/react";
import { StyleSheetTestUtils } from "aphrodite";
import AppContext from "../App/AppContext";

StyleSheetTestUtils.suppressStyleInjection()

describe("Header", () => {
  it("should render the correct header element when user is logged in", () => {
    render(<AppContext.Provider value={{ user: { email: "test@test.com", isLoggedIn: true}}}><Header /></AppContext.Provider>);
    screen.getByRole("img");
    screen.getByText('Welcome test@test.com')
    screen.getByTestId('logout-link')
  });

  it("should render the correct header element when user is logged out", () => {
    render(<AppContext.Provider value={{ user: { email: "", isLoggedIn: false}}}><Header /></AppContext.Provider>);
    screen.getByRole("img");
    expect(screen.queryByTestId('logout-link')).toBeNull();
  });
});
