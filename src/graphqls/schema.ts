import Mutation from "./mutation";
import RootQuery from "./query";
import {GraphQLSchema} from "graphql";


const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});

export default schema
