var config = require('../../nightwatch.conf.BASIC.js');
const ENTER_KEY = "\uE007";

module.exports = { // adapted from: https://git.io/vodU0
  'Guinea Pig Assert Title': function(browser) {
    browser
      .url('https://vikiorf.github.io')
      .waitForElementVisible('body')
      .assert.title('Viktors sida!')
      
      .click('xpath', '/html/body/div[1]/ul/li[5]/a')
      
      //.waitForElementVisible('xpath','/html/body/div[2]/h2')

      .assert.containsText('body > div:nth-child(2) > h2', 'Tampa')
      //.expect.element('.ListItemTitle-sc-1t4skn3-0').text.to.contain('Quick scaffolding')
      
      .pause(2000)
      .end();
  }
};