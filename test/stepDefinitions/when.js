
import { defineSupportCode } from 'cucumber';
import footballPage from '../pageobjects/football.page';
import homePage from '../pageobjects/home.page';
import competitionsPage from '../pageobjects/competitions.page';

defineSupportCode(function({ When }) {

  When('I navigate to Premier league page', function() {
    homePage.openFootballPage();
    footballPage.openCompetitionsPage();
    competitionsPage.selectPremierLigue();
  });

  When('I place a {float} bet for any first team to Win at home', function(arg1) {
  	competitionsPage.openFirstEvent();
  	competitionsPage.clickHomeTeamWinsButton(0);
  	competitionsPage.selectDecimalOdds();
    competitionsPage.placeBetAmount(arg1);
  });
  
});
