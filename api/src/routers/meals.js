import express from "express";
import knex from "../database_client.js";

const mealsRouter = express.Router();

// GET /api/meals - Return all meals
mealsRouter.get("/", async (req, res) => {
  try {
    const meals = await knex.select("*").from("meal");
    res.json(meals);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching meals" });
  }
});
// POST /api/meals/search - Search meals by fields in the request body
mealsRouter.post("/search", async (req, res) => {
  const { fields } = req.body;

  if (!fields || typeof fields !== "object") {
    return res
      .status(400)
      .json({ error: "Fields must be provided for searching." });
  }

  try {
    const query = knex("meal");
    for (const [key, value] of Object.entries(fields)) {
      query.where(key, value);
    }

    const results = await query;
    res.json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error searching meals" });
  }
});
export default mealsRouter;
 
// POST /api/meals - Add a new meal
mealsRouter.post("/", async (req, res) => {
    const newMeal = req.body;
  
    try {
      const [addedMeal] = await knex("meal").insert(newMeal).returning("*");
      res.status(201).json(addedMeal); // Respond with the created meal
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error adding meal" });
    }
  });
  
  // GET /api/meals/:id - Return the meal by id
  mealsRouter.get("/:id", async (req, res) => {
    const { id } = req.params;
  
    try {
      const meal = await knex("meal").where({ id }).first();
  
      if (!meal) {
        return res.status(404).json({ error: "Meal not found" });
      }
  
      res.json(meal);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error fetching meal" });
    }
  });
  
  // PUT /api/meals/:id - Update the meal by id
  mealsRouter.put("/:id", async (req, res) => {
    const { id } = req.params;
    const updatedMeal = req.body;
  
    try {
      const [meal] = await knex("meal").where({ id }).update(updatedMeal).returning("*");
  
      if (!meal) {
        return res.status(404).json({ error: "Meal not found" });
      }
  
      res.json(meal);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error updating meal" });
    }
  });
  
  // DELETE /api/meals/:id - Delete the meal by id
  mealsRouter.delete("/:id", async (req, res) => {
    const { id } = req.params;
  
    try {
      const deletedMeal = await knex("meal").where({ id }).del();
  
      if (!deletedMeal) {
        return res.status(404).json({ error: "Meal not found" });
      }
  
      res.json({ message: "Deleted meal" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error deleting meal" });
    }
  });
  