var https = require("https");
var buffer = [];
//var fs = require("fs");

var requestOptions = {
  host: "sytantris.github.io",
  path: "/http-examples/step3.html"
};

function getAndPrintHTML(options) {
  https.get(options, function(response) {
    response.setEncoding("utf8");

    response.on("data", function(data) {
      buffer.push(data);
      console.log(data);
    });
  });
}

getAndPrintHTML(requestOptions);
