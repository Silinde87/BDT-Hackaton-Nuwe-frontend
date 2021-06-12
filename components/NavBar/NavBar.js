import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function NavBar({ step, page, href }) {
	return (
		<nav>
			<Link href={href}>
				<a>
					<Image
						src="/icons/chevron-left-solid.svg"
						alt="chevron-left-icon"
						width={10}
						height={10}
					/>{" "}
					<p>Volver</p>
				</a>
			</Link>
			<div>
				<p>PASO {step}/03</p>
				<p>{page}</p>
			</div>
		</nav>
	);
}
