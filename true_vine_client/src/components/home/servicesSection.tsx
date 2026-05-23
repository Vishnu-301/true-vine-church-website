import { Link } from "react-router-dom";

function ServicesSection() {
    const services = [
        {
            day: "Sunday Morning",
            time: "9:00 AM - 11:30 AM",
            description: "Join us for our main worship service featuring passionate worship, inspiring teaching, and a welcoming community.",
            type: "Main Service"
        },
        {
            day: "Wednesday Evening",
            time: "7:00 PM - 8:30 PM",
            description: "A more intimate prayer and worship experience focused on deepening our connection with God through prayer and praise.",
            type: "Prayer & Worship"
        },
        {
            day: "Sunday Evening",
            time: "5:00 PM - 6:30 PM",
            description: "A contemporary service perfect for young adults, families, and those seeking a more relaxed worship atmosphere.",
            type: "Contemporary Service"
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">Find a service that fits your schedule and join us in worship</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {services.map((service, index) => (
                        <div key={index} className="bg-linear-to-br from-blue-600 to-blue-700 rounded-xl shadow-lg p-8 text-white hover:shadow-xl transition-shadow duration-300">
                            <div className="inline-block bg-white/20 px-4 py-1 rounded-full mb-4">
                                <p className="text-sm font-semibold">{service.type}</p>
                            </div>
                            <h3 className="text-2xl font-bold mb-2">{service.day}</h3>
                            <p className="text-blue-100 text-lg font-semibold mb-4">{service.time}</p>
                            <p className="text-blue-50 leading-relaxed">{service.description}</p>
                        </div>
                    ))}
                </div>

                <div className="bg-blue-50 rounded-xl p-8 mb-12 text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Visit Us in Person</h3>
                    <p className="text-gray-700 mb-4">True Vine Church • FCT Abuja, Nigeria</p>
                    <p className="text-gray-600 mb-6">We'd love to welcome you to our community of faith. Come as you are and experience the warmth of our church family.</p>
                    <Link to="/services" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition">
                        View Service Details →
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default ServicesSection;