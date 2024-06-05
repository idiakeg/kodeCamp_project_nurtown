import "./Footer.css";
import logo from "../../assets/footer_logo.svg";
import { links } from "../../utils";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className="wrapper footer_container">
                <div className="footer_logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="footer_information">
                    <p className="footer_info_head">Information</p>
                    {links.map((item, index) => (
                        <Link to={item.path} key={index}>
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div className="footer_contacts">
                    <p className="footer_contact_head">Contacts</p>
                    <div className="footer_contact_info">
                        <i className="fa-solid fa-location-dot"></i>
                        <span>1234 Sample Street Austin Texas 78704</span>
                    </div>
                    <div className="footer_contact_info">
                        <i className="fa-solid fa-phone"></i>
                        <span>512.333.2222</span>
                    </div>
                    <div className="footer_contact_info">
                        <i className="fa-regular fa-envelope"></i>
                        <span>sampleemail@gmail.com</span>
                    </div>
                </div>
                <div className="footer_social_media">
                    <p>Social Media</p>
                    <div className="footer_sm_icons">
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-linkedin"></i>
                        <i className="fa-brands fa-pinterest-p"></i>
                    </div>
                </div>
            </div>
            <div className="footer_copyright">
                &copy; 2021 All Rights Reserved
            </div>
        </footer>
    );
};

export default Footer;
