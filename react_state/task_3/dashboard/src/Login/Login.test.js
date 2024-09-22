import React from "react";
import Login from "./Login";
import { render, screen, fireEvent } from "@testing-library/react";
import { StyleSheetTestUtils } from "aphrodite";

StyleSheetTestUtils.suppressStyleInjection()
describe("login", () => {
    it("should render the login component", () => {
        render(<Login />);
        screen.getByTestId("email");
        screen.getByTestId("password");

    })

    it("should disable the submit button when email or password is empty", () => {
        render(<Login />);
        const submitButton = screen.getByTestId("submit-button");
        console.log(submitButton)
        expect(submitButton).toHaveProperty('disabled', true);

        // Simulate entering a value in the email input
        const emailInput = screen.getByTestId("email");
        fireEvent.change(emailInput, { target: { value: "test@example.com" } });

        expect(submitButton).toHaveProperty('disabled', true);

        // Simulate entering a value in the password input
        const passwordInput = screen.getByTestId("password");
        fireEvent.change(passwordInput, { target: { value: "password123" } });

        expect(submitButton).not.toHaveProperty('disabled', true);
    });
})