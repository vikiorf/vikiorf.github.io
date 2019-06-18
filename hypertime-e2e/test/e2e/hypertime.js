var config = require('../../nightwatch.conf.BASIC.js');
const ENTER_KEY = "\uE007";

module.exports = { // adapted from: https://git.io/vodU0
  'Guinea Pig Assert Title': function(browser) {
    browser
      .url('https://vikiorf.z16.web.core.windows.net/')
      .waitForElementVisible('body')
      .assert.title('Hypertime')
      .setValue("#username", "vikiorf")
      .keys(ENTER_KEY)
      .assert.elementPresent("ul")
      .saveScreenshot('hypertime.png')
      .click('xpath', '//*[@id="app"]/div/div/div/a[2]/span')
      .waitForElementVisible('.ListItemTitle-sc-1t4skn3-0')
      .assert.containsText('p.ListItemTitle-sc-1t4skn3-0.fWjsMZ', 'Quick scaffolding')
      //.expect.element('.ListItemTitle-sc-1t4skn3-0').text.to.contain('Quick scaffolding')
      .pause(2000)
      .end();
  }
};