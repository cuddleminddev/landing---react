import "./styles/mind.css"

export default function Mind() {
    return (
        <div className="mind-container">
            <div className="mind-left">
                <img src="/home4.png" alt="" />
            </div>
            <div className="mind-right">
                <div className="mind-heading">
                    <h4>A healthy mind is the greatest gift you can give yourself</h4>
                    <p>Discover the strength of a calm, focused, and balanced mind. Embrace positivity,
                        build resilience, and thrive every day.
                        A healthy mind is your key to a happier, fuller life.</p>
                </div>
                <div className="mind-cards">
                    <div>
                        <h4><i className="bi bi-lightbulb-fill"></i></h4>
                        <h3>Gain Clarity & Confidence</h3>
                        <p>Navigate difficult emotions and decisions with a clearer, calmer perspective.</p>
                    </div>
                    <div>
                        <h4><i className="bi bi-suit-club-fill"></i></h4>
                        <h3>Feel Hard, Anytime</h3>
                        <p>Experience the relief of expressing yourself freely whenever needed. </p>
                    </div>
                </div>
                <div className="mind-button">
                    <button>Book an appoinment</button>
                </div>
            </div>
        </div>
    )
}