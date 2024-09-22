import App from "./App";
import { render, screen } from '@testing-library/react';


describe('App tests', () => {
    it('should render the right divs', () => {
        render(<App />)
        screen.getByTestId('App-header')
        screen.getByTestId('App-body')
        screen.getByTestId('App-footer')
    })
})