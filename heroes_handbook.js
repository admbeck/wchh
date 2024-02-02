/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/
/*  -INFORMATION-
	Subject:        3rd-party compendium
	Effect:         This script adds most player options from the book "Warcraft Heroes Handbook"
		        This is based on the v2.1 version of the book
		        All content is made by WC5E team (https://discord.gg/dKMJmmD)

	Content:	0 subclasses
                        0 backgrounds
                        0 feats

	Code by:	AdmiralBeck
	Date:		2024-02-02 (sheet v13.0.12)

	-BE AWARE-
*/
if (sheetVersion < 13001012) {
  throw "This script was made for a newer version of the sheet (v13.1.12). Please use the latest version and try again.\nYou can get the latest version at www.flapkan.com.";
}
var iFileName = "heroes_handbook.js";
RequiredSheetVersion("13.1.12");

// This file adds all material from Warcraft Heroes Handbook to MPMB's Character Record Sheet

// Define the source
SourceList["WcHH"] = {
  name: "WarCraft Heroes Handbook",
  abbreviation: "WcHH",
  abbreviationSpellsheet: "W",
  group: "Third Party Compendium",
  campaignSetting: "Warcraft",
  url: "https://github.com/WC5E/Warcraft-5e-Conversion",
  date: "2024/02/01",
};

RaceList["mountain dwarf"] = {
  regExpSearch:
    /^((?=.*(warcraft|alteraci|dalaranian|gilnean|tirasian|lordaeronian|stormwindian|stromic))|((?=.*\b(human)\b)$/i,
  name: "Warcraft Human",
  sortname: "Human, Warcraft",
  source: [["WcHH", 9]],
  plural: "Warcraft Humans",
  size: 3,
  speed: {
    walk: { spd: 30, enc: 20 },
  },
  languageProfs: ["Common"],
  // weaponProfs: [
  //   false,
  //   false,
  //   ["battleaxe", "handaxe", "warhammer", "light hammer"],
  // ],
  // armorProfs: [true, true, false, false],
  // toolProfs: [["You gain proficiency in one skill or tool of your choice.", 1]],
  // age: " reach adulthood in their late teens and live less than a century.",
  // height: " stand between 4 and 5 feet tall (4' + 2d4\")",
  // weight: " weigh around 150 lb (130 + 2d4 \xD7 2d6 lb)",
  // heightMetric: " stand between 1,2 and 1,5 metres tall (120 + 5d4 cm)",
  // weightMetric: " weigh around 75 kg (60 + 5d4 \xD7 4d6 / 10 kg)",
  // scores: [2, 0, 2, 0, 0, 0],
  // trait:
  //   "Mountain Dwarf (+2 Strength, +2 Constitution)\n\nStonecunning:\n   Whenever I make an Intelligence (History) check related to the origin of stonework, I am considered proficient in the History skill and add double my proficiency bonus to the check, instead of my normal proficiency bonus.",
};
