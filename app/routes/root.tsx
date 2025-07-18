import { Outlet, Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import "./styles/root.css";
import Footer from "./footer";
import MobileFooter from "./mobilefooter";

export default function RootLayout() {
    const [showSplash, setShowSplash] = useState(true);
    const logoRef = useRef<HTMLImageElement | null>(null);
    const splashLogoRef = useRef<HTMLImageElement | null>(null);

    useEffect(() => {
        if (!splashLogoRef.current || !logoRef.current) return;

        const splashLogo = splashLogoRef.current;
        const navbarLogo = logoRef.current;

        const splashRect = splashLogo.getBoundingClientRect();
        const navbarRect = navbarLogo.getBoundingClientRect();

        const deltaX = navbarRect.left - splashRect.left;
        const deltaY = navbarRect.top - splashRect.top;
        const scale = navbarRect.width / splashRect.width;

        splashLogo.style.animation = "jump 1s ease-in-out";

        setTimeout(() => {
            splashLogo.style.transition = "transform 1s ease-in-out";
            splashLogo.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(${scale})`;
        }, 1000);

        const timer = setTimeout(() => {
            setShowSplash(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {showSplash && (
                <div className="splash-screen">
                    <img ref={splashLogoRef} src="/logo.png" alt="Logo" className="splash-logo" />
                </div>
            )}

            <div className={`main-layout ${showSplash ? "invisible-behind" : ""}`}>
                <nav className="navbar navbar-expand-lg bg-white shadow-sm py-2">
                    <div className="container-fluid">
                        <img ref={logoRef} src="/logo.png" alt="logo" className="navbar-logo" />

                        <div className="d-flex align-items-center d-lg-none ms-auto">
                            <button className="btn btn-primary rounded-pill px-3 me-2 mobile-btn">
                                Download App
                            </button>
                            <button className="navbar-toggler" type="button">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>

                        <div className="collapse navbar-collapse justify-content-end">
                            <div className="navbar-nav align-items-center gap-3 text-center text-lg-start">
                                <Link className="nav-link" to="/">Home</Link>
                                <Link className="nav-link" to="/about">About</Link>
                                <Link className="nav-link" to="/contact">Contacts and FAQ</Link>
                            </div>
                        </div>

                        <button className="btn btn-primary rounded-pill px-4 ms-5 d-none d-lg-block">
                            Download App
                        </button>
                    </div>
                </nav>

                <main>
                    <Outlet />
                </main>

                <Footer />
                <MobileFooter />
            </div>
        </>
    );
}
