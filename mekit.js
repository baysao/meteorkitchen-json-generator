var deepjson = require( 'deep-json' );
var util = require('util');
var jf = require("jsonfile");
var myArgs = process.argv.slice(2);

var jfinal = deepjson(myArgs[0]);
console.log(util.inspect(jfinal, false, null));
var fileout = myArgs[1];
jf.writeFile(fileout, jfinal, function(err) {
    console.log(err)
})