import React from "react";
import { render, screen } from "@testing-library/react";
import Title from "../../components/Title/Title";

describe("NavBar", () => {
    it("Should render text passed by props", () => {
        const title = "title";
		const label = "label";

		render(<Title title={title} label={label} />);
		const component = screen.getByRole("heading");
        expect(component).toBeVisible();
    });

});
