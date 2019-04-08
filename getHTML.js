var https = require("https");
var buffer = [];

function getHTML(options, action) {
  https.get(options, function(response) {
    response.setEncoding("utf8");

    response.on("data", function(data) {
      buffer.push(data);
      return action(data);
    });
  });
}

function printHTML(html) {
  console.log(html);
}

var requestOptions = {
  host: "sytantris.github.io",
  path: "/http-examples/step4.html"
};

getHTML(requestOptions, printHTML);
