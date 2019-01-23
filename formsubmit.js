var phantom = require('phantom');

var url = 'http://data.un.org/Data.aspx?q=population&d=PopDiv&f=variableID%3A12';

// A promise to wait for n of milliseconds
const timeout = ms => new Promise(resolve => setTimeout(resolve, ms));

(async function(req, res) {
    const instance = await phantom.create();
    const page = await instance.createPage();

    await page.on('onResourceRequested', function(requestData) {
        console.info('Requesting', requestData.url);
    });
    await page.on('onConsoleMessage', function(msg) {
        console.info(msg);
    });

    const status = await page.open(url);
    await console.log('STATUS:', status);

    // submit
    await page.evaluate(function() {
        document.getElementById('crID%3a250').setAttribute("checked", true); // France
        document.getElementById('timeID%3a79').setAttribute("checked", true); // 2015
        document.getElementById('varID%3a2').setAttribute("checked", true); // Medium
        document.getElementById('ctl00_main_filters_anchorApplyBottom').click(); // click submit button
    });

    console.log('Waiting 1.5 seconds..');    
    await timeout(1500);

    // Get only the table contents
    var result = await page.evaluate(function() {
        return document.querySelectorAll('.DataContainer table')[0].outerHTML; 
    });
    await console.log('RESULT:', result);

    await instance.exit();
})();