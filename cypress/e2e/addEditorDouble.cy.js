describe("template spec", () => {
	it("Test 2 : L'éditeur existe déja (pseudo)", () => {
		cy.visit("https://127.0.0.1:8000/editor");
		const editor = "Kana";
		cy.wait(1000);
		cy.get("#editor_name").clear().type(editor);
		cy.get('[name="editor"] > .btn').click();
		//Assert
		cy.wait(500);
		cy.contains("table tr", editor).should("exist");
	});
});
