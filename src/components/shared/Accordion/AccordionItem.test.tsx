import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import AccordionItem from './AccordionItem';
import { BrowserRouter } from 'react-router-dom';


describe("AccordionItem Component", () => {
    it('AccordionItem render correctly', async () => {
        const githubUserDataByUser = {
            repository_id: 1,
            repository_owner: "repository_owner",
            repositories: [{
                id: 1,
                repository_name: "string",
                repository_url: "string",
                star: 1,
                description: "string"
            }]
        }
        render(<AccordionItem accordion={githubUserDataByUser} />, { wrapper: BrowserRouter })
        const repositoryOwnerElement = screen.getAllByText("repository_owner");
        expect(repositoryOwnerElement.length).toBe(1)
    });
});