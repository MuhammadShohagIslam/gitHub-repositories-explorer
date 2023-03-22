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

    const handleSearch: SubmitHandler<SearchInputs> = data => {
        if (data.search) {
            setSearchUser(data.search);
            // delete preview whole data
            gitHubUsersDataByUser.length = 0;
            // then store new github users data
            dispatch(loadGitHubUserDataByUser(data.search));
        }
    }
    const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length === 0) {
            setSearchUser("");
            // delete preview whole data
            gitHubUsersDataByUser.length = 0;
        }
    }
    const handleError = (errors: FieldErrors<SearchInputs>) => {
        if (errors.search?.message) {
            toast.error("Please Enter Github UserName")
        }
    }
    return (
        <section className="pt-16 pb-10 md:pt-12 md:pb-8 sm:pt-10 sm:md-0 sm:pb-4">
            <SectionTitle title="Search Desire Github User" />
            <div className="w-2/5 m-auto bg-white p-5 mt-10 md:w-5/6 sm:w-[92%] rounded-sm sm:mt-5">
                <form onSubmit={handleSubmit(handleSearch, handleError)}>
                    <label htmlFor='search' className="mb-2 text-sm font-medium text-gray-700 sr-only ">Search</label>
                    <div className="relative">
                        <input id='search' type="search" {...register('search', {
                            required: "Search is required!",
                            onChange: (e) => handleChangeSearch(e),
                        })} className={`block w-full p-3 pl-10 sm:pl-6 text-md  text-gray-900 border-2 rounded-sm bg-gray-50 focus:border-gray-400 focus:outline-none ${errors.search?.message && "border-rose-600  focus-visible:border-rose-600"}`} placeholder="Search with User name" />
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