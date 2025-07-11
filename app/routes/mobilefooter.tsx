import React from "react";
import { Link } from "react-router-dom";
import "./styles/mobilefooter.css";

export default function MobileFooter() {
    return (
        <footer className="mobile-footer d-block d-md-none">
            {/* Logo and Links Row */}
            <div className="mobile-footer-top-row">
                <div className="footer-logo">
                    <img src="/footer.png" alt="CuddleMind Logo" />
                </div>
                <div className="footer-links">
                    <Link to="/about">About</Link>
                    <Link to="/help">Help Center</Link>
                    <Link to="/privacy">Privacy Policy</Link>
                    <Link to="/blogs">Blogs</Link>
                    <Link to="/contact">Contact & FAQs</Link>
                    <Link to="/terms">Terms of Service</Link>
                </div>
            </div>

            {/* Left Text */}
            <div className="footer-left-text">
                <h2>
                    Speak with one of our health experts to discover how <br />
                    Cuddle mind can support your wellness journey.
                </h2>
            </div>

            {/* Bottom Row: Right Text, Icons, Copy */}
            {/* Bottom Row: Left side = icons + copy, Right side = text + button */}
            <div className="footer-bottom-row">

                <div className="footer-left-group">
                    <div className="footer-icons">
                        <i className="bi bi-twitter-x"></i>
                        <i className="bi bi-facebook"></i>
                        <i className="bi bi-linkedin"></i>
                    </div>
                    <div className="footer-copy">
                        © 2024 Healix. All Rights Reserved.
                    </div>
                </div>

                <div className="footer-right-text">
                    <p>
                        Start your health journey with Cuddle mind today. <br />
                        Your health, your data, your power.
                    </p>
                    <button className="btn btn-dark rounded-pill">
                        Get Started For Free
                    </button>
                </div>
            </div>

        </footer>
    );
}
