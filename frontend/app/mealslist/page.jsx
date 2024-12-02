"use client";
import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";

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
      {meals.length > 0 ? (
        meals.map((meal) => (
          <div key={meal.id} className={styles.mealCard}>
            <h3 className={styles.mealTitle}>{meal.title}</h3>
            <p className={styles.mealDesc}>{meal.description}</p>
            <p className={styles.mealPrice}>{meal.price}</p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
export default MealsList;
