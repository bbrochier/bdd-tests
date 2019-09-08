const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');

Given(/^on ouvre la page "([^"]*)"$/, page => {
  return client.url('http://orange.fr/' + page).waitForElementVisible('body', 1000);
});

Then(/^le titre est "([^"]*)"$/, title => {
  return client.assert.title(title);
});

const cookieConsentBtn = '#o-cookie-consent-ok';

Then(/^on accepte les cookies$/, () => {
  return client
    .waitForElementVisible(cookieConsentBtn)
    .click(cookieConsentBtn);
});

Then(/^le carrousel est présent$/, () => {
  return client.assert.visible('[data-oevent-category="top_carrousel_1"]');
});
