describe("edit cat", () => {
	it("passes", () => {
		cy.visit("https://127.0.0.1:8000/category");
		cy.get('[href="/category/17/edit"]').click();
		cy.wait(1000);
		cy.get("#category_label").clear();
		cy.get("#category_label").type("Roman");
		cy.get('[name="category"] > .btn').click();
	});
});
