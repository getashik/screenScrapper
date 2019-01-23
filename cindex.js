var phantom = require('phantom');

var url = 'http://data.un.org/Data.aspx?q=population&d=PopDiv&f=variableID%3A12';
url="http://bmgdcd2883.bakernet.com:8000/sap/bc/ui5_ui5/ui2/ushell/shells/abap/FioriLaunchpad.html#ZPRS_VENDORS-display&/MyVendorsSet('99')";
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


        document.getElementById('USERNAME_FIELD-inner').value="extraj";
        document.getElementById("PASSWORD_FIELD-inner").value="Ujjesha@17";
        document.getElementById("LOGIN_LINK").click();
        // document.getElementById('crID%3a250').setAttribute("checked", true); // France
        // document.getElementById('timeID%3a79').setAttribute("checked", true); // 2015
        // document.getElementById('varID%3a2').setAttribute("checked", true); // Medium
        // document.getElementById('ctl00_main_filters_anchorApplyBottom').click(); // click submit button
    });

    console.log('Waiting 10 seconds..');    
    await timeout(10000);

    // Get only the table contents
    var result = await page.evaluate(function() {
        return document;
        //return document.querySelectorAll('.DataContainer table')[0].outerHTML; 
    });
    await console.log('RESULT:', result);

    await instance.exit();
})();