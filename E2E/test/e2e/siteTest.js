var conf = require('../../nightwatch.conf.js');

module.exports = {
  'Demo test GitHub': function (browser) {
    browser
      .url('https://vikiorf.github.io/')   // visit the url
      .waitForElementVisible('body'); // wait for the body to be rendered
      // check if we are seeing the Mobile Version of GitHub            
      browser.element('css selector', '.switch-to-desktop', function(result) {
        if(result.status != -1) { //Element exists, do something
          browser.click('.switch-to-desktop')
          .waitForElementVisible('body'); // wait for the body to be rendered
        }
      });
    // part two:    
    browser
      .assert.containsText('body', 'Home') // assert body contains text
      .timeouts("implicit",5000)
      .saveScreenshot(conf.imgpath(browser) + 'Home')
      .end();
    }
    /*
    //Part three
    browser
    .assert.title()
    .end();
    */
  };
