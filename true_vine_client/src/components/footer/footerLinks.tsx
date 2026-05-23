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
                <a href="#" className="hover:text-white transition">
                    Sermons
                </a>
            </li>
            <li>
                <a href="#" className="hover:text-white transition">
                    Give
                </a>
            </li>
        </ul>
    );
}

export default FooterLinks;