import React from "react";
import styles from "./id.module.css";

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
      <div styles = {{backgroundImage:`url(${meal.image_url})`}} className={styles.imgContainer}>
        <img
          src={meal.image_url}
          alt={meal.title}
          className={styles.imageDetail}
          id="imageDetail"
        />
      </div>
      <div className={styles.infoContainer}>
        <h1 className={styles.titleDetail}>{meal.title}</h1>
        <p className={styles.descriptionDetail}>{meal.DESCRIPTION}</p>
        <p className={styles.priceDetail}>Price: {meal.price}€</p>
        <p className={styles.locationDetail}>Location: {meal.location}</p>
      </div>
    </div>
  );
}

export default MealDetail;
