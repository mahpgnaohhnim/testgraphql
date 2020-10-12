import {GraphQLID, GraphQLInt, GraphQLObjectType, GraphQLString, GraphQLList} from "graphql";
import BookType from "./BookType";

const Book = require('../model/book');

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        age: {type: GraphQLInt},
        book: {
            type: new GraphQLList(BookType),
            resolve(parent, args) {
                return Book.find({authorID: parent.id});
            }
        }
    })
})

export default AuthorType;
