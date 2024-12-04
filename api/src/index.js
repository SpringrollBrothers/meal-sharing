import "dotenv/config";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { allMeals } from "./routers/all-meals.js";
import mealsRouter from "./routers/meals.js"; // Import the new meals router
import reviewRouter from "./routers/review.js";
const app = express();
app.use(cors());
app.use(bodyParser.json());

const apiRouter = express.Router();

apiRouter.get("/", async (req, res) => {
  res.json({ messages: "welcome to meal sharing API" });
});

apiRouter.use("/all-meals", allMeals);
apiRouter.use("/meals", mealsRouter);
apiRouter.use("/review", reviewRouter);

app.use("/api", apiRouter);

//middleware for handling errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  if (err.status == 404) {
    res.status(404).json({ message: err.message });
  }
  res.status(500).json({ message: "An unexpected error occurred!" });
});

app.listen(process.env.PORT, () => {
  console.log(`API listening on port ${process.env.PORT}`);
});
