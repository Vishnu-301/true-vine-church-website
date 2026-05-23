import { Link } from "react-router-dom";

function FooterLinks() {
    return (
        <ul className="space-y-2 text-gray-400">
            <li>
                <Link to="/about" className="hover:text-white transition">
                    About Us
                </Link>
            </li>
            <li>
                <Link to="/events" className="hover:text-white transition">
                    Events
                </Link>
            </li>
            <li>
                <Link to="/services" className="hover:text-white transition">
                    Services
                </Link>
            </li>
        </ul>
    );
}

export default FooterLinks;