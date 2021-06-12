import Image from "next/image";
import React, { useState } from "react";
import Button from "../components/Button/Button";
import NavBar from "../components/NavBar/NavBar";
import Title from "../components/Title/Title";

const EMAIL_PATTERN =
	/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

//Fields validators
const validators = {
	name: (value) => {
		let message;
		if (!value) message = "El nombre es obligatorio";
		return message;
	},
	email: (value) => {
		let message;
		if (!value) message = "El email es obligatorio";
		else if (!EMAIL_PATTERN.test(value)) message = "Email no válido";
		return message;
	},
	password: (value) => {
		let message;
		if (!value) message = "La contraseña es obligatoria";
		return message;
	},
};

export default function PersonalInfo() {
	const [fields, setFields] = useState({ name: "", email: "", password: "" });
	const [errors, setErrors] = useState({ name: null, email: null, password: null });

	//Returns if there is an error on any input
	const isValid = () => {
		return !Object.keys(errors).some((key) => errors[key] !== undefined);
	};

	//Handles forms submit and check if all fields are valid.
	const handleSubmit = (e) => {
		e.preventDefault();
		const { name, email } = fields;
		if (isValid()) {
			console.log(name, email);
		}
	};

	//Handles input changes setting fields and errors states
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFields({
			...fields,
			[name]: value,
		});
		setErrors({
			...errors,
			[name]: validators[name](value),
		});
	};

	return (
		<main>
			<NavBar step={"01"} page={"Personal Info."} href={"/"}/>
			<Title
				title={"Registra tu cuenta individual"}
				label={`Para poder revisar que se trata de una cuenta real, 
                    necesitamos la siguiente información`}
			/>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="name">Nombre completo</label>
					<input
						type="text"
						placeholder="Introduce tu nombre"
						onChange={handleChange}
						name="name"
						autoComplete="off"
					></input>
				</div>
				<div>
					<label htmlFor="email">Dirección Email</label>
					<input
						type="email"
						placeholder="Introduce tu email"
						onChange={handleChange}
						name="email"
						autoComplete="off"
					></input>
				</div>
				<div>
					<label htmlFor="password">Contraseña</label>
					<input
						type="password"
						placeholder="Introduce tu constraseña"
						onChange={handleChange}
						name="password"
						autoComplete="off"
					></input>
				</div>
				<div>
					<input type="checkbox" id="check-conditions" />
					<label htmlFor="check-conditions">Acepto los términos y condiciones</label>
				</div>
				<Button type={"submit"} text={"Registrar cuenta"} />
			</form>
			<div className="form-separator">
				<span>O</span>
			</div>
			<Image
				id="social-login-img"
				src="/images/google-social-login.png"
				alt="Google-social-login"
				height={92}
				width={382}
			/>
		</main>
	);
}
