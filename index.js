// import dependencies
const graphql = require('graphql');
const gqli = require('graphql-import');

// set schema file path
const myArgs = process.argv;
const schema = myArgs[2]||'./schema.graphql';

// fetch the final schema using graphql-import#importSchema
const final_schema = gqli.importSchema(schema);

// print the final schema to the terminal/screen
console.log(final_schema);

