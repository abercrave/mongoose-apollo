# mongoose-apollo

Proof of concept for a revised data model for CDP's Requests Service.

## Installation

Prerequisites:

1. [Homebrew](https://docs.brew.sh/Installation)
2. [MongoDB](https://docs.mongodb.com/manual/administration/install-community/)
3. [Node](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
4. [Yarn](https://classic.yarnpkg.com/en/docs/install)

Install mongoose-apollo Node dependencies:

```bash
yarn install
```

## Usage

Start MongoDB:

```bash
yarn db:start
```

Seed the database:

```bash
yarn db:seed
```

Start Apollo Server and watch for file changes:

```bash
yarn start
```

You can now run GQL queries against Apollo at [http://localhost:3001/graphql](http://localhost:3001/graphql).

## Example queries

All requests:

```graphql
{
  requests {
    _id
    createdAt
    presents {
      _id
      division
      provider {
        _id
        name
      }
    }
    requestId
  }
}
```

All presents grouped by provider:

```graphql
{
  groupPresentsByProvider {
    _id
    name
    presents {
      division
      request {
        _id
        createdAt
        requestId
      }
    }
  }
}
```

A full list of available queries can be found in the included [Postman](https://www.postman.com/downloads/) [collection](https://github.com/abercrave/mongoose-apollo/blob/master/postman_collection.json).

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
