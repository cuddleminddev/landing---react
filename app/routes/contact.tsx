import { useState } from "react";
import "./styles/contact.css";

type FormData = {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
    consent: boolean;
};

export default function Contact() {
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        consent: false,
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleChange = (e: any) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const validate = () => {
        const newErrors: { [key: string]: string } = {};
        if (!formData.firstName.trim()) newErrors.firstName = "First name is required.";
        if (!formData.lastName.trim()) newErrors.lastName = "Last name is required.";
        if (!formData.email.trim()) newErrors.email = "Email is required.";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format.";
        if (!formData.message.trim()) newErrors.message = "Message is required.";
        if (!formData.consent) newErrors.consent = "You must agree to the terms.";

        return newErrors;
    };


    const handleSubmit = (e:any) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            console.log("Submitted:", formData);
            alert("Form submitted successfully!");
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                message: "",
                consent: false,
            });
        }
    };
    return (
        <div className="contact-container">
            <div className="contact-headings">
                <h3>CONTACT US</h3>
                <p>
                    Use the form to reach out to our Team regarding any questions,
                    concerns, or feedback. You can also <br />
                    view our FAQ for quick answers to commonly asked questions.
                </p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                    <div className="form-group">
                        <label>First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange} placeholder="Enter First Name"
                        />
                        {errors.firstName && <span className="error">{errors.firstName}</span>}
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange} placeholder="Enter Last Name"
                        />
                        {errors.lastName && <span className="error">{errors.lastName}</span>}
                    </div>
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange} placeholder="Enter Email"
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>

                <div className="form-group">
                    <label>Message</label>
                    <textarea
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange} placeholder="Enter Message"
                    ></textarea>
                    {errors.message && <span className="error">{errors.message}</span>}
                </div>

                <div className="form-group checkbox-group">
                    <input
                        type="checkbox"
                        id="consent"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleChange}
                    />
                    <label htmlFor="consent">
                        By clicking “Submit” you are agreeing to share your personal
                        information for the purpose of responding to the enquiries.
                        For more information, kindly go through our{" "}
                        <a href="/privacy-policy" target="_blank">Privacy Policy</a> and{" "}
                        <a href="/terms-of-use" target="_blank">Terms of Use</a>.
                    </label>
                </div>
                {errors.consent && <span className="error">{errors.consent}</span>}

                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    );
}
