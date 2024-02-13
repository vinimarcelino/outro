const { Builder} = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');

// Configurar o navegador Firefox
const firefoxOptions = new firefox.Options();


// Inicializar o driver
const driver = new Builder()
    .forBrowser('firefox')
    .setFirefoxOptions(firefoxOptions)
    .build();

//Exemplo de automação    
async function mouseInteration () {
    //aceder ao site
    await driver.get('https://the-internet.herokuapp.com/')




}

mouseInteration();