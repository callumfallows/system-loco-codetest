import { mount } from "cypress/react18";
import TextSearch from ".";

describe("TextSearch component", () => {
  const typedText = "Test input";

  beforeEach(() => {
    const onChange = cy.stub();
    mount(<TextSearch onChange={onChange} value={typedText} />);
  });

  it("should render the input field", () => {
    cy.get("input").should("exist");
  });

  it("should have the correct placeholder text", () => {
    cy.get("input").should("have.attr", "placeholder", "Search Devices");
  });

  it("should allow typing in the input field", () => {
    cy.get("input").type(typedText).should("have.value", typedText);
  });
});
