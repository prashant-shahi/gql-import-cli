# Example

Download the appropriate binary as per your machine from the `bin` folder.

## Usage

```bash
$ ../bin/gql-import-cli-linux schema.graphql

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
