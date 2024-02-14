const { Schema, model } = require("mongoose");
const characterSchema = new Schema({
  player: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  charClass: {
    type: String,
    required: true,
  },
  sub_class: {
    type: String,
  },
  level: {
    type: Number,
    required: true,
  },
  strength: {
    type: Number,
    required: true,
  },
  dexterity: {
    type: Number,
    required: true,
  },
  constitution: {
    type: Number,
    required: true,
  },
  intelligence: {
    type: Number,
    required: true,
  },
  wisdom: {
    type: Number,
    required: true,
  },
  charisma: {
    type: Number,
    required: true,
  },
  armor_class: {
    type: Number,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  initiative: {
    type: Number,
    required: true,
  },
  speed: {
    type: Number,
    required: true,
  },
  hit_points: {
    type: Number,
    required: true,
  },
  perception: {
    type: Number,
    required: true,
  },
  hit_dice: {
    type: Number,
    required: true,
  },
});

const Character = model("Character", characterSchema);

module.exports = Character;
