import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import "./styles/root.css";
import Footer from "./footer";
import MobileFooter from "./mobilefooter";

export default function RootLayout() {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const toggleNavbar = () => setIsCollapsed(!isCollapsed);

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-white shadow-sm py-2">
                <div className="container-fluid">
                    {/* Logo */}
                    <img src="/logo.png" alt="logo" className="navbar-logo" />

                    {/* Mobile Controls */}
                    <div className="d-flex align-items-center d-lg-none ms-auto">
                        <button className="btn btn-primary rounded-pill px-3 me-2 mobile-btn">
                            Download App
                        </button>
                        <button
                            className="navbar-toggler"
                            type="button"
                            onClick={toggleNavbar}
                            aria-controls="navbarNavAltMarkup"
                            aria-expanded={!isCollapsed}
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>

                    {/* Nav Links */}
                    <div
                        className={`collapse navbar-collapse justify-content-end ${isCollapsed ? "" : "show"
                            }`}
                        id="navbarNavAltMarkup"
                    >
                        <div className="navbar-nav align-items-center gap-3 text-center text-lg-start">
                            <Link className="nav-link" to="/">Home</Link>
                            <Link className="nav-link" to="/about">About</Link>
                            <Link className="nav-link" to="/contact">Contacts and FAQ</Link>
                        </div>
                    </div>

                    {/* Desktop Button */}
                    <button className="btn btn-primary rounded-pill px-4 ms-5 d-none d-lg-block">
                        Download App
                    </button>
                </div>
            </nav>

            <main className="px-4 pt-4">
                <Outlet />
            </main>

            <Footer/>
            <MobileFooter/>
        </>
    );
}
