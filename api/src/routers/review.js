import express from "express";
import knex from "../database_client.js";

// This router can be deleted once you add your own router
const reviewRouter = express.Router();

reviewRouter.get("/", async (req, res) => {
  const SHOW_TABLES_QUERY = "SELECT * FROM review;";

  const tables = await knex.raw(SHOW_TABLES_QUERY);

  res.json({ tables });
});

reviewRouter.get("/:id", async (req, res) => {
  const SHOW_TABLES_QUERY =
    `SELECT * FROM review where id =${req.params.id}`

  console.log(SHOW_TABLES_QUERY);

  const tables = await knex.raw(SHOW_TABLES_QUERY);
  const tablerows = tables[0];
  res.json({ tablerows });
});
export default reviewRouter;
