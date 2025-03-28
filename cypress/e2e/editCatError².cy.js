describe("edit cat error ²", () => {
	it("passes", () => {
		cy.visit("https://127.0.0.1:8000/category");
		var oldCat = cy.get(".table > tbody > :nth-child(1) > :nth-child(2)");
		cy.get('[href="/category/17/edit"]').click();
		cy.wait(1000);
		cy.get("#category_label").clear();
		cy.get("#category_label").type("Roman");
		cy.get('[name="category"] > .btn').click();
		cy.get(".error-message")
			.should("be.visible")
			.and(
				"contain",
				"The category label cannot be the same as the old one."
			);
	});
});
