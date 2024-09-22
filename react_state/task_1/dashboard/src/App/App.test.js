import { StyleSheetTestUtils } from "aphrodite";
import App from "./App";
import { shallow } from "enzyme";
import { render, screen } from '@testing-library/react';

StyleSheetTestUtils.suppressStyleInjection()
describe('App tests', () => {
    it('should render the right divs', () => {
        render(<App />)
        screen.getByTestId('App-header')
        screen.getByTestId('App-body')
        screen.getByTestId('App-footer')
    });


    it.skip("should Have displayDrawer as false by default", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.state().displayDrawer).toEqual(false);
    });

    it.skip("should change displayDrawer to true when handlerDisplayDrawer is called", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.state().displayDrawer).toEqual(false);

        const instance = wrapper.instance();

        instance.handleDisplayDrawer();

        expect(wrapper.state().displayDrawer).toEqual(true);
    });

    it.skip("should change displayDrawer to false when handleHideDrawer is called", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.state().displayDrawer).toEqual(false);

        // const instance = wrapper.instance();

        wrapper.instance().handleDisplayDrawer();

        expect(wrapper.state().displayDrawer).toEqual(true);

        wrapper.instance().handleHideDrawer();

        expect(wrapper.state().displayDrawer).toEqual(false);
    });
})