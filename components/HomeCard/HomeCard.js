import React from "react";
import Image from "next/image";
import SCHomeCard from "./Homecard.styled";

export default function HomeCard({ icon, title, text }) {
	return (
		<SCHomeCard>
            <div className="image-container">
			    <Image id="test" src={`/icons/${icon}`} alt="Card-icon" width={50} height={50} />
            </div>
			<div className="text-container">
				<h4>{title}</h4>
				<p>{text}</p>
			</div>
		</SCHomeCard>
	);
}
