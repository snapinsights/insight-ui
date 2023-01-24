import React from "react";
import style from "./how-it-works.module.scss";

const HowItWorks: React.FC = () => {
    return (
        <section id={style.page}>
            <div>
                <h2>One question &rarr; actionable results</h2>
                <p>Avoid problems, gain insight, and build on success with continous feedback. Our low cost solution provides organizations with the knowledge needed to resolve issues and pivot before it's too late.</p>
                <p>It's <a href="#">free to get started</a>. Pay only for what you use, no contracts, no minimums, no subscriptions.</p>
            </div>

            <ol>
                <li>
                    <div>
                        <h4>STEP 1</h4>
                        <h2>Create your survey, on any cadence</h2>
                        <p>Send frequent recurring or one-time surveys to teams, your entire organization, or custom audiences.</p>
                    </div>
                    <aside>
                        <svg xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: "1.1rem"}} width="84" height="84" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="10 15 15 20 20 15"></polyline>
                            <path d="M4 4h7a4 4 0 014 4v12"></path>
                        </svg>
                    </aside>
                </li>
                <li>
                    <aside></aside>
                    <div>
                        <h4>STEP 2</h4>
                        <h2>Anonymous employee responds</h2>
                        <p>Responses are fed into our AI powered anonymizer allowing your employees to freely provide comments and feedback with peace of mind.</p>
                    </div>
                </li>
                <li>
                    <div>
                        <h4>STEP 3</h4>
                        <h2>Get actionable results</h2>
                        <p>Our sentiment AI analyzes results to build actionable next steps for your organization.</p>
                    </div>
                    <aside>
                        <svg xmlns="http://www.w3.org/2000/svg" width="84" height="84" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 10 4 15 9 20"></polyline>
                            <path d="M20 4v7a4 4 0 01-4 4H4"></path>
                        </svg>
                    </aside>
                </li>
            </ol>
        </section>
    );
};

export default HowItWorks;
