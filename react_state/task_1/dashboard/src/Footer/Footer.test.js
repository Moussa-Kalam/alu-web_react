import Footer from "./Footer";
import { render, screen } from "@testing-library/react";


describe("Footer", () => {
    it("should render the footer element", () => {
        render(<Footer />);
        screen.getByText(/Copyright/i);

    });
})