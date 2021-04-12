const express = require('express');
const express_graphql = require("express-graphql").graphqlHTTP;
const {buildSchema} = require('graphql');
const app = express();

const schema = buildSchema(`
        type Query{
            message: String
        }
`);

const root = {
    message: () => 'Hello world'
};

app.use('/graphql', express_graphql({
    schema:schema,
    rootValue: root,
    graphiql: true
}));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Express graphql server now running on port ${PORT}.....`))
