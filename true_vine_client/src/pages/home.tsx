import { useState, useEffect } from "react";
import Header from "../components/common/header";
import Footer from "../components/common/footer";
import HeroSection from "../components/home/heroSection";
import WelcomeSection from "../components/home/welcomeSection";
import AboutSection from "../components/home/aboutSection";
import ServicesSection from "../components/home/servicesSection";
import SubscriptionBox from "../components/home/subscriptionBox";

function HomePage() {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        // Show popup after 3 seconds
        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Header />
            <main className="mx-auto relative">
                <HeroSection />
                <WelcomeSection />
                <AboutSection />
                <ServicesSection />
                <SubscriptionBox />

                {/* Mini Popup */}
                {showPopup && (
                    <div className="fixed bottom-6 right-6 z-50 animate-slide-up">
                        <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-sm border-l-4 border-blue-600 relative">
                            <button 
                                onClick={() => setShowPopup(false)}
                                className="absolute top-2 right-4 text-2xl text-gray-400 hover:text-gray-600 focus:outline-none"
                            >
                                &times;
                            </button>
                            <h3 className="text-xl font-bold text-gray-900 mb-2 mt-1">Welcome to True Vine!</h3>
                            <p className="text-gray-600 text-sm mb-4">
                                We are thrilled to have you here. Don't forget to check out our upcoming events and connect with us!
                            </p>
                            <a href="/events" className="inline-block bg-blue-100 text-blue-700 font-semibold px-4 py-2 rounded-lg text-sm hover:bg-blue-200 transition">
                                View Events
                            </a>
                        </div>
                    </div>
                )}
            </main>
            <Footer />
        </>
    );
}

export default HomePage;