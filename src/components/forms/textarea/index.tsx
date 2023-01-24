import React, { useEffect, useState } from "react";
import style from "./index.module.scss";

interface IProps {
    onChange: React.ChangeEventHandler<HTMLTextAreaElement>
    id?: string
    label?: string
    maxLength?: number
    placeholder?: string
    value?: string
}

const TextArea: React.FC<IProps> = (props) => {
    const [value, setValue] = useState(props.value);

    useEffect(() => {
        setValue(props.value);
    },[props.value])

    const handleValueChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        props.onChange(event);
        setValue(event.target.value);
    }

    return (
        <div className={style.textarea}>
            {props.label && (
                <label>{props.label}</label>
            )}
            <div>
                <textarea value={value} maxLength={props.maxLength} placeholder={props.placeholder} onChange={e => handleValueChange(e)}></textarea>
            </div>
        </div>
    );
};

export default TextArea;
