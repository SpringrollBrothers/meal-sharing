import express from "express";
import knex from "../database_client.js";

const reservationsRouter = express.Router();

// GET /api/reservations - Return all reservations
reservationsRouter.get("/", async (req, res) => {
  try {
    const reservations = await knex.select("*").from("reservation");
    res.json(reservations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching reservations" });
  }
});

// POST /api/reservations - Add a new reservation
reservationsRouter.post("/", async (req, res) => {
  const newReservation = req.body;

  try {
    const [addedReservation] = await knex("reservation").insert(newReservation).returning("*");
    res.status(201).json(addedReservation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error adding reservation" });
  }
});

// GET /api/reservations/:id - Return the reservation by id
reservationsRouter.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const reservation = await knex("reservation").where({ id }).first();

    if (!reservation) {
      return res.status(404).json({ error: "Reservation not found" });
    }

    res.json(reservation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching reservation" });
  }
});

// PUT /api/reservations/:id - Update the reservation by id
reservationsRouter.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedReservation = req.body;

  try {
    const [reservation] = await knex("reservation").where({ id }).update(updatedReservation).returning("*");

    if (!reservation) {
      return res.status(404).json({ error: "Reservation not found" });
    }

    res.json(reservation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error updating reservation" });
  }
});

// DELETE /api/reservations/:id - Delete the reservation by id
reservationsRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedReservation = await knex("reservation").where({ id }).del();

    if (!deletedReservation) {
      return res.status(404).json({ error: "Reservation not found" });
    }

    res.json({ message: "Deleted reservation" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error deleting reservation" });
  }
});

export default reservationsRouter;
