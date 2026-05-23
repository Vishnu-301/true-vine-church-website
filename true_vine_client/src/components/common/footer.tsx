import FooterBrand from "../footer/footerBrand";
import FooterColumn from "../footer/footerColumn";
import FooterLinks from "../footer/footerLinks";
import FooterContact from "../footer/footerContact";
import FooterSocial from "../footer/footerSocial";
import FooterBottom from "../footer/footerBottom";

function Footer() {
    return (
        <footer className="bg-blue-950 text-white py-16">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-10">
                <FooterBrand />
                <FooterColumn title="Quick Links">
                    <FooterLinks />
                </FooterColumn>
                <FooterColumn title="Contact">
                    <FooterContact />
                </FooterColumn>
                <FooterColumn title="Follow Us">
                    <FooterSocial />
                </FooterColumn>
            </div>
            <FooterBottom />
        </footer>
    );
}

export default Footer;