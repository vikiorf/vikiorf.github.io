var conf = require('../../nightwatch.conf.js');

module.exports = {
    'Click about': function(browser){
        browser
            .url('https://vikiorf.github.io/')
            .waitForElementVisible('body'); // wait for the body to be rendered
            .click("a[contains(text(), 'About')]", function(About){
                .assert.strictEqual(About.status, 0)
            })
    }
}
