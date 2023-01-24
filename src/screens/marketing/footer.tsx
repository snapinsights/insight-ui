import React from "react";
import { useNavigate } from "react-router";
import Logo from "../../components/elements/logo";

import "./footer.scss";

const Footer: React.FC = () => {
    const navigate = useNavigate();

    return (
        <footer>
            <div>
            <aside>
                <h4>Product</h4>
                <ul>
                    <li><a href="#">How it works</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Try for free</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
            </aside>
            <aside>
                <h4>Company</h4>
                <ul>
                    <li><a href="/contact-us">Contact us</a></li>
                    <li><a href="#">Privacy policy</a></li>
                    <li><a href="#">Terms of service</a></li>
                </ul>
            </aside>
            <aside>
                <h4>Resources</h4>
                <ul>
                    <li><a href="#">Documentation</a></li>
                    <li><a href="/contact-us/support">Support</a></li>
                </ul>
            </aside>
            <aside>
                <Logo />
                <p>We would love to learn more about your organization and show you how snap insights can provide value to it.</p><p><a href="/contact-us/demo">Contact us</a> for a demo and we'll get it scheduled, in a snap!</p>
            </aside>
            </div>
            <div>
                <span>&copy; {new Date().getFullYear()} &mdash; UPNXT</span>
                <span>Made with ❤️ in Kansas City</span>
            </div>
        </footer>
    );
};

export default Footer;
