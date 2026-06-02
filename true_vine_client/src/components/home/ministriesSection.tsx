import { Link } from "react-router-dom";

function MinistriesSection() {
    const ministries = [
        {
            icon: "fa-users",
            title: "Small Groups",
            description: "Connect in intimate settings to study Scripture, pray together, and build meaningful relationships with other believers."
        },
        {
            icon: "fa-children",
            title: "Children's Ministry",
            description: "Nurturing the next generation with Bible stories, interactive lessons, and a safe, loving environment to grow in faith."
        },
        {
            icon: "fa-graduation-cap",
            title: "Youth Ministry",
            description: "Discipling young people to live boldly for Christ through worship, teaching, and authentic community."
        },
        {
            icon: "fa-heart-hands",
            title: "Community Outreach",
            description: "Serving our city through compassionate outreach, feeding programs, and care for the vulnerable and marginalized."
        },
        {
            icon: "fa-music",
            title: "Worship Team",
            description: "Join our passionate team leading worship experiences that point people toward the heart of God."
        },
        {
            icon: "fa-hands-praying",
            title: "Prayer Ministry",
            description: "A dedicated group committed to interceding for our church, city, and nation with faith and persistence."
        }
    ];

    return (
        <section className="py-20 bg-linear-to-b from-blue-50 to-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Ministries</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">Discover how you can get involved and grow in your faith journey</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {ministries.map((ministry, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-8 border-b-4 border-blue-600">
                            <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                <i className={`fas ${ministry.icon} text-blue-600 text-2xl`}></i>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{ministry.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{ministry.description}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <Link to="/services" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition">
                        Explore All Ministries →
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default MinistriesSection;