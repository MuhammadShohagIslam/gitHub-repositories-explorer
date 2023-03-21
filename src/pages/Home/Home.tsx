// import Accordion from "../../components/shared/Accordion/Accordion";
import Search from "../../components/shared/Search/Search";
import MainLayout from "../../Layout/Main/Main";



const Home = () => {
    return (
        <MainLayout>
            <section className="w-4/5 m-auto">
                <Search />
                {/* <Accordion accordionsData={[]}/> */}
            </section>

        </MainLayout>
    );
};

export default Home;