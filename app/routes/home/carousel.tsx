import { useState } from "react";
import "./styles/carousel.css"

const professionals = [
    {
        name: "Dr. John Smith",
        specialty: "Cardiologist",
        image: "/pro1.png"
    },
    {
        name: "Dr. Emily Davis",
        specialty: "Neurologist",
        image: "/pro1.png"
    },
    {
        name: "Dr. Sarah Lee",
        specialty: "Pediatrician",
        image: "/home1.png"
    },
    {
        name: "Dr. David Brown",
        specialty: "Orthopedic Surgeon",
        image: "/home2.png"
    },
    {
        name: "Dr. Olivia Wilson",
        specialty: "Dermatologist",
        image: "/home3.png"
    },
    {
        name: "Dr. Michael Chen",
        specialty: "Oncologist",
        image: "/home4.png"
    }
];

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % professionals.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? professionals.length - 1 : prev - 1
        );
    };

    return (
        <div className="carousel-container">
            <div className="carousel-heading">
                <h3>Meet our Professionals</h3>
            </div>
            <div className="carousel-wrapper">
                <button className="carousel-button left" onClick={prevSlide}>&lt;</button>
                <div className="carousel-track">
                    {professionals.slice(currentIndex, currentIndex + 3).map((pro, idx) => (
                        <div key={idx} className="carousel-card">
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
                <button className="carousel-button right" onClick={nextSlide}>&gt;</button>
            </div>
        </div>
    )
}