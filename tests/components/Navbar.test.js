import React from "react";
import { render, screen } from "@testing-library/react";
import NavBar from "../../components/NavBar/NavBar";

describe("NavBar", () => {
	it("Should render text passed by props", () => {
		const step = "01";
		const page = "Test Page";
		const href = "/";
		render(<NavBar step={step} page={page} href={href} />);
		const component = screen.getByText(/01/i);
        expect(component).toBeTruthy();
        
	});

	it("Should render chevron icon", () => {
		const step = "01";
		const page = "Test Page";
		const href = "/";
		render(<NavBar step={step} page={page} href={href} />);
		const component = screen.getByAltText(/chevron-left-ico/i);
        expect(component).toHaveAttribute("alt", "chevron-left-icon");
	});
});
