import React, { useState } from "react";
import Button from "../../components/Button/Button";
import GoogleButton from "../../components/GoogleButton/GoogleButton";
import NavBar from "../../components/NavBar/NavBar";
import Title from "../../components/Title/Title";
import FrontInfoText from "../../components/FrontInfoText/FrontInfoText";
import styles from "../../styles/Register.module.css";
import { saveUser } from "../../utils/handleUser";
import { showErrorMessage } from "../../utils/handleToast";
import { useRouter } from "next/router";

const EMAIL_PATTERN =
	/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

//Fields validators
const validators = {
	name: (value) => {
		let message;
		if (!value) message = "El nombre es obligatorio.";
		else if (value.length < 3) message = "Debe tener al menos 3 carácteres.";
		return message;
	},
	email: (value) => {
		let message;
		if (!value) message = "El email es obligatorio.";
		else if (!EMAIL_PATTERN.test(value)) message = "Email no válido.";
		return message;
	},
	password: (value) => {
		let message;
		if (!value) message = "La contraseña es obligatoria";
		else if (value.length < 6) message = "Debe tener al menos 6 carácteres.";
		return message;
	},
	conditions: (value) => {
		let message;
		if (!value) message = "Debes aceptar los términos";
		return message;
	},
};

export default function PersonalInfoRegPage() {
	const [fields, setFields] = useState({ name: "", email: "", password: "", conditions: "" });
	const [errors, setErrors] = useState({ name: null, email: null, password: null, conditions: null });
	const router = useRouter();

	//Returns if there is an error on any input
	const isValid = () => {
		return !Object.keys(errors).some((key) => errors[key] !== undefined);
	};

	//Handles forms submit and check if all fields are valid.
	const handleSubmit = (e) => {
		e.preventDefault();
		const { name, email, password, conditions } = fields;
		if (isValid()) {
			if (saveUser(name, email, password)) {
				router.push("/register/location");
			} else {
				showErrorMessage(
					"El correo electrónico introducido ya está en uso. Por favor, utiliza otro.",
					"❌"
				);
			}
		} else {
			showErrorMessage("Algo ha ido mal. Debes rellenar los campos correctamente.", "❌");
		}
	};

	//Handles input changes setting fields and errors states
	const handleChange = (e) => {
		let { name, value } = e.target;

		if (e.target.type === "checkbox") value = e.target.checked;

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
			<FrontInfoText />
			<section className={styles.formContainer}>
				<NavBar step={"01"} page={"Personal Info."} href={"/"} />
				<Title
					title={"Registra tu cuenta individual"}
					label={`Para poder revisar que se trata de una cuenta real, 
						necesitamos la siguiente información`}
				/>
				<div className={styles.formSeparator}></div>
				<form onSubmit={handleSubmit} className={styles.form}>
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
						{errors.name && <p className={styles.formError}>{errors.name}</p>}
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
						{errors.email && <p className={styles.formError}>{errors.email}</p>}
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
						{errors.password && <p className={styles.formError}>{errors.password}</p>}
					</div>
					<div className={styles.formCheckGroup}>
						<input
							type="checkbox"
							id="check-conditions"
							name="conditions"
							onChange={handleChange}
							className={styles.checkbox}
						/>
						<label htmlFor="check-conditions" className={styles.formLabelCheckbox}>
							Acepto los términos y condiciones
						</label>
						{errors.conditions && <p className={styles.formErrorCheckbox}>{errors.conditions}</p>}
					</div>
					<Button type={"submit"} text={"Registrar cuenta"} />
				</form>
				<div className={styles.formSeparator}>
					<span className={styles.formSeparatorLabel}>O</span>
				</div>
				<GoogleButton />
			</section>
		</main>
	);
}
