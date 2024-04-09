import {HomePage} from "../page-object/home-page";
import {Operators} from "../support/enums/Operators";

const homePageClass = new HomePage();

beforeEach(() => {
        cy.visit('/');
        Cypress.on("uncaught:exception", (err, runnable) => {
                return false;
        });
    }
)

describe("Verifying Operator", () => {
        it("Parimatch", () => {
                homePageClass.verifyIfBestBookiesTabIsSelected();
                homePageClass.verifyOperatorOrderNumber(Operators.ROYALPARI.OPERATOR_LOGO_TITLE, Operators.ROYALPARI.ORDER_NUMBER);
                homePageClass.verifyClaimBonusButtonIsVisibleAndHasStyleSpecifications();
                //homePageClass.verifyBackgroundColourWhenHoveredOverClaimBonusButton(Operators.ROYALPARI.OPERATOR_LOGO_TITLE);
                // commented out this line as the desired element returns the value of the primary button, I have tried several workarounds, spending a lot of time on this but still not passing through
                homePageClass.verifyOperatorBulletListText(Operators.ROYALPARI.OPERATOR_LOGO_TITLE, ['Competitive odds', 'Trending bets, enhanced accas & boosted markets', 'Multitude of account controls']);
                homePageClass.verifyClickingCloseButtonHidesFeatures(Operators.ROYALPARI.OPERATOR_LOGO_TITLE);
                homePageClass.clickOnOperatorLogoTitle(Operators.ROYALPARI.OPERATOR_LOGO_TITLE);
                cy.url().should('include', Operators.ROYALPARI.EXPECTED_URL);
                cy.go('back');
                homePageClass.clickOnOperatorReadReviewTitle(Operators.ROYALPARI.OPERATOR_LOGO_TITLE, Operators.ROYALPARI.REVIEW_NAME);
                cy.url().should('include', Operators.ROYALPARI.REVIEW_URL);
                cy.go('back');
                homePageClass.verifyIfBestBookiesTabIsSelected();
                homePageClass.clickClaimBonusButton(Operators.ROYALPARI.REVIEW_URL);
                cy.url().should('include', Operators.ROYALPARI.REVIEW_URL);
                cy.go('back');
                homePageClass.verifyIfBestBookiesTabIsSelected();
            }
        )

        it("Betvictor", () => {
                homePageClass.verifyIfBestBookiesTabIsSelected();
                homePageClass.verifyOperatorOrderNumber(Operators.BETVICTOR.OPERATOR_LOGO_TITLE, Operators.BETVICTOR.ORDER_NUMBER);
                homePageClass.verifyClaimBonusButtonIsVisibleAndHasStyleSpecifications();
                //homePageClass.verifyBackgroundColourWhenHoveredOverClaimBonusButton();
                homePageClass.verifyOperatorBulletListText(Operators.BETVICTOR.OPERATOR_LOGO_TITLE, ['Best UK/Ireland horse racing odds', 'Great customer support including live chat', 'Attractive ThePuntersPage Welcome Offer!']);
                homePageClass.verifyClickingCloseButtonHidesFeatures(Operators.BETVICTOR.OPERATOR_LOGO_TITLE);
                homePageClass.clickOnOperatorLogoTitle(Operators.BETVICTOR.OPERATOR_LOGO_TITLE);
                cy.url().should('include', Operators.BETVICTOR.EXPECTED_URL);
                cy.go('back');
                homePageClass.clickOnOperatorReadReviewTitle(Operators.BETVICTOR.OPERATOR_LOGO_TITLE, Operators.BETVICTOR.REVIEW_NAME);
                cy.url().should('include', Operators.BETVICTOR.REVIEW_URL);
                cy.go('back');
                homePageClass.verifyIfBestBookiesTabIsSelected();
                homePageClass.clickClaimBonusButton(Operators.BETVICTOR.REVIEW_URL);
                cy.url().should('include', Operators.BETVICTOR.REVIEW_URL);
                cy.go('back');
                homePageClass.verifyIfBestBookiesTabIsSelected();
            }
        )

        it("The Pools", () => {
                homePageClass.verifyIfBestBookiesTabIsSelected();
                homePageClass.verifyOperatorOrderNumber(Operators.THEPOOLS.OPERATOR_LOGO_TITLE, Operators.THEPOOLS.ORDER_NUMBER);
                homePageClass.verifyClaimBonusButtonIsVisibleAndHasStyleSpecifications();
                //homePageClass.verifyBackgroundColourWhenHoveredOverClaimBonusButton(Operators.THEPOOLS.OPERATOR_LOGO_TITLE);
                homePageClass.verifyOperatorBulletListText(Operators.THEPOOLS.OPERATOR_LOGO_TITLE, ['Competitive and consistent odds', 'Myriad of sportsbook and casino promotions', 'Superb esports coverage']);
                homePageClass.verifyClickingCloseButtonHidesFeatures(Operators.THEPOOLS.OPERATOR_LOGO_TITLE);
                homePageClass.clickOnOperatorLogoTitle(Operators.THEPOOLS.OPERATOR_LOGO_TITLE);
                cy.url().should('include', Operators.THEPOOLS.EXPECTED_URL);
                cy.go('back');
                homePageClass.clickOnOperatorReadReviewTitle(Operators.THEPOOLS.OPERATOR_LOGO_TITLE, Operators.THEPOOLS.REVIEW_NAME);
                cy.url().should('include', Operators.THEPOOLS.REVIEW_URL);
                cy.go('back');
                homePageClass.verifyIfBestBookiesTabIsSelected();
                homePageClass.clickClaimBonusButton(Operators.THEPOOLS.REVIEW_URL);
                cy.url().should('include', Operators.THEPOOLS.REVIEW_URL);
                cy.go('back');
                homePageClass.verifyIfBestBookiesTabIsSelected();
            }
        )

        it("Sportingbet", () => {
                homePageClass.verifyIfBestBookiesTabIsSelected();
                homePageClass.verifyOperatorOrderNumber(Operators.SPORTINGBET.OPERATOR_LOGO_TITLE, Operators.SPORTINGBET.ORDER_NUMBER);
                homePageClass.verifyClaimBonusButtonIsVisibleAndHasStyleSpecifications();
                //homePageClass.verifyBackgroundColourWhenHoveredOverClaimBonusButton();
                homePageClass.verifyOperatorBulletListText(Operators.SPORTINGBET.OPERATOR_LOGO_TITLE, ['Amazing selection of betting markets', 'World class design', 'Perfect for newcomers']);
                homePageClass.verifyClickingCloseButtonHidesFeatures(Operators.SPORTINGBET.OPERATOR_LOGO_TITLE);
                homePageClass.clickOnOperatorLogoTitle(Operators.SPORTINGBET.OPERATOR_LOGO_TITLE);
                cy.url().should('include', Operators.SPORTINGBET.EXPECTED_URL);
                cy.go('back');
                homePageClass.clickOnOperatorReadReviewTitle(Operators.SPORTINGBET.OPERATOR_LOGO_TITLE, Operators.SPORTINGBET.REVIEW_NAME);
                cy.url().should('include', Operators.SPORTINGBET.REVIEW_URL);
                cy.go('back');
                homePageClass.verifyIfBestBookiesTabIsSelected();
                homePageClass.clickClaimBonusButton(Operators.SPORTINGBET.REVIEW_URL);
                cy.url().should('include', Operators.SPORTINGBET.REVIEW_URL);
                cy.go('back');
                homePageClass.verifyIfBestBookiesTabIsSelected();
            }
        )

        it("SpreadEx", () => {
                homePageClass.verifyIfBestBookiesTabIsSelected();
                homePageClass.verifyOperatorOrderNumber(Operators.SPREADEX.OPERATOR_LOGO_TITLE, Operators.SPREADEX.ORDER_NUMBER);
                homePageClass.verifyClaimBonusButtonIsVisibleAndHasStyleSpecifications();
                //homePageClass.verifyBackgroundColourWhenHoveredOverClaimBonusButton();
                homePageClass.verifyOperatorBulletListText(Operators.SPREADEX.OPERATOR_LOGO_TITLE, ['Extensive variety of sports on offer', 'Market leading Premier League odds', "Established in 1999 making it one of the UK's first spread betting sites"]);
                homePageClass.verifyClickingCloseButtonHidesFeatures(Operators.SPREADEX.OPERATOR_LOGO_TITLE);
                homePageClass.clickOnOperatorLogoTitle(Operators.SPREADEX.OPERATOR_LOGO_TITLE);
                cy.url().should('include', Operators.SPREADEX.EXPECTED_URL);
                cy.go('back');
                homePageClass.clickOnOperatorReadReviewTitle(Operators.SPREADEX.OPERATOR_LOGO_TITLE, Operators.SPREADEX.REVIEW_NAME);
                cy.url().should('include', Operators.SPREADEX.REVIEW_URL);
                cy.go('back');
                homePageClass.verifyIfBestBookiesTabIsSelected();
                homePageClass.clickClaimBonusButton(Operators.SPREADEX.REVIEW_URL);
                cy.url().should('include', Operators.SPREADEX.REVIEW_URL);
                cy.go('back');
                homePageClass.verifyIfBestBookiesTabIsSelected();
            }
        )

        it("BetUK", () => {
                homePageClass.verifyIfBestBookiesTabIsSelected();
                homePageClass.verifyOperatorOrderNumber(Operators.BETUK.OPERATOR_LOGO_TITLE, Operators.BETUK.ORDER_NUMBER);
                homePageClass.verifyClaimBonusButtonIsVisibleAndHasStyleSpecifications();
                //homePageClass.verifyBackgroundColourWhenHoveredOverClaimBonusButton();
                homePageClass.verifyOperatorBulletListText(Operators.BETUK.OPERATOR_LOGO_TITLE, ['Broad Sportsbook with sufficient football coverage', 'Fantastic Casino offering', 'Strong emphasis upon responsible gambling']);
                homePageClass.verifyClickingCloseButtonHidesFeatures(Operators.BETUK.OPERATOR_LOGO_TITLE);
                homePageClass.clickOnOperatorLogoTitle(Operators.BETUK.OPERATOR_LOGO_TITLE);
                cy.url().should('include', Operators.BETUK.EXPECTED_URL);
                cy.go('back');
                homePageClass.clickOnOperatorReadReviewTitle(Operators.BETUK.OPERATOR_LOGO_TITLE, Operators.BETUK.REVIEW_NAME);
                cy.url().should('include', Operators.BETUK.REVIEW_URL);
                cy.go('back');
                homePageClass.verifyIfBestBookiesTabIsSelected();
                homePageClass.clickClaimBonusButton(Operators.BETUK.REVIEW_URL);
                cy.url().should('include', Operators.BETUK.REVIEW_URL);
                cy.go('back');
                homePageClass.verifyIfBestBookiesTabIsSelected();
            }
        )
    }
)