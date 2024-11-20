import express from "express";
import knex from "../database_client.js";

const futureMeal = express.Router();

futureMeal.get("/", async (req, res) => {
  const currectDay = new Date();
  const future_meal = await knex("meal").where("when", ">", currectDay);
  res.json(future_meal);
});
export { futureMeal };
