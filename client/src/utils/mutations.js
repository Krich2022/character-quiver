import { gql } from "@apollo/client";

// Login mutation
export const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

// Add user mutation
export const ADD_USER_MUTATION = gql`
  mutation AddUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

// Add character mutation
export const ADD_CHARACTER_MUTATION = gql`
  mutation AddCharacter(
    $player: String!
    $name: String!
    $char_class: String!
    $sub_class: String!
    $level: Int!
    $strength: Int!
    $dexterity: Int!
    $constitution: Int!
    $intelligence: Int!
    $wisdom: Int!
    $charisma: Int!
    $armor_class: Int!
    $initiative: Int!
    $speed: Int!
    $hit_points: Int!
    $perception: Int!
    $hit_dice: Int!
    $race: String!
  ) {
    addCharacter(
      player: $player
      name: $name
      char_class: $char_class
      sub_class: $sub_class
      level: $level
      strength: $strength
      dexterity: $dexterity
      constitution: $constitution
      intelligence: $intelligence
      wisdom: $wisdom
      charisma: $charisma
      armor_class: $armor_class
      initiative: $initiative
      speed: $speed
      hit_points: $hit_points
      perception: $perception
      hit_dice: $hit_dice
      race: $race
    ) {
      _id
      player
      name
      char_class
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
      race
    }
  }
`;
