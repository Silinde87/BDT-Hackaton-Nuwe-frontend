import React, { useState } from "react";
import Button from "../../components/Button/Button";
import NavBar from "../../components/NavBar/NavBar";
import SecureLabelInfo from "../../components/SecureLabelInfo/SecureLabelInfo";
import Title from "../../components/Title/Title";
import countries from "../../countries.json";
import styles from "../../styles/Register.module.css";
import { useRouter } from "next/router";
import { showErrorMessage } from "../../utils/handleToast";

const PHONE_PATTERN = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;

//Fields validators
const validators = {
	phone: (value) => {
		let message;
		if (!value) message = "El teléfono es obligatorio";
		else if (value.length !== 9) message = "Teléfono no válido";
		return message;
	},
	address: (value) => {
		let message;
		if (!value) message = "La dirección es obligatoria";
		return message;
	},
	country: (value) => {
		let message;
		if (!value) message = "El país es obligatorio";
		return message;
	},
};

export default function LocalizationRegPage() {
	const [fields, setFields] = useState({ phone: "", address: "", country: "" });
	const [errors, setErrors] = useState({ phone: null, address: null, country: null });
	const router = useRouter();

	//Returns if there is an error on any input
	const isValid = () => {
		return !Object.keys(errors).some((key) => errors[key] !== undefined);
	};

	//Handles forms submit and check if all fields are valid.
	const handleSubmit = (e) => {
		e.preventDefault();
		if (isValid()) {
			router.push("/register/card");
		} else {
			showErrorMessage("Algo ha ido mal. Debes rellenar los campos correctamente.", "❌");
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
			<NavBar step={"02"} page={"Localización"} href={"/register/personal-info"} />
			<Title
				title={"Completa tu perfil!"}
				label={`Para poder revisar que se trata de una cuenta real, 
                    necesitamos la siguiente información`}
			/>
			<form onSubmit={handleSubmit}>
				<div className={styles.formGroup}>
					<label htmlFor="name" className={styles.formLabel}>Número de teléfono</label>
					<input
						type="number"
						onChange={handleChange}
						name="phone"
						min="1"
						max="999999999"
						autoComplete="off"
						className={styles.formInput}
						placeholder="e.g. 666 123 123"
					></input>
					{errors.phone && <p className={styles.formError}>{errors.phone}</p>}
				</div>
				<div className={styles.formGroup}>
					<label htmlFor="address" className={styles.formLabel}>Dirección</label>
					<input
						type="text"
						placeholder="Introduce la dirección completa"
						onChange={handleChange}
						name="address"
						autoComplete="off"
						className={styles.formInput}
					></input>
					{errors.address && <p className={styles.formError}>{errors.address}</p>}
				</div>
				<div className={styles.formGroup}>
					<label htmlFor="country" className={styles.formLabel}>País de residencia</label>
					<select id="country" name="country" onChange={handleChange} className={styles.formInput}>
						<option value="" defaultValue>
							Selecciona uno
						</option>
						{countries.map(({ code, name }) => {
							return (
								<option key={code} value={name}>
									{name}
								</option>
							);
						})}
					</select>
					{errors.country && <p className={styles.formError}>{errors.country}</p>}
				</div>
				<Button type={"submit"} text={"Guardar y continuar"} />
			</form>
			<SecureLabelInfo />
		</main>
	);
}
