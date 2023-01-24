import React from "react";
import { useNavigate } from "react-router";
import Logo from "../../components/elements/logo";
import AttentionButton from "../../components/forms/buttons/attention";

import "./menu.scss";

const Header: React.FC = () => {
    const navigate = useNavigate();

    return (
        <header>
            <div><Logo /></div>
            <nav>
                <ul>
                    <li><a href="#">How it works</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Documentation</a></li>
                </ul>
            </nav>
            <aside>
                <nav>
                    <ul>
                        <li><a href="#">Login</a></li>
                        <li><AttentionButton text="Sign up" /></li>
                    </ul>
                </nav>
            </aside>
        </header>
    );
};

export default Header;
