# MongoDB

MongoDB driver and Jest preset "@shelf/jest-mongodb", which is a library to run an in-memory mongo server for testing.

### Library and Docs

[MongoDB Repo](https://www.npmjs.com/package/mongodb)
[Jest-MongoDB Repo](https://www.npmjs.com/package/@shelf/jest-mongodb)

### Config

The library "@shelf/jest-mongodb" requires a bit of additional configuration.

First, on your "jest.config.js" file.

```
preset: '@shelf/jest-mongodb'
```
This line will enable the preset so that when you run your tests it will use the in-memory server.

Second, add a file called "jest-mongodb-config.json" with the recommended setup, as a note, make sure that the node version matches your "mongodb" version or you may run into unwanted issues.

### Mongo Query Builder

This class uses a design pattern called "Builder" to facilitate generating complex mongodb [aggregations](https://docs.mongodb.com/manual/aggregation/). 