const iconParse = require("./iconParse");
const fightersData = require("./fighters.json");

const baseRequestUrl = "https://www.smashbros.com/assets_v2/img/fighter/pict/";

const getName = fighter => {
  const rawName =
    fighter.displayNameEnSecondary === ""
      ? fighter.displayNameEn
      : fighter.displayNameEnSecondary;

  return rawName.toLowerCase().replace(/\.| /g, "") + ".png";
};

fightersData.fighters.map(fighter =>
  iconParse(
    baseRequestUrl + fighter.file + ".png",
    "./images/" + getName(fighter),
    () => console.log(`Done with ${fighter.file}`)
  )
);
