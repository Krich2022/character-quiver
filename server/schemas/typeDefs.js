const typeDefs = `
type User {
    _id: ID
    username: String
    email: String
    password: String
    sheets: [Character]!
}

type Auth {
    token: ID!
    user:User
}

type Query {
    users:[User]
    user(username: String!): User
    characters(username: String): [Character]
    Character(characterId: ID!): Character
}

type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password:String!): Auth

}
`;

module.exports = typeDefs;
