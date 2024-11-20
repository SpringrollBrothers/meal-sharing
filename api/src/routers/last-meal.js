import express from "express";
import knex from "../database_client.js";


const lastMeal = express.Router();
lastMeal.get('/', async(req , res)=> {
    const last_meal = await knex('meal').orderBy('id', 'desc').limit(1)
    res.json(last_meal)
});
export {lastMeal}