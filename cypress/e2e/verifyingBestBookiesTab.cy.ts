import {HomePage} from "../page-object/home-page";

const homePageClass = new HomePage();

describe("Verifying Best Bookies Tab", () => {
    it("Verify Best Bookies Tab", () => {
            cy.visit('')
            homePageClass.verifyBestBookiesAndBonusesSectionIsVisible();
            homePageClass.verifyIfBestBookiesTabIsSelected();
            homePageClass.verifyBestBookiesAndBonusesTabsAreVisible();
        }
    )
});