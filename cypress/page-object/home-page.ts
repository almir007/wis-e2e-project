enum homePageText {
    AD_DISCLOSURE_TOOLTIP_BUTTON_TEXT = "Here at ThePuntersPage.com (TPP) we're dedicated to building a trustworthy brand and strive to provide the very best content and offers for our readers. Please note that some of the links included on TPP may be affiliate links, which means we may earn a commission (at no additional cost to you) if you click on a link and subsequently open an account. We only recommend products and companies we use and trust. To learn more, visit our",
    WHY_TRUST_US_TOOLTIP_BUTTON_TEXT = "Trust ThePuntersPage.com (TPP) because we're a team of seasoned sports enthusiasts dedicated to providing data-driven, in-depth betting insights. Our content is impartial, based on extensive research and personal experiences, not influenced by bookies. Our business model is transparent, sustained through affiliate marketing and not user charges. We prioritise responsible gambling, user experience, and consistently strive to deliver accurate and reliable information to help you make informed betting decisions."
}

export class HomePage {

    /**
     * Locators
     */

    claimBonusButton() {
        return cy.get(".claim-bonus");
    }

    claimBonusButtonGreenBackgroundColourAndFontSize() {
        return cy.get(".claim-bonus").should("have.css", "background-color", "rgb(0, 128, 0)").should("have.css", "font-size", "16px");
    }

    puntersPageTitle() {
        return cy.contains('span', 'ThePuntersPage (TPP)')
    }

    puntersPageLogo() {
        return cy.get('div.d-lg-block img').should('have.attr', 'src', 'https://www.thepunterspage.com/app/uploads/2023/05/hero_image-football.png')
    }

    homePageHeader() {
        return cy.get('.container-header.w-100.mx-auto.px-4.p-0')
    }

    homePageDescriptionSection() {
        return cy.get('.wp-block-wis-blocks-homepage-hero')
    }

    detailsButton() {
        return cy.get(".details");
    }

    adDisclosureOption() {
        return cy.get('button.d-flex.align-items-center.btn.btn-sm.fs-13.fw-bolder.mb-3.py-2.btn-tooltip.position-relative.me-lg-2.d-inline-flex.mw-lg-200px.w-100.w-lg-auto').contains('Ad disclosure');
    }

    whyTrustUsOption() {
        return cy.get('d-flex align-items-center btn btn-sm fs-13 fw-bolder mb-3 py-2 btn-tooltip position-relative d-inline-flex mw-lg-200px w-100 w-lg-auto').contains('Why trust us?');
    }

    hintText() {
        return cy.get('div.btn-tooltip-contents.position-relative')
    }

    closeButton() {
        return cy.get(".close");
    }

    bestBookiesAndBonusesSection() {
        return cy.get('.best-bookies-and-bonuses')
    }

    bestBookiesTabSelected() {
        return cy.contains('btn btn-lg btn-tab active', 'BEST BOOKIES')
    }

    /**
     * Methods
     */

    verifyIfBestBookiesTabIsSelected = () => this.bestBookiesTabSelected().should("be.visible");

    verifyHomePageHeaderIsVisible() {
        this.homePageHeader()
            .should("be.visible")
            .within(() => {
                    cy.contains("FREE BETS & OFFERS").should("be.visible")
                    cy.contains("BEST BOOKIES").should("be.visible")
                    cy.contains("SPORTS BETTING").should("be.visible")
                    cy.contains("FOOTBALL STATS").should("be.visible")
                    cy.contains("KICKFORM").should("be.visible")
                }
            )
    }

    verifyHomePageDescriptionSectionIsVisible() {
        this.homePageDescriptionSection().should("be.visible")
            .within(() => {
                    cy.contains('span', 'ThePuntersPage (TPP)').should('be.visible');
                    cy.contains('span', 'Best Sportsbooks, Guides and Stats').should('be.visible');
                    cy.contains('a[href="https://www.thepunterspage.com/new-betting-sites/"]', 'new bookmaker').should('be.visible');
                    cy.contains('a[href="https://www.thepunterspage.com/free-bets/"]', 'latest betting offers').should('be.visible');
                    cy.contains('a[href="https://www.thepunterspage.com/betting-tips/"]', 'Betting Tips').should('be.visible');
                    cy.contains('a[href="https://www.thepunterspage.com/free-bets/"]', 'Latest Free Bets').should('be.visible');
                    //cy.contains('a[href="https://www.thepunterspage.com/stats/football-stats/"]', 'Football Stats').should('be.visible');
                    this.adDisclosureOption().should('be.visible').click()
                        .within(() => {
                                this.hintText().contains(homePageText.AD_DISCLOSURE_TOOLTIP_BUTTON_TEXT).should('be.visible')
                            }
                        )
                    this.whyTrustUsOption().should('be.visible').within(() => {
                            this.hintText().contains(homePageText.WHY_TRUST_US_TOOLTIP_BUTTON_TEXT).should('be.visible')
                        }
                    )
                }
            )
    }

    verifyCloseButtonDisplaysForOperator() {
        this.closeButton().should("be.visible").click();
    }

    verifyOperatorElements(orderNumber
                               :
                               number, operatorLogo
                               :
                               object, bulletPoints
                               :
                               object, welcomeOffer
                               :
                               string, claimBonusButton
                               :
                               object, detailsButton
                               :
                               object
    ) {
        cy.get(".operator").should("exist")
    }

    hoverOverClaimBonusButtonAndVerifyYellowBackground() {
        this.claimBonusButton().trigger("mouseover").should("have.css", "background-color", "rgb(255, 255, 0)");
    }


    /* verifyFeaturesForSpecificOperator(operatorName:string) {
         switch(operatorName) {
             case "ROYAL PARI":
                 verifyOperatorFeatures(ROYALPARI.UKGAMBLINGCOMMISION.enabled, ROYALPARI.LIVESTREAM.ENABLED)
                 break;
             case "BETVICTOR":
                 verifyOperatorFeatures(BETVICTOR.UKGAMBLINGCOMMISION.enabled, BETVICTOR.LIVESTREAM.ENABLED)
                 break;
             case "THEPOOLS":
                 verifyOperatorFeatures(THEPOOLS.UKGAMBLINGCOMMISION.enabled, THEPOOLS.LIVESTREAM.ENABLED)
                 break;
             case "SPORTINGBET":
                 verifyOperatorFeatures(SPORTINGBET.UKGAMBLINGCOMMISION.enabled, SPORTINGBET.LIVESTREAM.ENABLED)
                 break;
             case "SPREAEX":
                 verifyOperatorFeatures(SPREAEX.UKGAMBLINGCOMMISION.enabled, SPREAEX.LIVESTREAM.ENABLED)
                 break;
             case "BETUK":
                 verifyOperatorFeatures(BETUK.UKGAMBLINGCOMMISION.enabled, BETUK.LIVESTREAM.ENABLED)
                 break;
             default:
                 console.error("Operator not found!");
         }
     }*/

}