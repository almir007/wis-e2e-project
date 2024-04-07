import {HomePage} from "../page-object/home-page";

const homepageClass = new HomePage();
describe("Verifying Homepage", () => {
    // This is a test to verify the homepage content
    it("Verify homepage content", () => {
        cy.visit('')
        homepageClass.verifyHomePageHeaderIsVisible();
        homepageClass.verifyHomePageDescriptionSectionIsVisible();
    });
});