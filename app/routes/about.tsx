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
                <h3>ABOUT US</h3>
                <p>
                    We're not just offering support <br />
                    we're standing beside you
                </p>
            </div>

            <div className="aboutus-mission">
                <h3>Our Mission</h3>
                <p>
                    Our mission is to make mental health support simple, free, and stigma-free for everyone.
                    Whether you’re a student, professional, caregiver, or just someone needing a safe space.
                    With self-help tools, guided exercises, emotional support chats, and helpful content,
                    our platform is built to help you feel better, faster.
                </p>
            </div>

            <div className="aboutus-impact">
                <h3>Our Impact</h3>
                <StatsGrid stats={stats} />
            </div>

            <div className="aboutus-profe">
                <h3>Meet Our Professionals</h3>
                <p>
                    Our doctors are certified mental health professionals with training and degrees in psychology,
                    counseling, psychotherapy, or social work. They bring real-world experience to support your emotional,
                    psychological, and behavioral well-being.
                </p>
                <div className="aboutus-carousel">
                    <CarouselSlider professionals={professionals} />
                </div>
            </div>
        </div>
    );
}
