import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import SectionTitle from './SectionTitle';

describe("SectionTitle Component", () => {
    it('SectionTitle render correctly', async () => {
        render(<SectionTitle title="Search Desire Github User" />);
        const sectionTitleParagraph = screen.getByText("Search Desire Github User");
        expect(sectionTitleParagraph).toBeInTheDocument()
    });
});