import Header from "./Header";
import { screen, render } from "@testing-library/react";

describe("Header", () => {
  it("should render the correct header element", () => {
    render(<Header />);
    screen.getByRole("img");
    // screen.getByText("School dashboard");
    // screen.getByRole("heading");
  });
});
