import {HomePage} from "../page-object/home-page";
import {Operators} from "../support/enums/Operators";

const homePageClass = new HomePage();
describe("Verifying Operator", () => {
        it("RoyalPari", () => {
                cy.visit('/');
                homePageClass.verifyIfBestBookiesTabIsSelected();
                //homePageClass.verifyIsNumberVisible();
                //homePageClass.operatorNumber().should('be.visible');
                //homePageClass.clickReviewButton();
                homePageClass.verifyOperatorOrderNumber(Operators.ROYALPARI.ORDER_NUMBER);
                homePageClass.clickOnOperatorLogoTitle(Operators.ROYALPARI.OPERATOR_LOGO_TITLE);
                cy.url().should('include', Operators.ROYALPARI.ROYALPARI_URL);
                cy.go('back');
                homePageClass.verifyIfBestBookiesTabIsSelected();
                //homePageClass.clickOnReadReviewTitle(Operators.ROYALPARI.REVIEW_NAME);
                //cy.url().should('include', Operators.ROYALPARI.REVIEW_URL);
                //cy.go('back');
                //homePageClass.verifyIfBestBookiesTabIsSelected();
                //homePageClass.clickOnOperatorLogo(Operators.ROYALPARI.OPERATOR_LOGO_ICON)
                //homePageClass.verifyOperatorLogoIcon();
                homePageClass.verifyOperatorBulletListText('Competitive odds');
                homePageClass.verifyOperatorBulletListText('Trending bets, enhanced accas & boosted markets');
                homePageClass.verifyOperatorBulletListText('Multitude of account controls');
                homePageClass.clickClaimBonusButton(Operators.ROYALPARI.ROYALPARI_URL);
                cy.url().should('include', Operators.ROYALPARI.ROYALPARI_URL);
                cy.go('back');
                homePageClass.verifyIfBestBookiesTabIsSelected();
                homePageClass.verifyClaimBonusButtonIsVisible();
                homePageClass.verifyClaimBonusButtonStyleSpecifications()
                //homePageClass.verifyCloseFeaturesButton().click({force: true});
                /*homePageClass.verifyOperatorBullets().within(() => {
                        cy.contains('Competitive odds').should("be.visible");
                        cy.contains('Trending bets, enhanced accas & boosted markets').should("be.visible");
                        cy.contains('Multitude of account controls').should("be.visible");
                    }
                )*/
                //homePageClass.clickOnReviewButton(Operators.ROYALPARI.REVIEW_URL);
                //homePageClass.clickOnReadOperatorReviewButton(Operators.ROYALPARI.REVIEW_TEXT);
            }
        )
    }
)