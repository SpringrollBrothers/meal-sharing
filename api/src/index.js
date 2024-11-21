import "dotenv/config";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import knex from "./database_client.js";
import { allMeals } from "./routers/all-meals.js";
import { firstMeal } from "./routers/first-meal.js";
import { futureMeal } from "./routers/future-meals.js";
import { lastMeal } from "./routers/last-meal.js";
import { pastMeal } from "./routers/past-meals.js";
import mealsRouter from "./routers/meals.js"; // Import the new meals router
import reviewRouter from "./routers/review.js";
const app = express();
app.use(cors());
app.use(bodyParser.json());

const apiRouter = express.Router();

apiRouter.get("/", async (req, res) => {
  res.json({ messages: "welcome to meal sharing API" });
});

// This nested router example can also be replaced with your own sub-router
apiRouter.use("/future-meals", futureMeal);
apiRouter.use("/past-meals", pastMeal);
apiRouter.use("/all-meals", allMeals);
apiRouter.use("/first-meal", firstMeal);
apiRouter.use("/last-meal", lastMeal);
apiRouter.use("/meals", mealsRouter);
apiRouter.use("/review",reviewRouter)

app.use("/api", apiRouter);

app.listen(process.env.PORT, () => {
  console.log(`API listening on port ${process.env.PORT}`);
});
