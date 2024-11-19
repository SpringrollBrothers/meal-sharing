import express from "express";
import knex from "../database_client.js";


const firstMeal = express.Router();
firstMeal.get('/', async(req , res)=> {
    const first_meal = await knex('meal').orderBy('id').limit(1)
    res.json(first_meal)
});
export {firstMeal}