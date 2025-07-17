import React from "react";
import { Link } from "react-router-dom";
import "./styles/mobilefooter.css";

export default function MobileFooter() {
    return (
        <footer className="mobile-footer d-block d-md-none">
            <div className="footer-container">
                <div className="footer-top">
                    <div className="footer-top-left">
                        <p className="footer-quote">
                            Speak with one of our health experts to discover how Cuddle mind can support your wellness journey.
                        </p>
                    </div>

                    <div className="footer-top-right">
                        <p className="footer-message">
                            Start your health journey with Cuddle mind today. Your health, your data, your power.
                        </p>
                        <button className="btn btn-dark rounded-pill footer-btn">
                            Get Started For Free
                        </button>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-bottom-right">
                        <div className="footer-logo">
                            <img src="/footer.png" alt="CuddleMind Logo" />
                            <p className="footer-copy">
                                © 2024 Healix. All Rights Reserved.
                            </p>
                        </div>
                    </div>

                    <div className="footer-bottom-left">
                        <div className="footer-icons">
                            <i className="bi bi-twitter-x"></i>
                            <i className="bi bi-facebook"></i>
                            <i className="bi bi-linkedin"></i>
                        </div>
                        
                        <div className="footer-links">
                            <Link to="/about">About</Link>
                            <Link to="/help">Help Center</Link>
                            <Link to="/privacy">Privacy Policy</Link>
                            <Link to="/blogs">Blogs</Link>
                            <Link to="/contact">Contact and FAQs</Link>
                            <Link to="/terms">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
