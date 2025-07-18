import "./styles/about.css"
import StatsGrid from "./home/statsgrid";
import CarouselSlider from "./home/CarouselSlider";

export default function About() {
    const stats = [
        { value: "100+", label: "Qualified Doctors" },
        { value: "24/7", label: "Support Available" },
        { value: "100+", label: "Thriving Users" },
        { value: "98%", label: "Satisfaction Rate" },
    ];

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

    return (
        <div className="aboutus-container">
            <div className="aboutus-headings">
                <h4>About Cuddlemind</h4>
                <h2>Transforming Mental Health Care</h2>
                <p>
                    We're on a mission to make professional mental health support accessible, affordable, and effective for everyone, everywhere.
                </p>
            </div>

            <div className="aboutus-mission">
                <div className="aboutus-mission-inner">
                    <h3>Our Mission</h3>
                    <p>
                        Our mission is to make mental health support simple, free, and stigma-free for everyone.
                        Whether you’re a student, professional, caregiver, or just someone needing a safe space.
                        With self-help tools, guided exercises, emotional support chats, and helpful content,
                        our platform is built to help you feel better, faster.
                    </p>
                </div>
            </div>

            <div className="aboutus-impact">
                <h3>Our Impact</h3>
                <StatsGrid stats={stats} />
            </div>

            <div className="aboutus-profe">
                <h3>Meet Our Professionals</h3>
                <p>
                    Doctors on our platform is a certified mental health professional who has undergone training and education.
                    They hold relevant degrees in their respective fields such as psychology, counseling, psychotherapy, or social work and
                    experience in helping individuals manage emotional, psychological, and behavioral challenges.
                </p>
            </div>

            <div className="aboutus-carousel">
                <CarouselSlider professionals={professionals} />
            </div>
        </div>
    );
}
