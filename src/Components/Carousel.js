/** @jsxImportSource @emotion/react */
import tw, { styled } from "twin.macro";
import { HeroCard } from "./index";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";

export default function Carousel({ slides }) {
    const Slides = styled.div(({ index, url }) => [
        tw`min-height[60vh] relative  flex items-center`,
        index === 0 ? tw`bg-yellow-600` : tw`bg-yellow-800 text-white`,
        url &&
            `
        background-image: url(${url});
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        cursor: grab`,
    ]);

    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={{ delay: 4000 }}
            slidesPerView={1}
            navigation={true}
            pagination={{ clickable: true }}
        >
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                    <Slides index={index} url={slide.src}>
                        {slide.includeCard ? (
                            <HeroCard
                                title={slide.cardContent.title.name}
                                highlight={slide.cardContent.title.highlight}
                                description={slide.cardContent.description}
                                button={{ text: slide.button.text, to: slide.button["link-to"] }}
                            />
                        ) : null}
                    </Slides>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
