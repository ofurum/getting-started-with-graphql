const {SchemaComposer} = require('graphql-compose');

const schemaComposer = new SchemaComposer();

const {UserQuery, UserMutation} = require('./user');
const {BookQuery, BookMutation} = require('./books');


schemaComposer.Query.addFields({
    ...UserQuery,
})

schemaComposer.Mutation.addFields({
    ...UserMutation,
})

module.exports = schemaComposer.buildSchema();