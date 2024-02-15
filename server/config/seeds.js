const db = require("../config/connection");
const { User, Character } = require("../models");
const cleanDB = require("./cleanDB");
db.once("open", async () => {
  await cleanDB("Character", "characters");
  await cleanDB("User", "users");

  const characters = await Character.insertMany([
    {
      player: "johndoe",
      name: "Elrond Half-elven",
      char_class: "Wizard",
      sub_class: "Enchanter",
      level: 1,
      strength: 10,
      dexterity: 12,
      constitution: 14,
      intelligence: 16,
      wisdom: 15,
      charisma: 13,
      armor_class: 11,
      initiative: 2,
      speed: 30,
      hit_points: 10,
      perception: 14,
      hit_dice: 4,
    },

    {
      player: "johndoe",
      name: "Gandalf the Grey",
      char_class: "Wizard",
      level: 1,
      strength: 12,
      dexterity: 10,
      constitution: 14,
      intelligence: 16,
      wisdom: 15,
      charisma: 17,
      armor_class: 11,
      initiative: 2,
      speed: 30,
      hit_points: 10,
      perception: 14,
      hit_dice: 4,
    },

    {
      player: "johndoe",
      name: "Frodo Baggins",
      char_class: "Rogue",
      level: 1,
      strength: 10,
      dexterity: 14,
      constitution: 12,
      intelligence: 12,
      wisdom: 14,
      charisma: 14,
      armor_class: 12,
      initiative: 3,
      speed: 30,
      hit_points: 10,
      perception: 15,
      hit_dice: 4,
    },
  ]);

  console.log("characters seeded");

  await User.create({
    username: "johndoe",
    email: "john.doe@example.com",
    password: "1234password",
    characters: characters.filter(
      (character) => character.player === "johndoe"
    ),
  });

  console.log("users seeded");

  process.exit();
});
