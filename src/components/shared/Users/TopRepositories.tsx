// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
import { githubUsersData } from "../../../redux/actionTypes/githubUsersActionTypes";
import TopRepository from "./TopRepository";
import SectionTitle from "../SectionTitle/SectionTitle";
import Loader from "../Loader/Loader";

type PropsType = {
    data: githubUsersData[];
    isLoading: boolean;
};
const TopRepositories = ({ data, isLoading }: PropsType) => {
    return (
        <div data-aos="fade-up" data-aos-delay="1" className="pt-10 sm:py-8 w-11/12 m-auto pb-12">
            <SectionTitle title="Top Star Profile" />
            <>
                {!isLoading ? (
                    <div className="mt-8 sm:mt-6">
                        <Swiper
                            slidesPerView={1}
                            navigation={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true
                            }}
                            modules={[Navigation, Autoplay]}
                            className="h-[320px] md:h-[332px] sm:h-[296px] top_repositories_swiper"
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 15,
                                },
                                1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 20,
                                },
                                1200: {
                                    slidesPerView: 6,
                                    spaceBetween: 25,
                                },
                            }}
                        >
                            {data?.sort((a, b) => b.totalStar - a.totalStar).map((user) => {
                                return user.repository_id && (
                                    <SwiperSlide key={user.repository_id}>
                                        <TopRepository data={user} />
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </div>
                ) : (
                    <Loader />
                )}
            </>

        </div>
    );
};

export default TopRepositories;
