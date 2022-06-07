import "dotenv/config";
import { graphqlHTTP } from "express-graphql";

import express from "express";
import schema from "./schema/schema.js";

const port = process.env.PORT || 5000;
const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(port, console.log(`Server running on port: ${port}`));
