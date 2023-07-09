import React, { useState } from 'react';
import './RegistrationPage.css';
import registrationImage from "../../../assets/registration.png"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const RegistrationPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        mobile: '',
        termsAccepted: false,
    });

    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === 'checkbox') {
            setFormData((prevData) => ({
                ...prevData,
                [name]: checked,
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateForm();
        if (Object.keys(errors).length === 0) {
            localStorage.setItem('registrationData', JSON.stringify(formData));
        } else {
            setFormErrors(errors);
        }
    };

    const validateForm = () => {
        const errors = {};
        const requiredFields = ['name', 'username', 'email', 'mobile', 'termsAccepted'];

        requiredFields.forEach((field) => {
            if (!formData[field]) {
                const fieldName = field.charAt(0).toUpperCase() + field.slice(1);
                errors[field] = `${fieldName} is required`;
            }
        });
        return errors;
    };

    return (
        <div className="registration-page">
            <div id='container'>
                <div id='left_container'>
                    <div className="image-container">
                        <img src={registrationImage} alt="Registration Image" id="registration_image" />
                        <p className="image-text">Discover new things on<br />Superapp</p>
                    </div>
                </div>
                <div id='right_container'>
                    <div>
                        <h1 id='heading'>Super app</h1>
                        <p id='create_p'>Create your new account</p>
                    </div>
                    <div>
                        <form onSubmit={handleSubmit} id="registration_form">
                            <div>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Name"
                                    className="form-group"
                                />
                                {formErrors.name && <p className="error-message">{formErrors.name}</p>}
                            </div>

                            <div>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    placeholder="UserName"
                                    className="form-group"
                                />
                                {formErrors.username && <p className="error-message">{formErrors.username}</p>}
                            </div>

                            <div>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email"
                                    className="form-group"
                                />
                                {formErrors.email && <p className="error-message">{formErrors.email}</p>}
                            </div>

                            <div>
                                <input
                                    type="tel"
                                    id="mobile"
                                    name="mobile"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    placeholder="Mobile"
                                    className="form-group"
                                />
                                {formErrors.mobile && <p className="error-message">{formErrors.mobile}</p>}
                            </div>

                            <div id='terms_conditions'>
                                <input
                                    type="checkbox"
                                    id="termsAccepted"
                                    name="termsAccepted"
                                    checked={formData.termsAccepted}
                                    onChange={handleChange}
                                />
                                <label htmlFor="termsAccepted" id='terms'>Share my registration data with Superapp</label>
                                <div id='termsAccepted_error'>
                                    {formErrors.termsAccepted && <p className="error-message">Check this box if you want to proceed</p>}
                                </div>
                            </div>
                            <button type="submit" id='button'>SIGN UP</button>
                            <Link to="/select-category"></Link>

                        </form>
                        <div>
                            <p id='p_term'>By clicking on Sign up. you agree to Superapp <span id='span_term'>Terms and<br />Conditions of Use</span></p>
                            <p id='p_policy'>To learn more about how Superapp collects, uses, shares and<br />protects your personal data please head Superapp <span id='span_policy'>Privacy<br />Policy</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationPage;
