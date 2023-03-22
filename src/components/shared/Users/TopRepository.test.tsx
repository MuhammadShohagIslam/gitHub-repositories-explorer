import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import TopRepository from './TopRepository';
import { BrowserRouter } from 'react-router-dom';


describe("TopRepository Component", () => {
    it('TopRepository render correctly', async () => {
        const githubUsersData = {
            repository_id: 1,
            owner_url: "owner url",
            repository_owner: "github owner",
            avatar_url: "string",
            totalStar: 1,
            repositories: [{
                id: 1,
                repository_url: "string",
                star: 1,
                description: "string"
            }]
        }

        render(<TopRepository data={githubUsersData} />, { wrapper: BrowserRouter })

        const repositoryOwnerElement = screen.getByText("github owner");
        expect(repositoryOwnerElement).toBeInTheDocument()
    });
});