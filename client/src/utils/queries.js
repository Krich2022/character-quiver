import { gql } from "@apollo/client";

// Query to get all users
export const GET_ALL_USERS = gql`
  query GetAllUsers {
    users {
      _id
      username
      email
      characters {
        _id
        player
        name
        class
        sub_class
        level
        strength
        dexterity
        constitution
        intelligence
        wisdom
        charisma
        armor_class
        created_at
        initiative
        speed
        hit_points
        perception
        hit_dice
      }
    }
  }
`;

// Query to get a user by username
export const GET_USER_BY_USERNAME = gql`
  query GetUserByUsername($username: String!) {
    user(username: $username) {
      _id
      username
      email
      sheets {
        _id
        player
        name
        class
        sub_class
        level
        strength
        dexterity
        constitution
        intelligence
        wisdom
        charisma
        armor_class
        created_at
        initiative
        speed
        hit_points
        perception
        hit_dice
      }
    }
  }
`;

// Query to get all characters for a user
export const GET_CHARACTERS_FOR_USER = gql`
  query GetCharactersForUser($username: String!) {
    user(username: $username) {
      characters {
        _id
        charClass
        level
        name
      }
    }
  }
`;

// Query to get a single character by ID
export const GET_CHARACTER_BY_ID = gql`
  query GetCharacterById($characterId: ID!) {
    Character(characterId: $characterId) {
      _id
      player
      name
      class
      sub_class
      level
      strength
      dexterity
      constitution
      intelligence
      wisdom
      charisma
      armor_class
      created_at
      initiative
      speed
      hit_points
      perception
      hit_dice
    }
  }
`;
