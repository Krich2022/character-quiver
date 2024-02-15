const typeDefs = `
type User {
    _id: ID
    username: String
    email: String
    password: String
    characters: [Character]!
}

type Character {
    _id: ID
    player: String
    name: String
    char_class: String
    sub_class: String
    level: Int
    strength: Int
    dexterity: Int
    constitution: Int
    intelligence: Int
    wisdom: Int
    charisma: Int
    armor_class: Int
    created_at: String
    initiative: Int
    speed: Int
    hit_points: Int
    perception: Int
    hit_dice: Int
    race: String
}

type Auth {
    token: ID!
    user: User
}

type Query {
    users: [User]
    user(username: String!): User
    characters(player: String): [Character]
    character(characterId: ID!): Character
}

type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addCharacter(player: String!, name: String!, char_class: String!, sub_class: String!, level: Int!, strength: Int!, dexterity: Int!, constitution: Int!, intelligence: Int!, wisdom: Int!, charisma: Int!, armor_class: Int!, initiative: Int!, speed: Int!, hit_points: Int!, perception: Int!, hit_dice: Int!, race: String!): Character
    updateCharacter(_id: ID!, player: String, name: String, char_class: String, sub_class: String, level: Int, strength: Int, dexterity: Int, constitution: Int, intelligence: Int, wisdom: Int, charisma: Int, armor_class: Int, initiative: Int, speed: Int, hit_points: Int, perception: Int, hit_dice: Int, race: String!): Character
    deleteCharacter(_id: ID!): Boolean
}
`;

module.exports = typeDefs;
