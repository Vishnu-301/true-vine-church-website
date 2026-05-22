import './heroSection.css';

function HeroSection() {
    return (
        <section className="hero h-screen flex items-center relative">
            <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/50 to-black/70"></div>

            <div className="relative max-w-5xl mx-auto px-6 text-center text-white z-10">
                <h2 className="text-6xl md:text-7xl font-bold mb-4 tracking-tight">
                    TRUE VINE
                </h2>
                <p className="text-2xl md:text-3xl mb-8 text-blue-100">
                    "I am the vine; you are the branches"
                </p>
                <p className="text-xl max-w-lg mx-auto mb-10">
                    Abiding in Christ • Growing in Faith • Bearing Fruit Together
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="#" className="bg-white text-blue-700 hover:bg-blue-50 px-10 py-4 rounded-full text-lg font-semibold">
                        Watch Live Service
                    </a>
                    <a href="#" className="border-2 border-white hover:bg-white/20 px-10 py-4 rounded-full text-lg font-semibold">
                        Visit This Sunday
                    </a>
                </div>

                <div className="mt-16 flex justify-center gap-8 text-sm">
                    <div>
                        <i className="fas fa-clock text-blue-300"></i>
                        <p>Sunday Service • 9:00 AM</p>
                    </div>
                    <div>
                        <i className="fas fa-map-marker-alt text-blue-300"></i>
                        <p>FCT Abuja, Nigeria</p>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white">
                <i className="fas fa-chevron-down text-3xl animate-bounce"></i>
            </div>
        </section>
    );
}

export default HeroSection;