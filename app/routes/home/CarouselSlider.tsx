import React, { useState, useEffect, useRef } from "react";
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
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStartX, setTouchStartX] = useState<number | null>(null);
    const [isMobile, setIsMobile] = useState(false);
    const [isInteracting, setIsInteracting] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const checkScreen = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkScreen();
        window.addEventListener("resize", checkScreen);
        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    useEffect(() => {
        if (!isInteracting) {
            intervalRef.current = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % professionals.length);
            }, 3000);
        }

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [professionals.length, isInteracting]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % professionals.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + professionals.length) % professionals.length);
    };

    const visibleCards = isMobile ? 1 : 3;

    const getVisibleProfessionals = () => {
        const result = [];
        for (let i = 0; i < visibleCards; i++) {
            const index = (currentIndex + i) % professionals.length;
            result.push(professionals[index]);
        }
        return result;
    };

    const visibleProfessionals = getVisibleProfessionals();

    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStartX(e.touches[0].clientX);
        setIsInteracting(true);
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (touchStartX === null) return;
        const touchEndX = e.changedTouches[0].clientX;
        const diff = touchStartX - touchEndX;
        if (diff > 50) {
            nextSlide();
        } else if (diff < -50) {
            prevSlide();
        }
        setTouchStartX(null);
        setTimeout(() => setIsInteracting(false), 1000); // resume autoplay after delay
    };

    const handleMouseEnter = () => {
        setIsInteracting(true);
    };

    const handleMouseLeave = () => {
        setIsInteracting(false);
    };

    return (
        <div
            className="carousel-wrapper"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <button className="carousel-button left" onClick={prevSlide}>
                &lt;
            </button>
            <div className="carousel-track">
                {visibleProfessionals.map((pro, idx) => (
                    <div key={idx} className="carousel-card">
                        <div className="card-image" data-name={pro.name} data-specialty={pro.specialty}>
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
            </div>
            <button className="carousel-button right" onClick={nextSlide}>
                &gt;
            </button>
        </div>
    );
}
