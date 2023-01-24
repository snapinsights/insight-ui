import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import HowItWorks from "./how-it-works";
import Pricing from "./pricing";
import AttentionButton from "../../../components/forms/buttons/attention";
import TertiaryButton from "../../../components/forms/buttons/tertiary";

import style from "./index.module.scss";


const Home: React.FC = () => {
    const navigate = useNavigate();
    let date = new Date()
    date.setDate(date.getDate() - 3);

    useEffect(() => {
        let timers:any[] = [];
        function conversations() {
            timers.push(setTimeout(() => { document.querySelector("#conversationOne li:first-child")?.classList.add("fadeIn"); }, 0));
            timers.push(setTimeout(() => { document.querySelector("#conversationOne li:nth-child(2)")?.classList.add("fadeIn"); }, 1000));
            timers.push(setTimeout(() => { document.querySelector("#conversationOne li:nth-child(3)")?.classList.add("fadeIn"); }, 2500));
            timers.push(setTimeout(() => { document.querySelectorAll("#conversationOne li")?.forEach(m => m.classList.remove("fadeIn")); }, 5000));

            timers.push(setTimeout(() => { document.querySelector("#conversationTwo li:first-child")?.classList.add("fadeIn"); }, 5500));
            timers.push(setTimeout(() => { document.querySelectorAll("#conversationTwo li")?.forEach(m => m.classList.remove("fadeIn")); }, 10500));
        }

        conversations();

        setInterval(() => {
            while(timers.length > 0)
                window.clearTimeout(timers.pop());

            conversations();
        }, 12000);
    }, []);

    return (
        <div id={style.page}>
            <section>
                <div id={style.hero}>
                    <div>
                        <h1>Continous feedback,<br/>in a snap</h1>
                        <p>We make it easy to obtain actionable feedback on a continous basis through single question surveys your employees will respond to.</p>
                        <ul>
                            <li><AttentionButton text="Start for free" /></li>
                            <li><TertiaryButton text="Book a demo" hoverText={"Book a demo"} onClick={() => navigate("/contact-us/demo")} /></li>
                        </ul>
                    </div>
                    <div id={style.mobile_device_example}>
                        <img src="/images/mobile_device.png" />
                        <ul id="conversationOne">
                            <li className={style.survey}>
                                <p>Hi Hudson, How was your last sprint?</p>
                                <p>Reply 👍 for good, or 👎 not so good. Feel free to comment or add suggestions.</p>
                                <p>Your response is anonymized via AI and an audience size of 23.</p>
                            </li>
                            <li className={style.response}><span>👎</span></li>
                            <li className={style.response}><p>We never do planning. We have 2 sprint features open 6+ sprints later.</p></li>
                        </ul>
                        <ul id="conversationTwo">
                            <li className={style.survey}>
                                <p>Results are in for "How was your last sprint?" sent {date.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}</p>
                                <p>👍 80% (+2%)</p>
                                <p>👎 20% (-7%)</p>
                                <p>📊 74% response rate (+4%)</p>
                                <p>View the details of the survey here <a href="#">https://nsght.link/jj340kn</a></p>
                            </li>
                        </ul>
                    </div>
                </div>
                <span id={style.abstract1}></span>
                <span id={style.abstract2}></span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
                    <path fill="#effbf7" fillOpacity="1" d="M0,96L80,96C160,96,320,96,480,117.3C640,139,800,181,960,181.3C1120,181,1280,139,1360,117.3L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
                </svg>
            </section>

            <HowItWorks />
            <Pricing />
        </div>
    );
};

export default Home;
