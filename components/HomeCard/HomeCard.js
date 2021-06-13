import React from "react";
import Image from "next/image";
import SCHomeCard from "./Homecard.styled";

export default function HomeCard({ icon, title, text }) {
	return (
		<SCHomeCard>
            <div className="image-container">
			    <Image src={`/icons/${icon}`} alt="Card-icon" width={40} height={40} />
            </div>
			<div className="text-container">
				<h4>{title}</h4>
				<p>{text}</p>
			</div>
			<div className="arrow-container">
				<Image src={`/icons/arrow-right-solid.svg`} alt="Card-icon" width={15} height={15} />
			</div>
		</SCHomeCard>
	);
}
