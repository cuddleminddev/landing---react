import "./styles/about.css"

export default function About() {
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
                <div className="aboutus-counts">
                    <div>
                        <h4>100+</h4>
                        <h5>Qualified Doctors</h5>
                    </div>
                    <div>
                        <h4>24/7</h4>
                        <h5>Support Available</h5>
                    </div>
                    <div>
                        <h4>100+</h4>
                        <h5>Thriving Users</h5>
                    </div>
                    <div>
                        <h4>98%</h4>
                        <h5>Satisfaction Rate</h5>
                    </div>
                </div>
            </div>

            <div className="aboutus-profe">
                <h3>Meet Our Professionals</h3>
                <p>
                    Our doctors are certified mental health professionals with training and degrees in psychology,
                    counseling, psychotherapy, or social work. They bring real-world experience to support your emotional,
                    psychological, and behavioral well-being.
                </p>
                <div className="aboutus-carousel">
                    {/* Carousel or doctor list here */}
                </div>
            </div>
        </div>
    );
}
