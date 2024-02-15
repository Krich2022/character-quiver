const { User, Character } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("characters");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("characters");
    },
    characters: async (parent, { player }) => {
      const params = player ? { player } : {};
      return Character.find(params).sort({ created_at: -1 });
    },
    character: async (parent, { characterId }) => {
      return Character.findOne({ _id: characterId });
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);
      return { token, user };
    },
    addCharacter: async (parent, args, context) => {
      const character = await Character.create(args);
      return character;
    },
    updateCharacter: async (parent, { _id, ...args }, context) => {
      const character = await Character.findByIdAndUpdate(_id, args, {
        new: true,
      });
      return character;
    },
    deleteCharacter: async (parent, { _id }, context) => {
      const character = await Character.findByIdAndDelete(_id);
      return !!character;
    },
  },
};

module.exports = resolvers;
