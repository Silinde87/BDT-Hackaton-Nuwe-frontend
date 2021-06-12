import React from "react";
import Image from "next/image";
import SCGoogleButton from "./GoogleButton.styled";

export default function GoogleButton() {
	return (
		<SCGoogleButton>
			<Image
				className="google-logo"
				id="social-login-img"
				src="/icons/flat-color-icons_google.png"
				alt="Google-logo"
				height={20}
				width={20}
			/>
			<p className="social-label">Regístrate con Google</p>
		</SCGoogleButton>
	);
}
