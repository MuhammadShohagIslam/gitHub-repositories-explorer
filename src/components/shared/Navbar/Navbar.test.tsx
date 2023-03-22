import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './Navbar';

describe("Navbar Component", () => {
    it('Navbar render correctly', async () => {
        render(<Navbar />, { wrapper: BrowserRouter });
        const imgElement = screen.getByAltText('GitHub Logo');
        expect(imgElement).toBeInTheDocument()
    });
});