describe("Device Page", () => {
  it("should show the elements on the device page", () => {
    cy.visit(Cypress.config("baseUrl") as string);

    cy.get('[data-cy="title-header"]').contains("Devices");
  });
});
