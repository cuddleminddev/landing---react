import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./styles/carousel.css";

type Professional = {
    name: string;
    specialty: string;
    image: string;
};

type CarouselSliderProps = {
    professionals: Professional[];
};

export default function CarouselSlider({ professionals }: CarouselSliderProps) {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 2,
            slidesToSlide: 2,
        },
        mobile: {
            breakpoint: { max: 768, min: 0 },
            items: 1,
            slidesToSlide: 1,
        },
    };

    return (
        <div className="carousel-wrapper">
            <Carousel
                responsive={responsive}
                swipeable={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                showDots={false}
                keyBoardControl={true}
                containerClass="carousel-track"
                itemClass="carousel-card"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                arrows={true}
                centerMode={false}
            >
                {professionals.map((pro, idx) => (
                    <div key={idx}>
                        <div className="card-image">
                            <img src={pro.image} alt={pro.name} />
                            <div className="card-overlay">
                                <div className="overlay-text">
                                    <p className="name">{pro.name}</p>
                                    <p className="specialty">{pro.specialty}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}
