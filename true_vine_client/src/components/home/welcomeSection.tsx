function WelcomeSection() {
    return (
        <section className="py-16 bg-linear-to-b from-white to-blue-50">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Welcome to True Vine
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        A community of believers growing together in faith, worship, and service
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {/* Card 1 */}
                    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-8 border-t-4 border-blue-600">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                            <i className="fas fa-hands-praying text-blue-600 text-2xl"></i>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Community</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Join a vibrant community of believers dedicated to growing together, supporting one another, and living out our faith in everyday life.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-8 border-t-4 border-blue-600">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                            <i className="fas fa-book text-blue-600 text-2xl"></i>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Biblical Teaching</h3>
                        <p className="text-gray-600 leading-relaxed">
                            We believe in the authority of Scripture and provide solid, relevant teaching that transforms hearts, renews minds, and guides our faith journey.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-8 border-t-4 border-blue-600">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                            <i className="fas fa-heart text-blue-600 text-2xl"></i>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Service & Impact</h3>
                        <p className="text-gray-600 leading-relaxed">
                            We are called to serve others and make a lasting impact in our city. Through various ministries, we reach out with compassion and hope.
                        </p>
                    </div>
                </div>

                {/* Service Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {/* Sunday Service */}
                    <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-blue-600">
                        <i className="fas fa-clock text-blue-600 text-3xl mb-3"></i>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">Sunday Service</h4>
                        <p className="text-gray-600 text-sm">9:00 AM - 11:00 AM</p>
                        <p className="text-gray-500 text-sm">Worship, Teaching & Prayer</p>
                    </div>

                    {/* Location */}
                    <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-blue-600">
                        <i className="fas fa-map-marker-alt text-blue-600 text-3xl mb-3"></i>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">Location</h4>
                        <p className="text-gray-600 text-sm">FCT Abuja, Nigeria</p>
                        <p className="text-gray-500 text-sm">Easy to find, easy to visit</p>
                    </div>

                    {/* Ministries */}
                    <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-blue-600">
                        <i className="fas fa-users text-blue-600 text-3xl mb-3"></i>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">Ministries</h4>
                        <p className="text-gray-600 text-sm">Youth, Outreach, Growth Groups</p>
                        <p className="text-gray-500 text-sm">Something for everyone</p>
                    </div>

                    {/* Events */}
                    <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-blue-600">
                        <i className="fas fa-calendar text-blue-600 text-3xl mb-3"></i>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">Events</h4>
                        <p className="text-gray-600 text-sm">Special programs throughout the year</p>
                        <p className="text-gray-500 text-sm">Grow, connect & celebrate</p>
                    </div>
                </div>

                {/* Mission Statement */}
                <div className="bg-blue-600 text-white rounded-xl p-10 text-center mb-8">
                    <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                    <p className="text-lg leading-relaxed max-w-3xl mx-auto">
                        To be a community of believers wholly devoted to Jesus Christ, making disciples who worship authentically, grow spiritually, and serve sacrificially in our city and beyond.
                    </p>
                </div>

                {/* Tagline */}
                <div className="text-center">
                    <p className="text-lg text-gray-700 italic font-light">
                        "I am the vine; you are the branches. If you remain in me and I in you, you will bear much fruit." — John 15:5
                    </p>
                </div>
            </div>
        </section>
    );
}

export default WelcomeSection;