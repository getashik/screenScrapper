var phantom = require('phantom');
var _ph, _page, _outObj;
var URL='https://stackoverflow.com/';
 URL="http://bmgdcd2883.bakernet.com:8000/sap/bc/ui5_ui5/ui2/ushell/shells/abap/FioriLaunchpad.html#ZPRS_VENDORS-display&/MyVendorsSet('99')";


phantom
  .create()
  .then(ph => {
    _ph = ph;
    return _ph.createPage();
  })
  .then(page => {
    _page = page;
    return _page.open(URL);
  })
  .then(status => {
    console.log("sttt--------------"+status);
    return _page.property('content');
  })
  .then(content => {

    _page.evaluate(function() {
      document.getElementById('USERNAME_FIELD-inner').value="extraj1111";
      document.getElementById("PASSWORD_FIELD-inner").value="Ujjesha@171";
      document.getElementById("LOGIN_LINK").click();
      return "ashikkkkkkkkkkkkk"
  }).then(function(html){
      console.log(html);
  });

  setTimeout(function(){ console.log(content);
  
    _page.close();
    _ph.exit();
  }, 10000)
    //console.log(content);
   
  })
  .catch(e => console.log(e));


 /*var URL='https://stackoverflow.com/';
 URL="http://bmgdcd2883.bakernet.com:8000/sap/bc/ui5_ui5/ui2/ushell/shells/abap/FioriLaunchpad.html#ZPRS_VENDORS-display&/MyVendorsSet('99')";
(async function() {
  const instance = await phantom.create();
  const page = await instance.createPage();
  //page.includeJs("http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js");
  await page.on('onResourceRequested', function(requestData) {

var h1={name:"Cookie",value:"sap-usercontext=sap-language=EN&sap-client=200;MYSAPSSO2=AjQxMDMBABhFAFgAVABSAEEASgAgACAAIAAgACAAIAACAAYyADAAMAADABBGAFMARAAgACAAIAAgACAABAAYMgAwADEAOQAwADEAMgAxADIAMQAwADcABQAEAAAACAYAAlgACQACRQD%2fAVYwggFSBgkqhkiG9w0BBwKgggFDMIIBPwIBATELMAkGBSsOAwIaBQAwCwYJKoZIhvcNAQcBMYIBHjCCARoCAQEwcDBkMQswCQYDVQQGEwJERTEcMBoGA1UEChMTU0FQIFRydXN0IENvbW11bml0eTETMBEGA1UECxMKU0FQIFdlYiBBUzEUMBIGA1UECxMLSTAwMjA1OTU5NDExDDAKBgNVBAMTA0ZTRAIICiAWEhgZFgEwCQYFKw4DAhoFAKBdMBgGCSqGSIb3DQEJAzELBgkqhkiG9w0BBwEwHAYJKoZIhvcNAQkFMQ8XDTE5MDEyMTIxMDcyOVowIwYJKoZIhvcNAQkEMRYEFK01wzkeM7HUc72hx4oghIrsRXBIMAkGByqGSM44BAMELjAsAhR9zPnuEYu8fjufx0vSGhnGLT%2fE7QIUetmmcQ0452PlOuTUrMizzTDFAh0%3d; SAP_SESSIONID_FSD_200=oPaz4dLQIQGYGkxsLomDTYpk_sQdwBHplDUAFV0AeFE%3d"}

// requestData.headers.push(h1);
// requestData.headers.push({name:"Connection",value:"keep-alive"});
// requestData.headers.push({name:"Host",value:"bmgdcd2883.bakernet.com:8000"});
// requestData.headers.push({name:"Accept-Encoding",value:"gzip, deflate"});
// requestData.headers.push({name:"Accept-Language",value:"en-GB,en-US;q=0.9,en;q=0.8"});
// requestData.headers.push({name:"Cache-Control",value:"max-age=0"});
// requestData.headers.push({name:"Upgrade-Insecure-Requests",value:"1"});
    console.info('Requesting', requestData.url);
  });
 
  const status = await page.open(URL,function() {
    
      page.evaluate(function() {
       
      });
     // phantom.exit()
      console.log("ttttttttttttttttttttttttttttttttttttttttttttttttttttt");
  });
  const content = await page.property('content');
  console.log("ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss");
 
  //document.getElementById("USERNAME_FIELD-inner").value="ashik";
  //document.getElementById("PASSWORD_FIELD-inner").value="a";
  //document.getElementById("LOGIN_LINK").click();
  //console.log(content);
 
  await instance.exit();
})();*/