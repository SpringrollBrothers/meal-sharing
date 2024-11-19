import express from "express";
import knex from "../database_client.js";
 

// This router can be deleted once you add your own router
const mealRouter = express.Router();

mealRouter.get("/", async (req, res) => {
  console.log("helloooooooooooooo");

  const SHOW_TABLES_QUERY = "SELECT * FROM meal;";

  const tables = await knex .raw(SHOW_TABLES_QUERY);

  res.json({ tables });
});

export default mealRouter;
