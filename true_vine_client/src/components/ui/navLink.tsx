import { Link } from "react-router-dom";

interface NavLinkProps {
    to: string;
    name: string;
}

function NavLink({ to, name }: NavLinkProps) {
    return (
        <Link 
            to={to} 
            className="text-gray-700 hover:text-blue-600 font-medium text-sm transition-colors duration-200 relative group"
        >
            {name}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-200"></span>
        </Link>
    );
}

export default NavLink;