import React, { useEffect, useState } from "react";
import "./index.scss";

interface ITextBoxParams {
    type: string
    onChange: React.ChangeEventHandler<HTMLInputElement>
    id?: string
    label?: string
    maxLength?: number
    placeholder?: string
    value?: string | number
}

const TextBox: React.FC<ITextBoxParams> = (props) => {
    const [value, setValue] = useState(props.value);

    useEffect(() => {
        setValue(props.value);
    },[props.value])

    const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange(event);
        setValue(event.target.value);
    }

    return (
        <div className="input-text">
            {props.label && (
                <label>{props.label}</label>
            )}
            <div>
                <input type={props.type ? props.type : "text"} value={value} maxLength={props.maxLength} placeholder={props.placeholder} onChange={e => handleValueChange(e)} />
            </div>
        </div>
    );
};

export default TextBox;
