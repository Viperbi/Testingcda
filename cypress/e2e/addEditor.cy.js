describe("template spec", () => {
	it("passes", () => {
		cy.visit("https://127.0.0.1:8000/editor/new");
		cy.get("#editor_name").type("Mappa");
		cy.get(".btn").click();
		cy.wait(1000);
		cy.visit("https://127.0.0.1:8000/editor");
		cy.wait(1000);
		cy.get("tbody > tr > :nth-child(2)").contains("Mappa");
	});
});
