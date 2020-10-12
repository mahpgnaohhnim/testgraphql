import {GraphQLID, GraphQLInt, GraphQLObjectType, GraphQLString, GraphQLNonNull} from "graphql";
import AuthorType from "./AuthorType";
import BookType from "./BookType";

const Book = require('../model/book');
const Author = require('../model/author');


const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addAuthor: {
            type: AuthorType,
            args: {
                //GraphQLNonNull make these field required
                name: {type: new GraphQLNonNull(GraphQLString)},
                age: {type: new GraphQLNonNull(GraphQLInt)}
            },
            resolve(parent, args) {
                let author = new Author({
                    name: args.name,
                    age: args.age
                });
                return author.save();
            }
        },
        addBook: {
            type: BookType,
            args: {
                name: {type: new GraphQLNonNull(GraphQLString)},
                pages: {type: new GraphQLNonNull(GraphQLInt)},
                authorID: {type: new GraphQLNonNull(GraphQLID)}
            },
            resolve(parent, args) {
                let book = new Book({
                    name: args.name,
                    pages: args.pages,
                    authorID: args.authorID
                })
                return book.save()
            }
        }
    }
});

export default Mutation
