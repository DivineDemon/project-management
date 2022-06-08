import "dotenv/config";
import { graphqlHTTP } from "express-graphql";
import colors from "colors";
import cors from "cors";

import express from "express";
import schema from "./schema/schema.js";
import { connectDB } from "./schema/config/db.js";

const port = process.env.PORT || 5000;
const app = express();

// Connect to DB
connectDB();

// Middleware
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(port, console.log(`Server running on port: ${port}`));
