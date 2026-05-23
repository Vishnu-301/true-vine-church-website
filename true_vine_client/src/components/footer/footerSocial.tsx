function FooterSocial() {
    return (
        <div className="flex gap-4 text-2xl">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-pink-400 transition">
                <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-red-500 transition">
                <i className="fab fa-youtube"></i>
            </a>
        </div>
    );
}

export default FooterSocial;