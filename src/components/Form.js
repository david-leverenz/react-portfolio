import React, { useState } from 'react';

// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../utils/helpers';
import './style.css';

function Form() {
    // Create state variables for the fields in the form
    // We are also setting their initial values to an empty string
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        // Based on the input type, we set the state of either email, username, and password
        // TODO: Add an else statement to the end that will set the password to the value of 'inputValue'

        if (inputType === 'name' && inputValue.length > 0) {
            setName(inputValue);
        } else if (inputType === 'email' && inputValue.length > 0) {
            setEmail(inputValue);
        } else if (inputType === 'message' && inputValue.length > 0) {
            setMessage(inputValue)
        } else {
            setErrorMessage("All fields are required.")
            setEmail("");
            setName("");
            setMessage("");
        }

    };

    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();

        // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
        if (!validateEmail(email) || !name) {
            setErrorMessage('Email or name is invalid');
            // We want to exit out of this code block if something is wrong so that the user can correct it
            return;
        }
        if (!message) {
            setErrorMessage('Please include a message');
            return;
        }


        // If successful, we want to clear out the input after registration.
        setName('');
        // TODO: Set the password back to an empty string after the user clicks submit
        setEmail('');

        setMessage('');
        alert(`Hello ${name}`);
    };

    return (
        <div className="p-2">
            <div className="p-4 container bg-secondary">
                <div className="row">
                <div className="col"></div>
                <div className="col">
                    <form className="form">
                        <input className="rounded"
                            value={name}
                            name="name"
                            onChange={handleInputChange}
                            type="text"
                            placeholder="  Name"
                        />
                        <input className="rounded"
                            value={email}
                            name="email"
                            onChange={handleInputChange}
                            type="email"
                            placeholder="  Email"
                        />

                        <textarea className="form-control rounded"
                            value={message}
                            name="message"
                            onChange={handleInputChange}
                            type="message"
                            placeholder="Message"
                            rows="5"
                            // cols="68"
                        />
                        <p>
                            <div className="d-grid pt-2">
                            <button className="btn btn-outline-light" type="button" onClick={handleFormSubmit}>
                                Submit
                            </button>
                            </div>
                        </p>
                    </form>
                    {errorMessage && (
                        <div>
                            <p className="error-text text-light">{errorMessage}</p>
                        </div>
                    )}
                    </div>
                    <div className="col"></div>
                </div>
            </div>
        </div>
    );
}

export default Form;