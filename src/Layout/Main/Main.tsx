import { Outlet } from 'react-router-dom';
import Footer from "../../components/shared/Footer/Footer";
import Navbar from "../../components/shared/Navbar/Navbar";

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <main className="h-screen bg-gray-200"><Outlet></Outlet></main>
            <Footer />
        </>
    );
};

export default MainLayout;