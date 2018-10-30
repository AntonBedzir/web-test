import Page from './page'
import WaitUtil from '../utils/wait-util'

class CompetitionsPage extends Page {

    /**
    * define elements
    */

    get eventLink ()     { return browser.element('//div[@data-test-id="events-group"][1]//article[1]/main/a'); }

    get homeTeamWinsButton () { return browser.element('//div[@id="markets-container"]/div[1]//div[@class="btmarket__selection"][1]//button')}

    get betAmountInput () { return browser.element('//input[@name="English Premier League"]')}

    get returnAmount () { return browser.element('//*[@id="betslip-footer"]//div[@class="betslip-footer__to-return-price-container"]')}

    get totalShake () { return browser.element('//*[@id="total-stake-price"]')}

    get currentOdds () { return browser.element('//selection-price')}

    get premierLigueLink () {return browser.element('//a[contains(@href,"English-Premier-League")]')}

    get oddsToggle () {return browser.element('//a[@data-toggle-send="odds-format"]')}

    get decimalOdds () {return browser.element('//a[@data-odds-format="decimal"]')}

    open () {
        super.open('http://sports.williamhill.com/betting/en-gb/football/competitions')       
        browser.pause(2000);
    }

    selectPremierLigue(){
        WaitUtil.waitForVisible(this.premierLigueLink);
        this.premierLigueLink.click();
    }

    openFirstEvent() {
        WaitUtil.waitForVisible(this.eventLink);
        this.eventLink.click()
    }

    clickHomeTeamWinsButton(){
        WaitUtil.waitForVisible(this.homeTeamWinsButton);
        this.homeTeamWinsButton.click();
        WaitUtil.waitForVisible(this.betAmountInput);
    }

    selectDecimalOdds() {
        this.oddsToggle.click();
        WaitUtil.waitForVisible(this.decimalOdds);
        this.decimalOdds.click()
    }

    placeBetAmount(amount) {
        this.betAmountInput.addValue(amount);
    }

    getBetAmount(amount) {
        return this.betAmountInput.getValue(amount);
    }

    getCurrentOdds(){
        return this.currentOdds.getText();
    }

    getReturnAmount(){
        return this.returnAmount.getText();
    }

    getTotalStakeAmount() {
        return this.totalShake.getText();
    }


}

export default new CompetitionsPage()
