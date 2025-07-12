import "./styles/card.css"

export default function Card() {
    return (
        <div className="card-container">
            <div className="card-free">
                <p><i className="bi bi-star"></i> 100% free mental health support</p>
            </div>

            <div className="card-heading">
                <h2>Your Personal</h2>
                <h2><span className="gradient-text">Live Doctor Therapist</span></h2>
                <h2>Available 24/7</h2>
            </div>

            <div className="card-content">
                <p>Experience compassionate, confidential mental health support through live video sessions with licensed therapists.
                    Get instant help, professional guidance, and personalized care whenever you need it—completely free.</p>
            </div>

            <div className="card-counts">
                <div>
                    <h3>300+</h3>
                    <p>Clients have taken the step forward to emotional wellness.</p>
                </div>
                <div>
                    <h3>12+</h3>
                    <p>Team of professionals brings deep experience.</p>
                </div>
                <div>
                    <h3>95%</h3>
                    <p>Notice improvement within 3 sessions completed.</p>
                </div>
                <div>
                    <h3>1000+</h3>
                    <p>Virtual sessions delivered ensuring support is always.</p>
                </div>
            </div>
        </div>
    )
}