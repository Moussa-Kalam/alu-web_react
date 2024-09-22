import { render, screen } from '@testing-library/react';
import BodySection from './BodySection';
import { StyleSheetTestUtils } from "aphrodite";

StyleSheetTestUtils.suppressStyleInjection()
describe('BodySection tests', () => {
    it('should render the right children', () => {
        render(<BodySection title='test title'>test children</BodySection>)
        screen.getByText('test title')
        screen.getByText('test children')
    })
}
);