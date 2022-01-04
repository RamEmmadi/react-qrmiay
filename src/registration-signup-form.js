import React, { useRef } from 'react';

export default function RegistrationSignUpForm() {
  const [user, setUser] = React.useState({});
  const [formErrors, setFormErrors] = React.useState({});

  const formValidation = () => {};

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'firstName':
        const result = /[a-zA-Z]{3,}/.test(value);
        if (result) {
          setFormErrors({
            ...formErrors,
            firstName: '',
          });
        } else {
          setFormErrors({
            ...formErrors,
            firstName: 'First name must have min 3 chars.',
          });
        }
        break;
      case 'lastName':
        const result1 = /[a-zA-Z]{3,}/.test(value);
        if (result1) {
          setFormErrors({
            ...formErrors,
            lastName: '',
          });
        } else {
          setFormErrors({
            ...formErrors,
            lastName: 'Last name must have min 3 chars.',
          });
        }
        break;
      case 'email':
        const result2 = /\S+@\S+\.\S+/.test(value);
        if (result2) {
          setFormErrors({
            ...formErrors,
            email: '',
          });
        } else {
          setFormErrors({
            ...formErrors,
            email: 'Invalid Email',
          });
        }
        break;
      case 'password':
        break;
      case 'confirmPassword':
        break;
      case 'termsAndPrivay':
        break;
    }
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <div className="mar-b-15">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            className={formErrors && formErrors.firstName ? 'errors' : ''}
            onBlur={handleInputChange}
          />
          <span
            className={
              formErrors && formErrors.firstName ? 'error-msg' : 'd-none'
            }
          >
            {formErrors.firstName}
          </span>
        </div>
        <div className="mar-b-15">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            className={formErrors && formErrors.lastName ? 'errors' : ''}
            onBlur={handleInputChange}
          />
          <span
            className={
              formErrors && formErrors.lastName ? 'error-msg' : 'd-none'
            }
          >
            {formErrors.lastName}
          </span>
        </div>
        <div className="mar-b-15">
          <label>Email</label>
          <input
            type="email"
            name="email"
            className={formErrors && formErrors.email ? 'errors' : ''}
            onBlur={handleInputChange}
          />
          <span
            className={formErrors && formErrors.email ? 'error-msg' : 'd-none'}
          >
            {formErrors.email}
          </span>
        </div>
        <div className="mar-b-15">
          <label>Password</label>
          <input type="password" name="password" onChange={handleInputChange} />
        </div>
        <div className="mar-b-15">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            onChange={handleInputChange}
          />
        </div>
        <div className="mar-b-15">
          <input
            class="check"
            type="checkbox"
            name="termsAndPrivay"
            onChange={handleInputChange}
          />
          <label>I accept the Terms of Use & Privacy Policy</label>
        </div>
        <div>
          <button type="submit">Register</button>
          <button type="reset">Reset</button>
        </div>
      </form>
      <h5>Submitted Data : </h5>
    </>
  );
}
