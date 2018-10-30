
import { defineSupportCode } from 'cucumber';
import competitionsPage from '../pageobjects/competitions.page';

defineSupportCode(function({ Then }) {

  Then('I should see proper return amount', function() {
  	let expectedAmount = parseFloat(competitionsPage.getCurrentOdds()) * parseFloat(competitionsPage.getBetAmount());
    competitionsPage.getReturnAmount().trim().should.equal((Math.trunc(expectedAmount*100)/100).toString());
  });

  Then('I should see {float} total stake amount', function(arg1) {
    competitionsPage.getTotalStakeAmount().should.equal(arg1.toFixed(2).toString());
  });

});
