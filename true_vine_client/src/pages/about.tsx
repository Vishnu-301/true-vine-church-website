import Header from "../components/common/header";
import Footer from "../components/common/footer";
import { Link } from "react-router-dom";

function AboutPage() {
    return (
        <>
            <Header />
            <main className="mx-auto">
                {/* Hero Section */}
                <section className="bg-linear-to-r from-blue-600 to-blue-700 text-white py-20">
                    <div className="max-w-6xl mx-auto px-6">
                        <h1 className="text-5xl md:text-6xl font-bold mb-4">About True Vine Church</h1>
                        <p className="text-xl text-blue-100">Discover our mission, vision, and the story of our thriving faith community in Abuja</p>
                    </div>
                </section>

                {/* Our Story Section */}
                <section className="py-20 bg-white">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
                                <p className="text-gray-700 mb-4 leading-relaxed text-lg">
                                    True Vine Church was founded on the principle of abiding in Christ and bearing fruit for His kingdom. Rooted in the Scripture "I am the vine; you are the branches," we have committed ourselves to nurturing a Christ-centered community in Abuja.
                                </p>
                                <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                                    Since our establishment, we have grown into a vibrant fellowship of believers dedicated to worship, authentic discipleship, and meaningful service to our city. We believe in the transformative power of God's Word and the Holy Spirit's work in every believer's life.
                                </p>
                                <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                                    Whether you're seeking spiritual growth, a welcoming community, or a place to serve, True Vine Church is here to walk alongside you on your faith journey.
                                </p>
                            </div>
                            <div className="bg-linear-to-br from-blue-50 to-blue-100 rounded-xl p-10 shadow-lg">
                                <div className="space-y-8">
                                    <div className="border-l-4 border-blue-600 pl-6">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h3>
                                        <p className="text-gray-700 text-lg">To lead people into a transformative relationship with Jesus Christ and equip them to impact their world with faith, hope, and love.</p>
                                    </div>
                                    <div className="border-l-4 border-blue-600 pl-6">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Vision</h3>
                                        <p className="text-gray-700 text-lg">A thriving community of believers living out their faith authentically, reaching the lost, serving with excellence, and transforming Abuja with Gospel hope.</p>
                                    </div>
                                    <div className="border-l-4 border-blue-600 pl-6">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Core Values</h3>
                                        <p className="text-gray-700 text-lg">Biblical truth, authentic community, sacrificial service, Christ-centered worship, and transparent accountability.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Church Details Section */}
                <section className="py-20 bg-blue-50">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Our Church</h2>
                            <p className="text-xl text-gray-600">Key information about True Vine Ministry</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                            {/* Location */}
                            <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-blue-600 hover:shadow-lg transition">
                                <i className="fas fa-map-marker-alt text-blue-600 text-4xl mb-4"></i>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">Location</h3>
                                <p className="text-gray-700 font-semibold">FCT Abuja, Nigeria</p>
                                <p className="text-gray-600 mt-2">Centrally located in the heart of Abuja for convenient access and community impact</p>
                            </div>

                            {/* Worship Schedule */}
                            <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-blue-600 hover:shadow-lg transition">
                                <i className="fas fa-clock text-blue-600 text-4xl mb-4"></i>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">Sunday Service</h3>
                                <p className="text-gray-700 font-semibold">9:00 AM - 11:00 AM</p>
                                <p className="text-gray-600 mt-2">Worship, biblical teaching, prayer, and community connection every Sunday</p>
                            </div>

                            {/* Leadership */}
                            <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-blue-600 hover:shadow-lg transition">
                                <i className="fas fa-users text-blue-600 text-4xl mb-4"></i>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">Leadership</h3>
                                <p className="text-gray-700 font-semibold">Dedicated Pastoral Team</p>
                                <p className="text-gray-600 mt-2">Experienced, Christ-centered leaders committed to spiritual growth and ministry excellence</p>
                            </div>

                            {/* Community */}
                            <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-blue-600 hover:shadow-lg transition">
                                <i className="fas fa-heart text-blue-600 text-4xl mb-4"></i>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">Community</h3>
                                <p className="text-gray-700 font-semibold">Growing Fellowship</p>
                                <p className="text-gray-600 mt-2">A welcoming, diverse congregation united in faith, prayer, and kingdom service</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Join Us Section */}
                <section className="py-20 bg-white">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Join True Vine?</h2>
                            <p className="text-xl text-gray-600">Discover what makes our community special</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Card 1 */}
                            <div className="bg-linear-to-br from-blue-50 to-white rounded-xl shadow-md p-8 border-l-4 border-blue-600 hover:shadow-lg transition">
                                <i className="fas fa-book-open text-blue-600 text-4xl mb-4"></i>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">Biblical Teaching</h3>
                                <p className="text-gray-700">Expository, relevant sermons that anchor faith in Scripture and apply truth to everyday life</p>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-linear-to-br from-blue-50 to-white rounded-xl shadow-md p-8 border-l-4 border-blue-600 hover:shadow-lg transition">
                                <i className="fas fa-handshake text-blue-600 text-4xl mb-4"></i>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">Authentic Community</h3>
                                <p className="text-gray-700">Real relationships, genuine fellowship, and a place where you truly belong and are known</p>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-linear-to-br from-blue-50 to-white rounded-xl shadow-md p-8 border-l-4 border-blue-600 hover:shadow-lg transition">
                                <i className="fas fa-cross text-blue-600 text-4xl mb-4"></i>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">Life-Changing Worship</h3>
                                <p className="text-gray-700">Contemporary worship experiences that lead you closer to Jesus and transform your heart</p>
                            </div>

                            {/* Card 4 */}
                            <div className="bg-linear-to-br from-blue-50 to-white rounded-xl shadow-md p-8 border-l-4 border-blue-600 hover:shadow-lg transition">
                                <i className="fas fa-network-wired text-blue-600 text-4xl mb-4"></i>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">Growth Groups</h3>
                                <p className="text-gray-700">Small groups for discipleship, prayer, and accountability in a supportive environment</p>
                            </div>

                            {/* Card 5 */}
                            <div className="bg-linear-to-br from-blue-50 to-white rounded-xl shadow-md p-8 border-l-4 border-blue-600 hover:shadow-lg transition">
                                <i className="fas fa-hands-helping text-blue-600 text-4xl mb-4"></i>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">Active Ministries</h3>
                                <p className="text-gray-700">Multiple ways to serve, grow spiritually, and make a lasting impact in our city</p>
                            </div>

                            {/* Card 6 */}
                            <div className="bg-linear-to-br from-blue-50 to-white rounded-xl shadow-md p-8 border-l-4 border-blue-600 hover:shadow-lg transition">
                                <i className="fas fa-child text-blue-600 text-4xl mb-4"></i>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">Family-Friendly</h3>
                                <p className="text-gray-700">Children's programs, youth ministry, and family events to involve everyone in the faith journey</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 bg-linear-to-r from-blue-600 to-blue-700 text-white">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <h2 className="text-4xl font-bold mb-6">Ready to Join Our Community?</h2>
                        <p className="text-xl text-blue-100 mb-8">Visit us this Sunday and experience the True Vine difference for yourself</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/" className="bg-white text-blue-600 hover:bg-blue-50 px-10 py-4 rounded-lg font-semibold transition">
                                Watch Live Service
                            </Link>
                            <Link to="/connect" className="border-2 border-white hover:bg-white/20 px-10 py-4 rounded-lg font-semibold transition">
                                Get in Touch
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default AboutPage;