import React from "react";
import styles from "../page.module.css";

async function getMealById(id) {
  const response = await fetch(`http://localhost:3001/api/meals/${id}`);
  const meal = await response.json();
  return meal;
}

async function MealDetail({ params }) {
  const { id } = await params;
  const meal = await getMealById(id);

  if (!meal) {
    return <div className={styles.error}>No result found!</div>;
  }

  return (
    <div className={styles.mealDetail}>
      <img
        src={meal.image_url}
        alt={meal.title}
        className={styles.imageDetail}
      />
      <h1 className={styles.titleDetail}>{meal.title}</h1>

      <p className={styles.descriptionDetail}>{meal.DESCRIPTION}</p>
      <p className={styles.priceDetail}>Price: {meal.price}</p>
      <p className={styles.locationDetail}>Location: {meal.location}</p>
    </div>
  );
}

export default MealDetail;
