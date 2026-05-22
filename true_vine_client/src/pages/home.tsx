import Header from "../components/common/header";
import Footer from "../components/common/footer";
import HeroSection from "../components/home/heroSection";
import WelcomeSection from "../components/home/welcomeSection";
import AboutSection from "../components/home/aboutSection";
import MinistriesSection from "../components/home/ministriesSection";
import ServicesSection from "../components/home/servicesSection";

function HomePage() {
    return (
        <>
            <Header />
            <main className="mx-auto">
                <HeroSection />
                <WelcomeSection />
                <AboutSection />
                <MinistriesSection />
                <ServicesSection />
            </main>
            <Footer />
        </>
    );
}

export default HomePage;