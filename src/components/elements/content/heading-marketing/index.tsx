import React from "react";
import style from "./index.module.scss";

interface Props {
    title?: string,
    subtitle?: string,
    children?: React.ReactNode
}

const ContentMarketingHeading: React.FunctionComponent<Props> = (props:Props) =>
    <section className={style.heading}>
        <div>
            {props.children}
        </div>
        <span id={style.abstract1}></span>
        <span id={style.abstract2}></span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 180"><path fill="#effbf7" fill-opacity="1" d="M0,32L48,42.7C96,53,192,75,288,74.7C384,75,480,53,576,64C672,75,768,117,864,112C960,107,1056,53,1152,37.3C1248,21,1344,43,1392,53.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
    </section>

export default ContentMarketingHeading;