import StatsGrid from "./statsgrid";
import "./styles/count.css"

export default function Count() {
    const stats = [
        { value: "100+", label: "Qualified Doctors" },
        { value: "24/7", label: "Support Available" },
        { value: "100+", label: "Thriving Users" },
        { value: "98%", label: "Satisfaction Rate" },
    ];

    return (
        <div className="count-container">
            <StatsGrid stats={stats} />

            <div className="counts-img">
                <img src="/home3.png" alt="" />
                <p>Receive tailored health tips and <br />
                    alerts based on your individual <br />
                    data trends, helping you make <br />
                    proactive adjustments</p>
            </div>
        </div>
    )
}