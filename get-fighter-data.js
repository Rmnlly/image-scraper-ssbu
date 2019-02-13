const request = require("request");
const fs = require("fs");

const dataURL = "https://www.smashbros.com/assets_v2/data/fighter.json";

request(dataURL).pipe(fs.createWriteStream("./fighters.json"));
