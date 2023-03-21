import { useEffect, useState } from 'react';
import Accordion from "../../components/shared/Accordion/Accordion";
import { useForm, SubmitHandler, FieldErrors } from "react-hook-form";
import { toast } from "react-hot-toast";
import loadGitHubUserDataByUser from '../../redux/middlewares/thunk/githubUser/gitHubUserFetch';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import { RootState } from '../../redux/store/store';

type SearchInputs = {
    search: string,
};



const Home = () => {
    const [loading, setLoading] = useState(true);
    const [searchUser, setSearchUser] = useState("")
    const dispatch = useAppDispatch();
    const gitHubUsers = useAppSelector((state: RootState) => state.gitHubUsers.gitHubUsers);
    const { register, handleSubmit, formState: { errors } } = useForm<SearchInputs>();
    const registerOptions = {
        search: { required: "Search is required" },
    };

    // useEffect(() => {

    // }, [dispatch]);

    // const laodingData = () => {

    // }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleSearch: SubmitHandler<SearchInputs> = data => {
        if (data.search) {
            setSearchUser(data.search)
            dispatch(loadGitHubUserDataByUser(data.search));
        }
    }
    const handleError = (errors: FieldErrors<SearchInputs>) => {
        if (errors.search?.message) {
            toast.error("Please Enter Github UserName")
        }
    }
    return (
        <section className="pt-20">
            <div className="w-2/5 m-auto bg-white p-5">
                <form onSubmit={handleSubmit(handleSearch, handleError)}>
                    <label className="mb-2 text-sm font-medium text-gray-700 sr-only ">Search</label>
                    <div className="relative">
                        <input type="search" {...register('search', registerOptions.search)} className={`block w-full p-4 pl-10 text-sm text-gray-900 border-2 rounded-sm bg-gray-50 focus:border-gray-400 focus:outline-none ${errors.search?.message && "border-rose-600  focus-visible:border-rose-600"}`} placeholder="Search with User name" />
                        <button type="submit" className="block mt-2 w-full text-white bottom-2.5 bg-blue-400 hover:bg-blue-500 transition-all focus:outline-none focus:ring-transparent font-medium rounded-sm text-md px-4 py-2 ">Search</button>
                    </div>

                </form>
                <div>
                   {searchUser && <span>Showing User For {searchUser}</span>} 
                </div>
                <Accordion data={gitHubUsers} />
            </div>
        </section>
    );
};

export default Home;