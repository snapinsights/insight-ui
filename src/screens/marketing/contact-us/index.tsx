import React, { useState } from "react";
import ValidationSummary from "../../../components/elements/validation-summary";
// import { addError } from "../../../store/slices/notification-slice";
// import { useAppDispatch } from "../../../store/store-hooks";
// import { IApiResponse } from "../../../store/types";
// import ReCAPTCHA from "react-google-recaptcha";

import style from "./index.module.scss";
// import api from "../../../utils/api";
import AttentionButton from "../../../components/forms/buttons/attention";
import TextArea from "../../../components/forms/textarea";
import TextBox from "../../../components/forms/textbox";
import ContentContainer from "../../../components/elements/content/container";
import ContentMarketingHeading from "../../../components/elements/content/heading-marketing";

interface IForm {
    to: string
    body: string
}

const Contact: React.FC = () => {
    const [form, setFormValue] = useState<IForm>({
        to: "",
        body: ""
    } as IForm);
    const [validationMessages, setValidationMessages] = useState<string[]>([]);
    const [submitted, setSubmitted] = useState(false);
    // const recaptchaRef = React.createRef<ReCAPTCHA>();
    // const dispatch = useAppDispatch();

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setValidationMessages([]);
        const messages = [];

        if (form.to.trim() === "")
            messages.push("Please provide an email address for us to respond to.");

        if (form.body.trim() === "")
            messages.push("Please provide us a message to answer.");

        // const token = recaptchaRef.current?.getValue();

        if (messages.length > 0)
        {
            setValidationMessages(messages);
            return;
        }

        // api.post<IApiResponse>("/contact-us/send", { ...form, captchaToken: token }).then((r) => {
        //     if (r.data.success)
        //         setSubmitted(true);
        // }).catch((r) => {
        //     if (r.response?.data?.messages.length > 0)
        //     {
        //         setValidationMessages(r.response?.data?.messages);
        //         return;
        //     }
        //     dispatch(addError("We ran into some issues sending the message. Please try again later."));
        // });
    }

    if (submitted)
        return (
            <section>
                <ContentMarketingHeading>
                    <h1>Message received</h1>
                    <p>Thank you for reaching out. We'll respond in a snap!</p>
                </ContentMarketingHeading>
            </section>
        );

    return (
        <section>
            <ContentMarketingHeading>
                <h1>Contact us</h1>
                <p>Drop us a line, let us know what questions you have. We'll respond in a snap!</p>
            </ContentMarketingHeading>
            <div id={style.contact}>
                <ValidationSummary items={validationMessages} />
                <form onSubmit={(e) => submitHandler(e)}>
                    <div className="input-group">
                        <TextBox label="Your email" type="email" value={form.to} onChange={(e) => setFormValue({ ...form, to: e.target.value }) } />
                    </div>
                    <div className="input-group">
                        <TextArea label="What can we help you with?" value={form.body}  onChange={(e) => setFormValue({ ...form, body: e.target.value }) } />
                    </div>
                    {/* <div className="input-group">
                        <ReCAPTCHA sitekey="6LcRjjQdAAAAAAXGO1oTik8_tCXzL-IEWrOIaZwW" ref={recaptchaRef} />
                    </div> */}
                    <AttentionButton text="Send" type="submit" />
                </form>
            </div>
        </section>
    );
}

export default Contact;
