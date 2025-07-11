import "./styles/count.css"

export default function Count() {
    return (
        <div className="count-container">
            <div className="count-counts">
                <div className="count-doctors">
                    <h4>100+</h4>
                    <h5>Qualified Doctors</h5>
                </div>
                <div className="count-support">
                    <h4>24/7</h4>
                    <h5>Support Available</h5>
                </div>
                <div className="count-users">
                    <h4>100+</h4>
                    <h5>Thriving Users</h5>
                </div>
                <div className="count-doctors">
                    <h4>98%</h4>
                    <h5>Satisfaction Rate</h5>
                </div>
            </div>

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