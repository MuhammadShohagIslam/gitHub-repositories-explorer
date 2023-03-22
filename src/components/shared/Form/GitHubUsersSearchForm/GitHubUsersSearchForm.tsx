import { useState } from 'react';
import { useForm, SubmitHandler, FieldErrors } from "react-hook-form";
import toast from 'react-hot-toast';
import loadGitHubUserDataByUser from '../../../../redux/middlewares/thunk/githubUserByUser/gitHubUserByUserFetch';
import { useAppDispatch, useAppSelector } from '../../../../redux/store/hooks';
import { RootState } from '../../../../redux/store/store';
import Accordion from '../../Accordion/Accordion';
import SectionTitle from '../../SectionTitle/SectionTitle';


type SearchInputs = {
    search: string,
};
const GitHubUsersSearchForm = () => {
    const [searchUser, setSearchUser] = useState<string>("");
    const dispatch = useAppDispatch();
    const { gitHubUsersByUser } = useAppSelector((state: RootState) => state);
    const { gitHubUsersByUser: gitHubUsersDataByUser, isLoading } = gitHubUsersByUser;

    const { register, handleSubmit, formState: { errors } } = useForm<SearchInputs>();
    const registerOptions = {
        search: { required: "Search is required" },
    };


    const handleSearch: SubmitHandler<SearchInputs> = data => {
        if (data.search) {
            setSearchUser(data.search);
            // delete preview whole data
            gitHubUsersDataByUser.length = 0;
            // then store new github users data
            dispatch(loadGitHubUserDataByUser(data.search));
        }
    }
    const handleError = (errors: FieldErrors<SearchInputs>) => {
        if (errors.search?.message) {
            toast.error("Please Enter Github UserName")
        }
    }
    return (
        <section className="pt-16 pb-10">
            <SectionTitle title="Search Desire Github User" />
            <div className="w-2/5 m-auto bg-white p-5 mt-10">
                <form onSubmit={handleSubmit(handleSearch, handleError)}>
                    <label className="mb-2 text-sm font-medium text-gray-700 sr-only ">Search</label>
                    <div className="relative">
                        <input type="search" {...register('search', registerOptions.search)} className={`block w-full p-4 pl-10 text-sm text-gray-900 border-2 rounded-sm bg-gray-50 focus:border-gray-400 focus:outline-none ${errors.search?.message && "border-rose-600  focus-visible:border-rose-600"}`} placeholder="Search with User name" />
                        <button type="submit" className="block mt-2 w-full text-white bottom-2.5 bg-blue-400 hover:bg-blue-500 transition-all focus:outline-none focus:ring-transparent font-medium rounded-sm text-md px-4 py-2 ">Search</button>
                    </div>
                </form>
                <div className='mt-4'>
                    {searchUser && <span className='text-gray-700'>Showing Users For "{searchUser}"</span>}
                </div>
                {isLoading ? (
                    <h2 className='text-blue-400 text-md text-center'>Loading Users...</h2>
                ) : (
                    <Accordion data={gitHubUsersDataByUser} />
                )}

            </div>
        </section>
    );
};

export default GitHubUsersSearchForm;