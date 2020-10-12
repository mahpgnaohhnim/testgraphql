import {altairExpress} from 'altair-express-middleware';
import schema from "./graphqls/schema";

const express = require("express");
const app = express();
app.disable("x-powered-by");

const mongoose = require('mongoose');

mongoose.connect('mongodb://test:test@localhost')

mongoose.connection.once('open', () => {
    console.log('conneted to database');
});

const {graphqlHTTP} = require('express-graphql');

const PORT: number = 3000;
app.listen(PORT, () => {
    console.log(`Server is running in http://localhost:${PORT}`)
})

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.use('/altair', altairExpress({
    endpointURL: '/graphql',
    subscriptionsEndpoint: `ws://localhost:4000/subscriptions`,
    initialQuery: `{ getData { id name surname } }`,
}));

app.use(
    '/graphql',
    graphqlHTTP({
        schema: schema,
        graphiql: true,
    }),
);
