describe("test ajout category", () => {
	it("verif url", () => {
		cy.visit("https://127.0.0.1:8000/category/new");
		cy.get("#category_label").type("Livre");
		cy.get(".btn").click();
		cy.wait(1000);
		cy.visit("https://127.0.0.1:8000/category");
		cy.wait(1000);
		cy.get("tbody > tr > :nth-child(2)").contains("Livre");
	});
});
