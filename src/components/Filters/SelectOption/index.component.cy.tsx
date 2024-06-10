import React from "react";
import { mount } from "cypress/react18";
import SelectOption from "./index";

describe("SelectOption", () => {
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  it("applies props correctly", () => {
    const onChange = cy.stub();
    mount(
      <SelectOption
        options={options}
        isDisabled
        placeholder="Choose an option"
        onChange={onChange}
        value={options[0].value}
      />
    );
    cy.get("select").should("be.disabled");
  });
});
