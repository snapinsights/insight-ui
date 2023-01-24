import React from "react";
import style from "./pricing.module.scss";

const Pricing: React.FC = () => {
    return (
        <section id={style.page}>
            <div>
                <div>
                    <h2>Pricing is simple. Pay per use.</h2>
                    <p>Pay only for what you use, no minimums, no subscriptions. It's <a href="#">free to get started</a>.</p>
                </div>
                <div>
                    <ol>
                        <li><h2>$0.50 per employee</h2></li>
                        <li><h2>per survey</h2></li>
                    </ol>
                </div>
            </div>

            <span id={style.line1} className={style.abstractLine}></span>
            <span id={style.line2} className={style.abstractLine}></span>
            <span id={style.line3} className={style.abstractLine}></span>
            <span id={style.line4} className={style.abstractLine}></span>
            <span id={style.line5} className={style.abstractLine}></span>
            <span id={style.line6} className={style.abstractLine}></span>
        </section>
    );
};

export default Pricing;
