describe("template spec", () => {
	it("passes", () => {
		cy.visit("https://127.0.0.1:8000/category/new");

		cy.wait(1000);

		// Ensure the input is empty
		cy.get("#category_label").clear();

		// Click the button
		cy.get(".btn").click();

		// Assert that an error message is displayed
		cy.get(".error-message")
			.should("be.visible")
			.and("contain", "The category label cannot be empty.");
	});
});
