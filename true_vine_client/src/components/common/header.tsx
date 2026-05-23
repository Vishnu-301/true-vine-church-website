import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import whitecross from "../../assets/icons/corss-white.svg";

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo/Brand */}
                <Link to="/" className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-linear-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                        <img src={whitecross} alt="cross" />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-gray-900">True Vine</h1>
                        <p className="text-xs text-gray-500 -mt-1">Church</p>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <Navbar />

                {/* Action Buttons & Mobile Toggle */}
                <div className="flex items-center gap-4">
                    <Link to="/connect" className="hidden sm:inline-flex bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition">
                        Join Us
                    </Link>
                    
                    {/* Mobile Menu Button */}
                    <button 
                        className="lg:hidden p-2 text-gray-600 hover:text-blue-600 focus:outline-none"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-xl py-4 px-6 flex flex-col gap-4 animate-slide-up">
                    <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                    <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
                    <Link to="/services" className="text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
                    <Link to="/events" className="text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Events</Link>
                    <Link to="/connect" className="text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Connect</Link>
                    <Link to="/connect" className="sm:hidden bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium text-center transition" onClick={() => setIsMobileMenuOpen(false)}>
                        Join Us
                    </Link>
                </div>
            )}
        </header>
    );
}

export default Header;