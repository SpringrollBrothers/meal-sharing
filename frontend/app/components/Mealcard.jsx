import React from "react";
import styles from "../mealslist/page.module.css";
import { useRouter } from "next/navigation";

function Meal({ meal }) {
  const router = useRouter();
  function handleInfo() {
    router.push(`/mealslist/${meal.id}`);
  }
  return (
    <>
      <div className={styles.mealCard}>
        <div className={styles.img}>
          <img src={meal.image_url} alt={meal.title} />
        </div>
        <h3 className={styles.mealTitle}>{meal.title}</h3>
        <p className={styles.mealDesc}>{meal.DESCRIPTION}</p>
        <p className={styles.mealPrice}>{meal.price}</p>
        <button onClick={handleInfo} className={styles.mealBtn}>
          More Info
        </button>
      </div>
    </>
  );
}

export default Meal;
