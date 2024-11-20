import express from "express";
import knex from "../database_client.js";


const allMeals = express.Router();
allMeals.get('/', async(req , res)=> {
    const all_meals = await knex('meal').orderBy('id')
    res.json(all_meals)
});
export {allMeals}