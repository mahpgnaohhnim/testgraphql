import AuthorType from "./AuthorType";
import {GraphQLID, GraphQLInt, GraphQLObjectType, GraphQLString} from "graphql";

const Author = require('../model/author');

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        pages: {type: GraphQLInt},
        author: {
            type: AuthorType,
            resolve(parent, args) {
                return Author.findById(parent.authorID);
            }
        }
    })
});

export default BookType;
