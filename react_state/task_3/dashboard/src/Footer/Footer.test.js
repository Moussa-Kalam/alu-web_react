import AppContext from '../App/AppContext';
import Footer from "./Footer";
import { render, screen } from "@testing-library/react";


describe("Footer", () => {
    it("should render the footer element correctly when user is logged in", () => {
        render(<AppContext.Provider value={{ user: {isLoggedIn: true} }}><Footer /> </AppContext.Provider>);
        screen.getByText(/Copyright/i);
        screen.getByText('contact us');
    });

    it("should render the footer element correctly when user is logged out", () => {
        render(<AppContext.Provider value={{ user: {isLoggedIn: false} }}><Footer /> </AppContext.Provider>);
        screen.getByText(/Copyright/i);
        expect(screen.queryByText('contact us')).toBeNull();
    });
})