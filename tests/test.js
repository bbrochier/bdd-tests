module.exports = {
    'Page Maison': (client) => {
        const page = client.page.maison();

        page.navigate()
            .verify.title('Maison connectée et protégée, domotique et surveillance Orange')
            .verify.elementPresent('[data-oevent-category="top_carrousel_1"]')
            .assert.screenshotIdenticalToBaseline('#maison_offres > div:nth-child(1) > div:nth-child(2) > div > h2', 'h2')
        client.end();
    },
    'Page Accueil': (client) => {
        const page = client.page.accueil();

        page.navigate()
            .verify.elementPresent('#hp-prospect')
            .verify.elementPresent('#oan_ora_1_300x250_hp.prospects');
        client.end();
    }
};