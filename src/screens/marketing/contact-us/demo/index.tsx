import React, { useState } from "react";
import ValidationSummary from "../../../../components/elements/validation-summary";
// import { addError } from "../../../store/slices/notification-slice";
// import { useAppDispatch } from "../../../store/store-hooks";
// import { IApiResponse } from "../../../store/types";
// import ReCAPTCHA from "react-google-recaptcha";

import style from "../index.module.scss";
// import api from "../../../utils/api";
import AttentionButton from "../../../../components/forms/buttons/attention";
import TextArea from "../../../../components/forms/textarea";
import TextBox from "../../../../components/forms/textbox";
import ContentMarketingHeading from "../../../../components/elements/content/heading-marketing";

interface IForm {
    to: string
    phone: string
    organization: string
    body: string
}

const ContactForDemo: React.FC = () => {
    const [form, setFormValue] = useState<IForm>({
        to: "",
        phone: "",
        organization: "",
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
                <h1>Request a demo</h1>
                <p>Interested in our services? We would love to learn more about your organization and show you how snap insights can provide value.</p>
            </ContentMarketingHeading>
            <div id={style.contact}>
                <ValidationSummary items={validationMessages} />
                <form onSubmit={(e) => submitHandler(e)}>
                    <div className="input-group">
                        <TextBox label="Your email" type="email" value={form.to} onChange={(e) => setFormValue({ ...form, to: e.target.value }) } />
                    </div>
                    <div className="input-group">
                        <TextBox label="Your phone number" type="phone" value={form.phone} onChange={(e) => setFormValue({ ...form, to: e.target.value }) } />
                    </div>
                    <div className="input-group">
                        <TextBox label="Your company or organization name" type="text" value={form.organization} onChange={(e) => setFormValue({ ...form, to: e.target.value }) } />
                    </div>
                    <div className="input-group">
                        <TextArea label="Any details you'd like to add?" value={form.body}  onChange={(e) => setFormValue({ ...form, body: e.target.value }) } />
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

export default ContactForDemo;
