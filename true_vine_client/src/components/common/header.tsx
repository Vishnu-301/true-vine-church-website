import { Link } from "react-router-dom";
import Navbar from "./navbar";
import whitecross from "../../assets/icons/corss-white.svg";

function Header() {
    return (
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo/Brand */}
                <Link to="/" className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-linear-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                        <img src={whitecross} alt={whitecross} />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-gray-900">True Vine</h1>
                        <p className="text-xs text-gray-500 -mt-1">Church</p>
                    </div>
                </Link>

                {/* Navigation */}
                <Navbar />

                {/* Action Buttons */}
                <div className="flex items-center gap-4">
                    <Link to="/connect" className="text-gray-700 hover:text-blue-600 font-medium text-sm transition">
                        Sign In
                    </Link>
                    <Link to="/connect" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium text-sm transition">
                        Join Us
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;