import React, { useEffect, useRef, useState } from "react";
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
    const trackRef = useRef<HTMLDivElement>(null);
    const [isInteracting, setIsInteracting] = useState(false);

    useEffect(() => {
        let animationFrame: number;

        const scroll = () => {
            if (trackRef.current && !isInteracting) {
                trackRef.current.scrollLeft += 0.5; // Adjust speed here
                if (
                    trackRef.current.scrollLeft + trackRef.current.clientWidth >=
                    trackRef.current.scrollWidth
                ) {
                    trackRef.current.scrollLeft = 0; // loop back
                }
            }
            animationFrame = requestAnimationFrame(scroll);
        };

        animationFrame = requestAnimationFrame(scroll);

        return () => cancelAnimationFrame(animationFrame);
    }, [isInteracting]);

    const handleMouseEnter = () => setIsInteracting(true);
    const handleMouseLeave = () => setIsInteracting(false);
    const handleTouchStart = () => setIsInteracting(true);
    const handleTouchEnd = () => setTimeout(() => setIsInteracting(false), 1000);

    return (
        <div
            className="carousel-wrapper"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            <div className="carousel-track" ref={trackRef}>
                {[...professionals, ...professionals].map((pro, idx) => (
                    <div className="carousel-card" key={idx}>
                        <div className="card-image">
                            <img src={pro.image} alt={pro.name} />
                            <div className="card-overlay">
                                <p className="name">{pro.name}</p>
                                <p className="specialty">{pro.specialty}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
