import "./styles/app.css"

export default function App() {
    return (
        <div className="app-container">
            <div className="app-left">
                <img src="/1.png" alt="logo" />
            </div>
            <div className="app-right">
                <div className="app-content">
                    <h4>Get Cuddlemind App</h4>
                    <p>Available on all platforms. Start your mental wellness journey today.</p>
                </div>
                <div className="store-images">
                    <div className="app-playstore">
                        <img src="/playstore.png" alt="playstore" />
                        <p>Get it from Play store</p>
                    </div>
                    <div className="app-appstore">
                        <img src="/appstore.png" alt="appstore" />
                        <p>Available in App store</p>
                    </div>
                </div>
            </div>
        </div>
    )
}