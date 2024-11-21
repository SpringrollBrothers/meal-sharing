import express from "express";
import knex from "../database_client.js";
const reviewRouter = express.Router();

//return all reviews
reviewRouter.get("/", async (req, res, next) => {
  try {
    const reviews = await knex("review");
    res.json(reviews);
  } catch (error) {
    next(error);
  }
});
//return a review by Id
reviewRouter.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const getReviewById = await knex("review").where({ id }).first();
    if (!getReviewById) {
      return res.status(404).json({ error: "review not found." });
    }

    res.json(getReviewById);
  } catch (error) {
    next(error);
  }
});

//to add a new review to database.
reviewRouter.post("/", async (req, res, next) => {
  try {
    const nreMeal = req.body;
    const [mealId] = await knex("meal").insert(newMeal);
    res.status(201).json({ message: "Meal created", mealId });
  } catch (error) {
    next(error);
  }
});

//updates the review by Id
reviewRouter.put("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const updateReview = req.body;
    await knex("review").where({ id }).update(updateReview);
    res.json({ message: "Review updated" });
  } catch (error) {
    next(error);
  }
});

//Delete the review by Id.
reviewRouter.delete("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const deleteReview = await knex("review").where({ id }).del();
    if (!deleteReview) {
      res.status(404).json({ errror: "Not found" });
    } else {
      res.status(200).json({ message: "Review deleted" });
    }
  } catch (error) {
    next(error);
  }
});

export default reviewRouter;
