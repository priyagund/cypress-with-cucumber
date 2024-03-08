/// <reference types="cypress" />
import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";


const url ="https://webdriveruniversity.com/"

Given(`I navigate to WebdriverUnivercity homepage`,()=>{
    cy.visit(url)
})

When(`I click on contact us button`,()=>{
    cy.get('#contact-us').invoke('removeAttr',"target").click()
})



