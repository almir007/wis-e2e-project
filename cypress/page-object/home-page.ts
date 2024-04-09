
const logoElement = "[class*='col-lg-2 logo']";

export class HomePage {

    /**
     * Locators
     */

    homePageHeader() {
        return cy.get('.container-header.w-100.mx-auto.px-4.p-0')
    }

    homePageDescriptionSection() {
        return cy.get('.wp-block-wis-blocks-homepage-hero')
    }

    adDisclosureOption() {
        return cy.get('button.d-flex.align-items-center.btn.btn-sm.fs-13.fw-bolder.mb-3.py-2.btn-tooltip.position-relative.me-lg-2.d-inline-flex.mw-lg-200px.w-100.w-lg-auto');
    }

    whyTrustUsOption() {
        return cy.contains('span', 'Why trust us?');
    }

    bestBookiesAndBonusesSection() {
        return cy.get('#best-bookies-and-bonuses')
    }

    bestBookiesTabSelected() {
        return cy.get('span.btn.btn-lg.btn-tab.active').contains('BEST BOOKIES')
    }

    bestBookiesAndBonusesTabs() {
        return cy.get('div.wis-blocks-tabs-block__tabs')
    }

    claimBonusButton() {
        return cy.get("[class*='wp-block-wis-blocks-cta container'] a")
    }

    getOperatorLogoTitle(title: string) {
        return cy.get(`[title="${title}"]`)
    }

    cookiesBanner() {
        return cy.get("[class*='cookie-policy__content']")
    }

    acceptCookiesButton() {
        return cy.get("[class*='btn btn-cta']").contains('Accept')
    }

    seeMoreOperatorsButton() {
        return cy.get("[class='btn btn-lg btn-normal fs-18']").contains('See more (57)')
    }

    /**
     * Methods
     */

    verifyBestBookiesAndBonusesSectionIsVisible = () => this.bestBookiesAndBonusesSection().scrollIntoView().should("be.visible");
    verifyIfBestBookiesTabIsSelected = () => this.bestBookiesTabSelected().scrollIntoView().should("be.visible");
    verifyCookieBannerIsVisible = () => this.cookiesBanner().should("be.visible");
    clickOnAcceptCookiesButton = () => this.acceptCookiesButton().should('be.visible').click();
    verifyAcceptCookiesButtonIsNotVisible = () => this.acceptCookiesButton().should("not.be.visible");
    clickOnSeeMoreButton = () => this.seeMoreOperatorsButton().scrollIntoView().should("be.visible").click();
    verifySeeMoreOperatorsButtonIsNotVisible = () => this.seeMoreOperatorsButton().scrollIntoView().should("not.be.visible");

    clickOnOperatorLogoTitle(title: string) {
        this.getOperatorLogoTitle(title)
            .filter(':visible')
            .parents('a')
            .invoke("attr", "target", "_self")
            .click();
    }

    clickOnOperatorReadReviewTitle(title: string, reviewText: string) {
        this.getOperatorLogoTitle(title)
            .filter(':visible')
            .parents('a').siblings('a')
            .contains(reviewText)
            .invoke("attr", "target", "_self")
            .click();
    }

    clickClaimBonusButton(url: string) {
        return cy.get(`[href="${url}"]`)
            .filter(':visible')
            .invoke("attr", "target", "_self")
            .click();
    }

    verifyLastOperatorIsVisibleWhenExpanded(operatorLogoName: string, orderNumber: number) {
        this.getOperatorLogoTitle(operatorLogoName)
            .filter(':visible')
            .scrollIntoView()
            .parents('a')
            .siblings("[class*='featured-card--index']")
            .should("contain", orderNumber)
            .should("be.visible");
    }

    verifyBackgroundColourWhenHoveredOverClaimBonusButton(title: string) {
        //this.getClaimBonusButton().first().realHover().should("have.css", "background-color", "rgb(255, 246, 226)");
        //this.claimBonusButton().filter(':visible').should('have.length', 6).first().realHover().should("have.css", "background-color", "rgb(255, 246, 226)");
        this.getOperatorLogoTitle(title)
            .filter(':visible')
            .parents(logoElement)
            .siblings("[class*='featured-card--links']")
            .find("a")
            .realHover()
            .should("have.css", "background-color", "rgb(255, 246, 226)");
    }

    verifyClickingCloseButtonHidesFeatures(operatorLogoName: string) {
        this.getOperatorLogoTitle(operatorLogoName)
            .filter(':visible')
            .parents(logoElement)
            .siblings("[class*='d-none d-lg-block p-0 show-more-wrapper']")
            .contains('Close')
            .click();
        this.getOperatorLogoTitle(operatorLogoName)
            .filter(':visible')
            .parents(logoElement)
            .siblings("[class*='d-none d-lg-block p-0 show-more-wrapper']")
            .contains('Details')
            .should("be.visible");
    }

    verifyOperatorOrderNumber(operatorLogoName: string, orderNumber: number) {
        this.getOperatorLogoTitle(operatorLogoName)
            .filter(':visible')
            .parents('a')
            .siblings("[class*='featured-card--index']")
            .should("contain", orderNumber)
            .should("be.visible");
    }

    verifyOperatorBulletListText(operatorLogoName: string, bulletList: string[]) {
        this.getOperatorLogoTitle(operatorLogoName).filter(':visible')
            .parents(logoElement)
            .siblings('.bg-dark-35')
            .within(() => {
            cy.contains(bulletList[0]).should("be.visible");
            cy.contains(bulletList[1]).should("be.visible");
            cy.contains(bulletList[2]).should("be.visible");
        })
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
                    cy.contains('a[href="https://www.thepunterspage.com/stats/football-stats/"]', ' FootballStats').should('be.visible');
                    this.adDisclosureOption().should('be.visible')
                    this.whyTrustUsOption().should('be.visible')
                }
            )
    }

    verifyBestBookiesAndBonusesTabsAreVisible() {
        this.bestBookiesAndBonusesTabs().scrollIntoView().should("be.visible")
            .within(() => {
                    cy.contains('BEST BONUS').should("be.visible");
                    cy.contains('BEST APP').should("be.visible");
                    cy.contains('BEST ODDS').should("be.visible");
                    cy.contains('NEWEST BOOKIES').should("be.visible");
                }
            )
    }

    verifyClaimBonusButtonIsVisibleAndHasStyleSpecifications() {
        this.claimBonusButton().filter(':visible')
            .should('be.visible')
            .should("have.css", "background-color", "rgb(253, 184, 51)")
            .should("have.css", "font-size", "18px")
            .should("have.css", "font-style", "italic");
    }

}