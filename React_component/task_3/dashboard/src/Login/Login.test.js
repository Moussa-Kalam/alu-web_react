import React from "react";
import Login from "./Login";
import { render, screen } from "@testing-library/react";


describe("login", () => {
    it("should render the login component", () => {
        render(<Login />);
        screen.getByTestId("email");
        screen.getByTestId("password");

    })
})