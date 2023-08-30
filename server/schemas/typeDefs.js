const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    savedBooks: [Book]!
  }

  type Book {
    bookId: ID
    description: String
    authors: [String]
    image: String
    link: String
    title: String
  }

  type Auth {
    token: ID!
    user: User
  }

  input BookInput {
    bookId: ID!
    description: String!
    authors: [String]
    image: String
    link: String
    title: String!
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(bookData: BookInput!): User
    deleteBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
