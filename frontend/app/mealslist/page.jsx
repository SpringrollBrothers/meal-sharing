"use client";
import styles from "./page.module.css";
import React, { useEffect, useState } from "react";
import Mealcard from "../components/Mealcard"

function MealsList() {
  const [meals, setMeals] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/all-meals");
      const data = await response.json();
      setMeals(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <h2>Meals</h2>
      <div className={styles.container}>
        {meals.length > 0 ? (
          meals.map((meal) => <Mealcard key={meal.id} meal={meal}></Mealcard>)
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}
export default MealsList;
