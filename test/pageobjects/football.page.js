import Page from './page'
import WaitUtil from '../utils/wait-util'

class FootballPage extends Page {

    /**
    * define elements
    */

    get competitionsLink ()     { return browser.element('//*[@id="nav-football-competitions"]/a'); }


    open () {
        super.open('http://sports.williamhill.com/betting/en-gb/football')       
        browser.pause(2000);
    }

    openCompetitionsPage () {
      WaitUtil.waitForVisible(this.competitionsLink)
      this.competitionsLink.click();
    }
}

export default new FootballPage()
