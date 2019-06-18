var config = require('../../nightwatch.conf.BASIC.js');

module.exports = {
    'Click button, show bacon' : function(browser) {
        browser
        .url('https://vikiorf.github.io')
        .waitForElementVisible('body')
        .assert.title('Viktors sida!')
        .click('xpath', '/html/body/div[4]/button')
        .assert("@textAppearss", 'Bacon')
        .pause(2000)
        .end
    }
};