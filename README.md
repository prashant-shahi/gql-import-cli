# gql-import-cli

cli tool for graphql-import

## Usage

Download the appropriate binary as per your machine from the `bin` folder.

```bash
$ ./bin/gql-import-cli-linux ./example/schema.graphql

type Blog {
  posts: [Post]
}

type Post {
  comments: [Comment]
  id: ID!
  text: String!
  tags: [String]
}

type Comment {
  id: ID!
  text: String!
}
```
