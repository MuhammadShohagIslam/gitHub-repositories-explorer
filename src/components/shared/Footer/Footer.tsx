import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-white shadow-lg py-6">
            <span className="block text-sm text-gray-500 text-center ">©<Link to="/" className="hover:underline">GitHub</Link>. All Rights Reserved.</span>
        </footer>
    );
};

export default Footer;