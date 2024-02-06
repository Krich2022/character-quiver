const { User, Character } = require("../models");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("character");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("character");
    },
    characters: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Character.find(params).sort({ created_at: -1 });
    },
    character: async (parent, { characterId }) => {
      return Character.findOne({ _id: characterId });
    },
  },
};

module.exports = resolvers;
