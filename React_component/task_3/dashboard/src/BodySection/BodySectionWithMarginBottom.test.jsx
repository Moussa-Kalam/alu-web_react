import { render, screen } from '@testing-library/react';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';

describe('BodySectionWithMarginBottom tests', () => {
    it('should render the right children', () => {
        render(<BodySectionWithMarginBottom title='test title'>test children</BodySectionWithMarginBottom>)
        screen.getByText('test title')
        screen.getByText('test children')
    })
});