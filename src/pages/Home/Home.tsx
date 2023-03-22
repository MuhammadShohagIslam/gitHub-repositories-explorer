import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import { RootState } from '../../redux/store/store';
import loadGitHubUsersData from '../../redux/middlewares/thunk/gitHubUsers/gitHubUsersFetch';
import Jumbotron from '../../components/shared/Jumbotron/Jumbotron';
import TopRepositories from '../../components/shared/Users/TopRepositories';
import GitHubUsersSearchForm from '../../components/shared/Form/GitHubUsersSearchForm/GitHubUsersSearchForm';




const Home = () => {
    const dispatch = useAppDispatch();
    const { gitHubUsers } = useAppSelector((state: RootState) => state);
    const { gitHubUsers: gitHubUsersData, isLoading: isUsersLoading } = gitHubUsers;

    useEffect(() => {
        dispatch(loadGitHubUsersData());
    }, [dispatch]);
    
    return (
        <>
            <Jumbotron name="Let's Go Github Explore with User" />
            <GitHubUsersSearchForm />
            <TopRepositories data={gitHubUsersData} isLoading={isUsersLoading} />
        </>

    );
};

export default Home;