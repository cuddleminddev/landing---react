import { useEffect, useState } from "react";
import "./styles/carousel.css"
import CarouselSlider from "./CarouselSlider";

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
    return (
        <div className="carousel-container">
            <div className="carousel-heading">
                <h3>Meet our Professionals</h3>
            </div>
            <CarouselSlider professionals={professionals} />
        </div>
    );
}