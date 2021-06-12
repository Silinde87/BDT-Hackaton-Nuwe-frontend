import React, { useState } from "react";
import Button from "../../components/Button/Button";
import GoogleButton from "../../components/GoogleButton/GoogleButton";
import NavBar from "../../components/NavBar/NavBar";
import Title from "../../components/Title/Title";
import styles from "../../styles/Register.module.css";

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

export default function PersonalInfoRegPage() {
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
			//todo
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
		<main className={styles.main}>
			<NavBar step={"01"} page={"Personal Info."} href={"/"} />
			<Title
				title={"Registra tu cuenta individual"}
				label={`Para poder revisar que se trata de una cuenta real, 
                    necesitamos la siguiente información`}
			/>
			<div className={styles.formSeparator}></div>
			<form onSubmit={handleSubmit}>
				<div className={styles.formGroup}>
					<label htmlFor="name" className={styles.formLabel}>
						Nombre completo
					</label>
					<input
						type="text"
						placeholder="Introduce tu nombre"
						onChange={handleChange}
						name="name"
						autoComplete="off"
						className={styles.formInput}
					></input>
				</div>
				<div className={styles.formGroup}>
					<label htmlFor="email" className={styles.formLabel}>
						Dirección Email
					</label>
					<input
						type="email"
						placeholder="Introduce tu email"
						onChange={handleChange}
						name="email"
						autoComplete="off"
						className={styles.formInput}
					></input>
				</div>
				<div className={styles.formGroup}>
					<label htmlFor="password" className={styles.formLabel}>
						Contraseña
					</label>
					<input
						type="password"
						placeholder="Introduce tu constraseña"
						onChange={handleChange}
						name="password"
						autoComplete="off"
						className={styles.formInput}
					></input>
				</div>
				<div>
					<input type="checkbox" id="check-conditions" />
					<label htmlFor="check-conditions" className={styles.formLabelCheckbox}>Acepto los términos y condiciones</label>
				</div>
				<Button type={"submit"} text={"Registrar cuenta"} />
			</form>
			<div className={styles.formSeparator}>
				<span className={styles.formSeparatorLabel}>O</span>
			</div>
			<GoogleButton />

		</main>
	);
}
