import React from "react";
import styles from "../mealslist/page.module.css"

function Meal({ meal }) {
  return (
    <>
      <div className={styles.mealCard}>
        <h3 className={styles.mealTitle}>{meal.title}</h3>
        <p className={styles.mealDesc}>{meal.DESCRIPTION}</p>
        <p className={styles.mealPrice}>{meal.price}</p>
      </div>
    </>
  );
}

export default Meal;
