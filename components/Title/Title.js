import React from "react";
import SCTitle from "./Title.styled";

export default function Title({title, label}) {
	return (
		<SCTitle>
		    <h1>{title}</h1>
			<p>{label}</p>
		</SCTitle>
	);
}
