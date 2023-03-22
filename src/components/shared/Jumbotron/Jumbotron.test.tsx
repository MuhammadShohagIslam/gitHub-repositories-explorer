import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Jumbotron from './Jumbotron';

describe("Loader Component", () => {
    it('Loader render correctly', async () => {
        render(<Jumbotron name="Let's Go Github Explore with User" />);
        const jumbotronHeading = screen.getByRole('heading', {
            level: 2
        });
        expect(jumbotronHeading).toBeInTheDocument()
    });
});