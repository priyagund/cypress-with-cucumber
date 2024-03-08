
/// <reference types="cypress" />
import { When,Then } from "@badeball/cypress-cucumber-preprocessor";
//import{ And } from "cypress-cucumber-preprocessor/steps"

When(`I type first name`,()=>{
  cy.get("input[name='first_name']").type("Joy")
})

When(`I type last name`,()=>{
    cy.get("input[name='last_name']").type("Test")
})

When(`I type email address`,()=>{
    cy.get("input[name='email']").type("josys@gmail.com")
})

When(`I type a comment`,()=>{
cy.get("textarea[name='message']").type("Register to webdriveruniversity")
})

When(`I click on submit button`,()=>{
    cy.get("input[type='submit']").click()
})

Then(`I should be presented with a successful contact us submission message`,()=>{
   cy.get("div h1").should('have.text',"Thank You for your Message!")
}) 