import { mount } from "cypress/react18";
import Header from ".";

describe("Header", () => {
  it("should show the elements on the header", () => {
    mount(<Header title="Cypress Test" />);

    cy.get('[data-cy="title-header"]')
      .should("be.visible")
      .contains("Cypress Test");
  });
});
