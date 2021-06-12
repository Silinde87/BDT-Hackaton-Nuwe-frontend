import React, { useState } from "react";
import Button from "../../components/Button/Button";
import NavBar from "../../components/NavBar/NavBar";
import SecureLabelInfo from "../../components/SecureLabelInfo/SecureLabelInfo";
import Title from "../../components/Title/Title";
import styles from "../../styles/Register.module.css";

//Fields validators
const validators = {
	cardNumber: (value) => {
		let message;
		if (!value) message = "El número de tarjeta es obligatorio";
		else if (value.length !== 16) message = "Tarjeta no válida";
		return message;
	},
	secretCode: (value) => {
		let message;
		if (!value) message = "El código secreto es obligatorio";
        else if (value.length !== 3) message = "Código no válido";
		return message;
	},
};

export default function CardRegPage() {
	const [fields, setFields] = useState({ cardNumber: "", secretCode: "" });
	const [errors, setErrors] = useState({ cardNumber: null, secretCode: null });

	//Returns if there is an error on any input
	const isValid = () => {
		return !Object.keys(errors).some((key) => errors[key] !== undefined);
	};

	//Handles forms submit and check if all fields are valid.
	const handleSubmit = (e) => {
		e.preventDefault();
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
			<NavBar step={"03"} page={"Verificación por tarjeta"} href={"/register/localization"} />
			<Title
				title={"Completa tu perfil!"}
				label={`Para poder revisar que se trata de una cuenta real, 
                    necesitamos la siguiente información`}
			/>
			<form onSubmit={handleSubmit}>
				<div className={styles.formGroup}>
					<label htmlFor="cardNumber" className={styles.formLabel}>Número de tarjeta</label>
					<input
						type="number"
						onChange={handleChange}
						name="cardNumber"
						autoComplete="off"
						className={styles.formInput}
					></input>
				</div>
				<div className={styles.formGroup}>
					<label htmlFor="secretCode" className={styles.formLabel}>Código secreto</label>
					<input
						type="text"
						onChange={handleChange}
						name="secretCode"
						autoComplete="off"
						className={styles.formInput}
					></input>
				</div>
				<Button type={"submit"} text={"Guardar y continuar"} />
			</form>
            <SecureLabelInfo />
		</main>
	);
}
