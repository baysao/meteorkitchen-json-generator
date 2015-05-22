var deepjson = require( 'deep-json' );
var util = require('util');
var jf = require("jsonfile");
var myArgs = process.argv.slice(2);
if(myArgs.length != 2) {
    console.log("node mekit [input_json_file] [output_json_file]");
    process.exit(0);
}
var jfinal = deepjson(myArgs[0]);
console.log(util.inspect(jfinal, false, null));
var fileout = myArgs[1];
jf.writeFile(fileout, jfinal, function(err) {
    console.log(err)
})