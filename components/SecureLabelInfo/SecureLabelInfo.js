import React from "react";
import Image from "next/image";
import SCSecureLabelInfo from "./SecureLabelInfo.styled";

export default function SecureLabelInfo() {
	return (
		<SCSecureLabelInfo>
			<Image className="lock-icon" id="secure-img" src="/icons/lock.svg" alt="lock-icon" height={10} width={10} />
			<p className="secure-label">Tu información es segura</p>
		</SCSecureLabelInfo>
	);
}
