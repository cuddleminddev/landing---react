import { useEffect, useState } from "react";
import "./styles/carousel.css"
import CarouselSlider from "./CarouselSlider";

const professionals = [
    {
        name: "Malavika",
        specialty: "Consultant Psychologist",
        image: "/Malavika.webp"
    },
    {
        name: "Sreelekshmi",
        specialty: "Psychiatric Social Worker",
        image: "/Sreelekshmi.webp"
    },
    {
        name: "Reshma ",
        specialty: "College Psychologist",
        image: "/Reshma.webp"
    },
    {
        name: "Krishnaveni",
        specialty: "Counselling Psychologist - Trauma informed | Queer affirmative therapist",
        image: "/Krishnaveni.webp"
    },
    {
        name: "Anju",
        specialty: "Consultant Psychologist",
        image: "/Anju.webp"
    },
    {
        name: "Fathima",
        specialty: "Consultant Psychologist",
        image: "/Fathima.webp"
    },
    {
        name: "Athira",
        specialty: "Consultant Psychologist",
        image: "/Athira.webp"
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