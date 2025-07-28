import { Outlet, Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import "./styles/root.css";
import Footer from "./footer";
import MobileFooter from "./mobilefooter";
import ScrollToTop from "./scrolltotop";

export default function RootLayout() {
    const [showSplash, setShowSplash] = useState(true);
    const logoRef = useRef<HTMLImageElement | null>(null);
    const splashLogoRef = useRef<HTMLImageElement | null>(null);
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    useEffect(() => {
        const splashLogo = splashLogoRef.current;
        const navbarLogo = logoRef.current;
        if (!splashLogo || !navbarLogo) return;

        const animateSplash = () => {
            splashLogo.style.transform = `translate(0, 0) scale(1) rotate(0deg)`;
            splashLogo.style.transition = "none";
            splashLogo.style.animation = "jump 1s ease-in-out";

            setTimeout(() => {
                const splashRect = splashLogo.getBoundingClientRect();
                const navbarRect = navbarLogo.getBoundingClientRect();

                const deltaX = navbarRect.left - splashRect.left;
                const deltaY = navbarRect.top - splashRect.top;
                const scale = navbarRect.width / splashRect.width;

                splashLogo.classList.add("fly");
                splashLogo.style.transition = "transform 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55)";
                splashLogo.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(${scale}) rotate(2deg)`;
            }, 1000);

            setTimeout(() => {
                const splash = splashLogo.closest(".splash-screen");
                if (splash) splash.classList.add("fade-out");
            }, 2200);

            const timer = setTimeout(() => {
                setShowSplash(false);
            }, 3000);

            return () => clearTimeout(timer);
        };

        if (splashLogo.complete) {
            requestAnimationFrame(animateSplash);
        } else {
            splashLogo.addEventListener("load", () => requestAnimationFrame(animateSplash));
        }
    }, []);

    return (
        <>
            {showSplash && (
                <div className="splash-screen">
                    <img ref={splashLogoRef} src="/logo.png" alt="Logo" className="splash-logo" />
                    <div className="splash-message">
                        Loading
                        <span className="loading-dots">
                            <span></span><span></span><span></span>
                        </span>
                    </div>
                </div>
            )}

            <div className={`main-layout ${showSplash ? "invisible-behind" : ""}`}>
                <nav className="navbar navbar-expand-lg bg-white shadow-sm py-2">
                    <div className="container-fluid">
                        <img ref={logoRef} src="/1.png" alt="logo" className="navbar-logo" />

                        <div className="d-flex align-items-center d-lg-none ms-auto">
                            {/* <button className="btn btn-primary rounded-pill px-3 me-2 mobile-btn">
                                Download App
                            </button> */}
                            <button className="navbar-toggler" type="button" onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>

                        <div className={`collapse navbar-collapse justify-content-end ${isNavbarOpen ? "show" : ""}`}>
                            <div className="navbar-nav align-items-center gap-3 text-center text-lg-start">
                                <Link className="nav-link" to="/" onClick={() => setIsNavbarOpen(false)}>Home</Link>
                                <Link className="nav-link" to="/about" onClick={() => setIsNavbarOpen(false)}>About</Link>
                                <Link className="nav-link" to="/contact" onClick={() => setIsNavbarOpen(false)}>Contacts and FAQ</Link>
                            </div>
                        </div>

                        {/* <button className="btn btn-primary rounded-pill px-4 ms-5 d-none d-lg-block">
                            Download App
                        </button> */}
                    </div>
                </nav>

                <main>
                    <ScrollToTop />
                    <Outlet />
                </main>

                <Footer />
                <MobileFooter />
            </div>
        </>
    );
}
