const { Schema, model } = require("mongoose");
const characterSchema = new Schema({
  player: {
    type: String,
    required: true,
    trim: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  char_class: {
    type: String,
  },
  sub_class: {
    type: String,
  },
  level: {
    type: Number,
  },
  strength: {
    type: Number,
  },
  dexterity: {
    type: Number,
  },
  constitution: {
    type: Number,
  },
  intelligence: {
    type: Number,
  },
  wisdom: {
    type: Number,
  },
  charisma: {
    type: Number,
  },
  armor_class: {
    type: Number,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  initiative: {
    type: Number,
  },
  speed: {
    type: Number,
  },
  hit_points: {
    type: Number,
  },
  perception: {
    type: Number,
  },
  hit_dice: {
    type: Number,
  },
  race: {
    type: String,
  },
  spells: {
    type: [String],
  },
  equipment: {
    type: [String],
  },
});

const Character = model("Character", characterSchema);

module.exports = Character;
