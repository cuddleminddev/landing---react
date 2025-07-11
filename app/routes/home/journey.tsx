import "./styles/journey.css"

export default function Journey() {
    return (
        <div className="journey-container">

            <div className="journey-left">
                <div className="journey-free">
                    <p><i className="bi bi-star-fill"></i> #1 Free Care four Your Mind</p>
                </div>

                <div className="journey-heading">
                    <h3>Your Mental Health</h3>
                    <h3>Journey Starts Here</h3>
                </div>

                <div className="journey-content">
                    <p>Connect with licensed therapists and mental health <br /> professionals through our secure, easy-to-use platform. Get <br /> the support you deserve, when you need it.</p>
                </div>

                <div className="journey-list">
                    <div className="journey-list-left">
                        <p><i className="bi bi-shield-check"></i>Secure and Private</p>
                        <p><i className="bi bi-clock-fill"></i>24/7 Support</p>
                    </div>
                    <div className="journey-list-right">
                        <p><i className="bi bi-people-fill"></i>Licensed Professionals</p>
                        <p><i className="bi bi-heart-fill"></i>Personalised Care</p>
                    </div>
                </div>

                <div className="journey-buttons">
                    <button><i className="bi bi-download"></i> Download App</button>
                    <button>Learn More</button>
                </div>

            </div>

            <div className="journey-right">
                <img src="/home1.png" alt="" />
            </div>

            <div className="journey-border"></div>

            <div className="journey-rating">
                <p>Trusted by 30,000+ users</p>
                <p><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i> 4.9/5 ratings</p>
            </div>
        </div>
    );
}
