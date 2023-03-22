import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import '@testing-library/jest-dom'
import Footer from './Footer';

describe("Footer Component", () => {
    it('Footer render correctly', async () => {
        render(<Footer />, {
            wrapper: BrowserRouter
        });
        const footerTitle = screen.getByText("© Muhammad Jhohirul Islam Shohag All Rights Reserved.");
        expect(footerTitle).toBeInTheDocument()
    });
});