import {Operators} from "../support/enums/Operators";

enum homePageText {
    AD_DISCLOSURE_TOOLTIP_BUTTON_TEXT = "Here at ThePuntersPage.com (TPP) we're dedicated to building a trustworthy brand and strive to provide the very best content and offers for our readers. Please note that some of the links included on TPP may be affiliate links, which means we may earn a commission (at no additional cost to you) if you click on a link and subsequently open an account. We only recommend products and companies we use and trust. To learn more, visit our",
    WHY_TRUST_US_TOOLTIP_BUTTON_TEXT = "Trust ThePuntersPage.com (TPP) because we're a team of seasoned sports enthusiasts dedicated to providing data-driven, in-depth betting insights. Our content is impartial, based on extensive research and personal experiences, not influenced by bookies. Our business model is transparent, sustained through affiliate marketing and not user charges. We prioritise responsible gambling, user experience, and consistently strive to deliver accurate and reliable information to help you make informed betting decisions."
}

export class HomePage {

    /**
     * Locators
     */

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
        return cy.get('#best-bookies-and-bonuses')
    }

    bestBookiesTabSelected() {
        return cy.get('span.btn.btn-lg.btn-tab.active').contains('BEST BOOKIES')
    }

    bestBookiesAndBonusesTabs() {
        return cy.get('.wis-blocks-tabs-block__tabs d-flex')
    }

    operatorBullets() {
        return cy.get('default p-0 w-100 p-3 py-1 p-lg-3 py-lg-0 my-lg-3 my-2 fs-16 bulletlist')
    }

    operatorLogoIcon() {
        return cy.get("a[class*='featured-card--logo']")
    }

    operatorOrderNumber() {
        return cy.get('[class*=featured-card--index] div')
    }

    operatorReadReview() {
        return cy.get("a[class*='d-flex justify-content-center h-100']")
    }

    operatorNumber() {
        return cy.get('.featured-card--index .fw-bold')
    }

    operatorLogo() {
        return cy.get("[title='Parimatch logo']")
    }

    bulletListText() {
       return cy.get('.default li')
    }

    closeFeaturesButton() {
        return cy.get('[name="Close"]')
            //"button [class*='d-none see_less see-less-button align-items-center']")
    }

    claimBonusButton() {
        return cy.get("[class*='wp-block-wis-blocks-cta container'] a")
    }

    /**
     * Methods
     */

    verifyBestBookiesAndBonusesSectionIsVisible = () => this.bestBookiesAndBonusesSection().scrollIntoView().should("be.visible");
    verifyIfBestBookiesTabIsSelected = () => this.bestBookiesTabSelected().should("be.visible");
    verifyOperatorBullets = () => this.operatorBullets().filter(':visible');
    verifyOperatorLogoIcon = () => this.operatorLogo().eq(3).click;

    verifyOperatorShouldHaveUrl = (url: string) => this.operatorLogo().should('have.attr', 'href', url)
    verifyOperatorOrderNumber = (orderNumber: number) => this.operatorNumber().should('contain.text', orderNumber)
    verifyOperatorReadReview = (reviewUrl: string) => this.operatorReadReview().contains(reviewUrl).should('be.visible');
    verifyOperatorBulletListText = (text: string) => this.bulletListText().filter(':visible').should('contain.text', text);
    verifyCloseFeaturesButton = () => this.closeFeaturesButton().filter(':visible')

    verifyClaimBonusButtonIsVisible = () => this.claimBonusButton().filter(':visible');

    verifyIsNumberVisible() {
        return cy.get('fw-bold fs-18 text-white text-center').should('exist')
    }

    clickOnOperatorLogoTitle(title: string) {
        cy.get(`[title="${title}"]`).filter(':visible').parents('a').invoke("attr", "target", "_self").click();
    }

    clickOnReadReviewTitle(name: string) {
        cy.contains(name).filter(':visible').click();
    }

    clickClaimBonusButton(url: string) {
        return cy.get(`[href="${url}"]`).filter(':visible').contains('Claim bonus').invoke("attr", "target", "_self").click();
    }

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
                                this.hintText().contains(homePageText.AD_DISCLOSURE_TOOLTIP_BUTTON_TEXT).scrollIntoView().should('be.visible')
                            }
                        )
                    this.whyTrustUsOption().should('be.visible').within(() => {
                            this.hintText().contains(homePageText.WHY_TRUST_US_TOOLTIP_BUTTON_TEXT).scrollIntoView().should('be.visible')
                        }
                    )
                }
            )
    }

    verifyBestBookiesAndBonusesTabsAreVisible() {
        this.bestBookiesAndBonusesTabs().should("be.visible")
            .within(() => {
                    cy.contains('BEST BONUS').should("be.visible");
                    cy.contains('BEST APP').should("be.visible");
                    cy.contains('BEST ODDS').should("be.visible");
                    cy.contains('NEWEST BOOKIES').should("be.visible");
                }
            )
    }

    clickCloseOperatorDetailsButton() {
        this.closeButton().should("be.visible").click();
    }

    clickOnReadOperatorReviewButton(reviewText: string) {
        this.operatorReadReview().contains(reviewText).should('be.visible').click();
    }

    clickOnReviewButton(url: string) {
        cy.get(`a[href=${url}]`).eq(3).click();
    }

    clickOnOperatorLogo(url: string) {
        cy.get(`a[href="${url}"]`).last().click();
    }

    clickReviewButton() {
        cy.get('a[href="https://www.thepunterspage.com/parimatch-review/"]').click();
    }

    verifyUrlUponClickingOnReadOperatorReviewButton(url: string) {
        cy.url().should('include', url);
    }

    verifyClaimBonusButtonStyleSpecifications() {
        this.claimBonusButton().filter(':visible')
            .should("have.css", "background-color", "rgb(253, 184, 51)")
            .should("have.css", "font-size", "18px")
            .should("have.css", "font-style", "italic");
    }

}