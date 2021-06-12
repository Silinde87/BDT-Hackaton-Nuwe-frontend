import React from "react";
import Image from "next/image";

export default function SecureLabelInfo() {
	return (
		<div>
			<Image id="secure-img" src="/icons/lock.svg" alt="lock-icon" height={10} width={10} />
			<p>Tu información es segura</p>
		</div>
	);
}
