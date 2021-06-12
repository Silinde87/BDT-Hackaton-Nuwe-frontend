import React from "react";
import Image from "next/image";
import Link from "next/link";
import SCNavBar from "./NavBar.styled";

export default function NavBar({ step, page, href }) {
	return (		
		<SCNavBar>
			<Link href={href}>
				<a className="link-back">
					<Image
						src="/icons/chevron-left-solid.svg"
						alt="chevron-left-icon"
						className="chevron-icon"
						width={10}
						height={10}
					/>{" "}
					<p>Volver</p>
				</a>
			</Link>
			<div className="step-box">
				<p className="step-label">PASO {step}/03</p>
				<p className="page-label">{page}</p>
			</div>
		</SCNavBar>
	);
}
