import { render as rtlRender, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import GitHubUsersSearchForm from './GitHubUsersSearchForm';
import { Provider } from 'react-redux';
import store from '../../../../redux/store/store';

const render = (component: React.ReactNode) => rtlRender(
    <Provider store={store}>
        {component}
    </Provider>
)
describe("GitHubUsersSearchForm Component", () => {
    it('GitHubUsersSearchForm render correctly', async () => {
        render(<GitHubUsersSearchForm />);
        const searchLabel = screen.getByLabelText("Search", {
            selector: "input"
        });
        expect(searchLabel).toBeInTheDocument()
    });
});