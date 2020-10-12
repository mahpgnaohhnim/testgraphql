import AuthorType from "./AuthorType";
import BookType from "./BookType";
import {GraphQLID, GraphQLObjectType, GraphQLList} from "graphql";

const Book = require('../model/book');
const Author = require('../model/author');

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            //argument passed by the user while making the query
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                //Here we define how to get data from database source

                //this will return the book with id passed in argument
                //by the user
                return Book.findById(args.id);
            }
        },
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args) {
                return Book.find({});
            }
        },
        author: {
            type: AuthorType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                return Author.findById(args.id);
            }
        },
        authors: {
            type: new GraphQLList(AuthorType),
            resolve(parent, args) {
                return Author.find({});
            }
        }
    }
});

export default RootQuery
