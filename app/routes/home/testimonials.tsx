import "./styles/testimonials.css";

const testimonials = [
    {
        image: '/emily.png',
        name: 'Emily Johnson',
        quote: 'Their service was outstanding. They ensured I was comfortable and informed every step of the way.',
        star: 5
    },
    {
        image: '/micheal.png',
        name: 'Micheal Roberts',
        quote: 'The support I received was excellent. They truly cared about my needs and exceeded my expectations.',
        star: 5
    },
    {
        image: '/sophia.png',
        name: 'Sophia Martinez',
        quote: 'I felt valued and cared for. Their team made every effort to provide exceptional support and service.',
        star: 4
    }
];

export default function Testimonials() {
    return (
        <div className="test-container">
            <div className="test-headings">
                <h4>Testimonials</h4>
                <h2>What our satisfied and happy clients have to say</h2>
            </div>
            <div className="test-cards">
                {testimonials.map((t, index) => (
                    <div className="test-card" key={index}>
                        <div className="test-user">
                            <img src={t.image} alt={t.name} className="test-img" />
                            <h5 className="test-name">{t.name}</h5>
                        </div>
                        <p className="test-quote">"{t.quote}"</p>
                        <div className="test-stars">
                            {[...Array(t.star)].map((_, i) => (
                                <i className="bi bi-star-fill" key={i}></i>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
