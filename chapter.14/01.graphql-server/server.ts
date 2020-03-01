import { ApolloServer, gql } from 'apollo-server';
class Author {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Book {
  title: string;
  authors: Author[] = [];
  year: number;
  subTitle?: string;

  constructor(title: string, name: string, year: number, subTitle?: string) {
    this.title = title;
    this.year = year;
    this.authors.push(new Author(name));
    if (subTitle) { this.subTitle =  subTitle };
  }
}


const books: Book[] = [
  new Book('토지', '박경리', 1969),
  new Book('무정', '이광수', 1917)
];

const typeDefs = gql`
  type Author {
    name: String!
  }
  type Book {
    title: String!
    authors: [Author]!
    year: Int!
    subTitle: String
  }
  type Query {
    books: [Book]
  }
`;

const resolvers = {
  Query: {
    books: () => books,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server is running : ${url}`)
})