import {HomePage} from "../page-object/home-page";

const homepageClass = new HomePage();

describe("Homepage Content Verification", () => {
    it("should ensure elements are present and functional", () => {
        cy.visit('/')
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