import React, { useState, useEffect } from "react";

const Form = (props) => {
    const [inputs, setInputs] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    useEffect(() => {
        const newErrors = {};

        if (inputs.firstName.length < 2) {
            newErrors.firstName = "First Name must be at least 2 characters";
        } else {
            newErrors.firstName = "";
        }

        if (inputs.lastName.length < 2) {
            newErrors.lastName = "Last Name must be at least 2 characters";
        } else {
            newErrors.lastName = "";
        }

        if (inputs.email.length < 2) {
            newErrors.email = "Email must be at least 5 characters";
        } else {
            newErrors.email = "";
        }

        if (inputs.password.length < 8) {
            newErrors.password = "Password must be at least 8 characters";
        } else if (inputs.password !== inputs.confirmPassword) {
            newErrors.confirmPassword = "Passwords must match";
        }

        setErrors(newErrors);
    }, [inputs]);

    const handleChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    };

    return (
        <form>
            <div>
                <label htmlFor="firstName">Nombre: </label>
                <input type="text" name="firstName" value={inputs.firstName} onChange={handleChange} />
                {errors.firstName && <p style={{ color: "red" }}>{errors.firstName}</p>}
            </div>
            <div>
                <label htmlFor="lastName">Apellido: </label>
                <input type="text" name="lastName" value={inputs.lastName} onChange={handleChange} />
                {errors.lastName && <p style={{ color: "red" }}>{errors.lastName}</p>}
            </div>
            <div>
                <label htmlFor="email">Email: </label>
                <input type="text" name="email" value={inputs.email} onChange={handleChange} />
                {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
            </div>
            <div>
                <label htmlFor="password">Contraseña: </label>
                <input type="password" name="password" value={inputs.password} onChange={handleChange} />
                {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
            </div>
            <div>
                <label htmlFor="confirmPassword">Confirmar Contraseña: </label>
                <input type="password" name="confirmPassword" value={inputs.confirmPassword} onChange={handleChange} />
                {errors.confirmPassword && <p style={{ color: "red" }}>{errors.confirmPassword}</p>}
            </div>
        </form>
    );
};

export default Form;