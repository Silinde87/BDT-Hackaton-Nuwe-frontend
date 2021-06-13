import React from "react";
import SCFrontInfoText from "./FrontInfoText.styled";

export default function FrontInfoText() {
	return (
		<SCFrontInfoText>
			<div className="textContainer">
				<img className="quotesIcon" src="/icons/quotes.png"></img>
				<p className="textFront">
					Nuwe es la plataforma que convierte el desarrollo profesional, la búsqueda de trabajo y
					las conexiones de personas y empresas en un juego. Haciendo que puedas centrarte en lo que
					te gusta, programar, diseñar, crear, planear...
				</p>
				<img className="vectorIcon" src="/icons/Vector 2.png"></img>
			</div>
		</SCFrontInfoText>
	);
}
