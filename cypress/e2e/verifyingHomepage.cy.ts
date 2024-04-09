import {HomePage} from "../page-object/home-page";

const homepageClass = new HomePage();
describe("Verifying Homepage", () => {
    // This is a test to verify some of the homepage content
    it("content", () => {
        cy.visit('')
        homepageClass.verifyHomePageHeaderIsVisible();
        homepageClass.verifyCookieBannerIsVisible();
        homepageClass.clickOnAcceptCookiesButton();
        homepageClass.verifyAcceptCookiesButtonIsNotVisible();
        homepageClass.verifyHomePageDescriptionSectionIsVisible();
        homepageClass.verifyBestBookiesAndBonusesSectionIsVisible();
        homepageClass.verifyBestBookiesAndBonusesTabsAreVisible();
        homepageClass.clickOnSeeMoreButton();
        homepageClass.verifySeeMoreOperatorsButtonIsNotVisible();
        homepageClass.verifyLastOperatorIsVisibleWhenExpanded('dragonbet logo', 54);
    });
});