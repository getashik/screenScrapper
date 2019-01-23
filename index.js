const rp = require('request-promise');
const cheerio = require('cheerio');
const Table = require('cli-table');
var url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';
 //url = "http://bmgdcd2883.bakernet.com:8000/sap/bc/ui5_ui5/ui2/ushell/shells/abap/FioriLaunchpad.html#ZPRS_VENDORS-display&/MyVendorsSet('99')";

 let table = new Table({
	head: ['Links'],
	colWidths: [100]
})


var options = {
    url: url,
    //transform: function (body) {
        //return cheerio.load(body);
    //}
  //  transform: body => $.load(body),
    //json: false
}

rp(options)
  .then(function(html){
    //success!
    //console.log(html);

    // console.log($('big > a', html).length);
    // console.log($('big > a', html));
    //console.log(html);
    process.stdout.write('loading');
    const wikiUrls = [];
    for (let i = 0; i < 45; i++) {

        table.push([cheerio('big > a', html)[i].attribs.href]);
     // wikiUrls.push($('big > a', html)[i].attribs.href);
    }

    //console.log(html);
	console.log(table.toString());
    //console.log(wikiUrls);
  })
  .catch(function(err){
   // console.log(err);
  });
