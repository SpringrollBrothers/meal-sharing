import express from "express";
import knex from "../database_client.js";


const pastMeal = express.Router();
const now = new Date();
pastMeal.get('/', async(req , res)=> {
    const past_meal = await knex('meal').where('when','<' ,currectDay)
    res.json(past_meal)
});
export {pastMeal}