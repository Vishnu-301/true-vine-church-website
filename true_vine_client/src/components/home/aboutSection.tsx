import { Link } from "react-router-dom";

function AboutSection() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About True Vine Church</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">Discover our mission, vision, and the story of our growing faith community</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
                    <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                            True Vine Church was founded on the principle of abiding in Christ and bearing fruit for His kingdom. Since our establishment, we have been committed to creating a welcoming, Christ-centered community where believers can grow deeper in their faith.
                        </p>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            We believe in the transformative power of Scripture and the Holy Spirit's work in our lives. Through worship, teaching, and community service, we aim to reflect Christ's love and compassion in Abuja and beyond.
                        </p>
                        <Link to="/about" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition">
                            Learn More →
                        </Link>
                    </div>
                    <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl p-8 shadow-lg">
                        <div className="space-y-8">
                            <div className="border-l-4 border-blue-600 pl-6">
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h4>
                                <p className="text-gray-700">To lead people into a transformative relationship with Jesus Christ and equip them to impact their world.</p>
                            </div>
                            <div className="border-l-4 border-blue-600 pl-6">
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Our Vision</h4>
                                <p className="text-gray-700">A thriving community of believers living out their faith, reaching the lost, and serving with excellence and compassion.</p>
                            </div>
                            <div className="border-l-4 border-blue-600 pl-6">
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Our Values</h4>
                                <p className="text-gray-700">Biblical truth, authentic community, sacrificial service, and Christ-centered worship.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;