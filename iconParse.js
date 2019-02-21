const request = require("request");
const fs = require("fs");

const iconParse = (uri, filename, callback) => {
  request.head(uri, (err, res, body) => {
    request(uri)
      .pipe(fs.createWriteStream(filename))
      .on("close", callback);
  });
};

module.exports = iconParse;
