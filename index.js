const rp = require("request-promise");
const request = require("request");
const fs = require("fs");
const url = "https://www.smashbros.com/assets_v2/img/fighter/pict/mario.png";

// rp(url)
//   .then(html => {
//     console.log(html);
//   })
//   .catch(err => {
//     console.log(err);
//   });

const download = (uri, filename, callback) => {
  request.head(uri, (err, res, body) => {
    request(uri)
      .pipe(fs.createWriteStream(filename))
      .on("close", callback);
  });
};

download(url, "./images/mario.png", function() {
  console.log("done");
});
