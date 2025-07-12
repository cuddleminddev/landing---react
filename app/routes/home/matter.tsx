import "./styles/matter.css"

export default function Matter() {
    return (
        <div className="matter-container">
            <div className="matter-heading">
                <h3>Mental Health Matters</h3>
            </div>

            <div className="matter-cards">
                <div>
                    <h2><i className="bi bi-heart-pulse"></i></h2>
                    <h3>1 in 4</h3>
                    <p>People experience mental health issues each year.</p>
                </div>
                <div>
                    <h2><i className="bi bi-person"></i></h2>
                    <h3>75%</h3>
                    <p>Mental health issues start at the age of 20.</p>
                </div>
                <div>
                    <h2><i className="bi bi-shield-plus"></i></h2>
                    <h3>90%</h3>
                    <p>Recovery with proper treatment and support.</p>
                </div>
                <div>
                    <h2><i className="bi bi-people"></i></h2>
                    <h3>900M</h3>
                    <p>People world wide live mental disorders.</p>
                </div>
            </div>
        </div>
    )
}