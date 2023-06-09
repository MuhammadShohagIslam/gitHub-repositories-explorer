import { githubUsersData } from '../../../redux/actionTypes/githubUsersActionTypes';
import { Link } from 'react-router-dom';
import { FaUserGraduate } from 'react-icons/fa';
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";

const TopRepository = ({ data }: { data: githubUsersData }) => {
    return (
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow h-[264px] sm:h-[246px]">
            <div className="flex flex-col items-center p-5 sm:p-5">
                {data?.avatar_url ? (
                    <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={data.avatar_url} alt={data.repository_owner} />
                ) : (
                    <FaUserGraduate className="w-24 h-24 mb-3 rounded-full shadow-lg" />
                )}
                <h5 className="mb-1 text-xl font-medium text-gray-900 ">{data.repository_owner}</h5>
                <h2 className="flex items-center space-x-1">
                    {data?.totalStar ? <AiFillStar /> : <AiOutlineStar />}
                    <span className="-mt-[.9px]">{data?.totalStar}</span>
                </h2>
                <div className="flex mt-4 space-x-3 md:mt-6">
                    <Link to={data.owner_url} target="_blank" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-400 rounded-lg hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 ">Profile Details</Link>
                </div>
            </div>
        </div>
    );
};

export default TopRepository;