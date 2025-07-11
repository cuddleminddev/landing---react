import "./styles/footer.css";

export default function Footer() {
    return (
        <footer className="desktop-footer d-none d-md-block">
            <div className="container-fluid">
                {/* Top Section */}
                <div className="top">
                    <div className="left">
                        <h2>
                            Speak with one of our health <br /> experts to discover how Cuddle <br /> mind can
                            support your wellness <br /> journey.
                        </h2>
                    </div>
                    <div className="right">
                        <p>
                            Start your health journey with Cuddle mind today. <br />
                            Your health, your data, your power.
                        </p>
                        <button className="btn">Get Started For Free</button>
                    </div>
                </div>

                <div className="divider"></div>

                {/* Bottom Section */}
                <div className="bottom">
                    <div className="left">
                        <div className="img">
                            <img src="/footer.png" alt="logo" />
                        </div>
                        <div className="copy">
                            Copyright {new Date().getFullYear()} Healix. All Rights Reserved.
                        </div>
                    </div>
                    <div className="right">
                        <div className="icons">
                            <i className="bi bi-facebook"></i>
                            <i className="bi bi-twitter-x"></i>
                            <i className="bi bi-linkedin"></i>
                        </div>
                        <div className="nav">
                            <div className="nav1">
                                <a href="/about">About</a>
                                <a href="/help">Help Center</a>
                                <a href="/privacy">Privacy Policy</a>
                            </div>
                            <div className="nav2">
                                <a href="/blogs">Blogs</a>
                                <a href="/contact">Contact & FAQs</a>
                                <a href="/terms">Terms of Service</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
