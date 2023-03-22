import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Loader from './Loader';

describe("Loader Component", () => {
    it('Loader render correctly', async () => {
        render(<Loader />);
        const spanLoading = screen.getByText('Loading...');
        expect(spanLoading).toBeInTheDocument()
    });
});