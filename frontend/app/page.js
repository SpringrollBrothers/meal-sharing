"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const fetchMeals = async () => {
    setLoading(true);
    try {
      const apiResponse = await fetch("http://localhost:3001/api/meals");
      const mealData = await apiResponse.json();
      if (apiResponse.ok) {
        setMeals(mealData);
      } else {
        console.log(mealData.message);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchMeals();
  }, []);
  return (
    <>
      {" "}
      {meals.map((meal, index) => (
        <div key={index}>
          {" "}
          <p>{meal.title}</p>
          <p>{meal.description}</p>
        </div>
      ))}
    </>
  );
}
