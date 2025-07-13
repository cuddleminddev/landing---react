import "./styles/quotes.css"

export default function Quotes() {
    return (
        <div className="quotes-container">
            <div className="quotes-heading">
                <h3>Words of Encouragement</h3>
            </div>

            <div className="quotes-cards">
                <div>
                    <p className="quote">"You are not your illness. You have an individual story to tell.You have a name, a history, a personality.
                        Staying yourself is part of the battle."</p>
                    <p>- Julian Seifter</p>
                </div>
                <div>
                    <p className="quote">"Mental health is not a destination, but a process. It's about how you drive, not where you're going."</p>
                    <p>- Noam Shpancerr</p>
                </div>
                <div>
                    <p className="quote">"Healing takes time, and asking for help is a courageous step."</p>
                    <p>- Mariska Hargitay</p>
                </div>
                <div>
                    <p className="quote">"Your present circumstances don't determine where you can go; they merely determine where you start."</p>
                    <p>- Nido Qubein</p>
                </div>
            </div>
        </div>
    )
}