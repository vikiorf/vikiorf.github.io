var config = require('../../../nightwatch.conf.BASIC.js');

module.exports = { // adapted from: https://git.io/vodU0
    'Tampa text visible': function(browser) {
      browser
        .url('https://vikiorf.github.io')
        .waitForElementVisible('body')
        .assert.title('Viktors sida!')      
        .click('xpath', '/html/body/div[4]/button')      
        
        .assert.containsText('#textAppearss', 'Bacon')
        //.expect.element('.ListItemTitle-sc-1t4skn3-0').text.to.contain('Quick scaffolding')      
        .pause(2000)
        .end();
    }
};