import React from "react";
import style from "./index.module.scss";

const ValidationSummary: React.FC<{ items: string[] }> = (props) => {
    if (!props.items || props.items.length <= 0)
        return <></>;

    return (
        <ul id={style.summary}>
            {props?.items?.map((message, i) => <li key={i}>{message}</li>)}
        </ul>
    );
};

export default ValidationSummary;
