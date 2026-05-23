import NavLink from "../ui/navLink";

function Navbar() {
    return (
        <nav className="hidden lg:flex items-center gap-12 flex-1 justify-center">
            <NavLink to="/" name="Home" />
            <NavLink to="/about" name="About" />
            <NavLink to="/services" name="Services" />
            <NavLink to="/events" name="Events" />
            <NavLink to="/connect" name="Connect" />
        </nav>
    );
}

export default Navbar;