import { Outlet } from 'react-router-dom';
import Footer from "../../components/shared/Footer/Footer";
import Navbar from "../../components/shared/Navbar/Navbar";

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <main className="h-screen overflow-y-auto bg-gray-200">
                <Outlet></Outlet>
            </main>
            <Footer />
        </>
    );
};

export default MainLayout;