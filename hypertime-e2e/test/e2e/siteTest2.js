var config = require('../../nightwatch.conf.BASIC.js');

module.exports = { // adapted from: https://git.io/vodU0
    'About text visible': function(browser) {
      browser
        .url('https://vikiorf.github.io')
        .waitForElementVisible('body')
        .assert.title('Viktors sida!')
        
        .click('xpath', '/html/body/div[1]/ul/li[4]/a')
        
        //.waitForElementVisible('xpath','/html/body/div[2]/h2')
  
        .assert.containsText('body > div:nth-child(2) > h2', 'About')
        //.expect.element('.ListItemTitle-sc-1t4skn3-0').text.to.contain('Quick scaffolding')
        
        .pause(2000)
        .end();
    },
    
    'Contact text visible': function(browser) {
        browser
          .url('https://vikiorf.github.io')
          .waitForElementVisible('body')
          .assert.title('Viktors sida!')
          
          .click('xpath', '/html/body/div[1]/ul/li[3]/a')
          
          //.waitForElementVisible('xpath','/html/body/div[2]/h2')
    
          .assert.containsText('body > div:nth-child(2) > h2', 'Contact')
          //.expect.element('.ListItemTitle-sc-1t4skn3-0').text.to.contain('Quick scaffolding')
          
          .pause(2000)
          .end();
      }
};