import Page from './page'
import WaitUtil from '../utils/wait-util'

class HomePage extends Page {

    /**
    * define elements
    */

    get footballLink ()     { return browser.element('//*[@id="nav-football"]/a'); }


    open () {    
        super.open('http://sports.williamhill.com/betting/en-gb')       
        WaitUtil.waitForVisible(this.footballLink)
    }

    openFootballPage () {
      this.footballLink.click();
    }
}

export default new HomePage()
