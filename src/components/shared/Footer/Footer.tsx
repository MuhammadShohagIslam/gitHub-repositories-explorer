import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-white shadow-lg">
            <div className="w-full mx-auto p-4 px-20 py-8">
                <hr className=" border-gray-200 mx-auto my-8" />
                <span className="block text-sm text-gray-500 text-center ">©<Link to="/" className="hover:underline">GitHub</Link>. All Rights Reserved.</span>
            </div>
        </footer>
    );
};

export default Footer;