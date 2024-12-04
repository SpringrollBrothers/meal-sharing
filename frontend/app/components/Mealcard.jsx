import React from "react";
import styles from "../mealslist/page.module.css";
import { useRouter } from "next/navigation";

function Mealcard({ meal }) {
  const router = useRouter();
  function handleInfo() {
    router.push(`/mealslist/${meal.id}`);
  }
  return (
    <div
      className={styles.mealCard}
      style={{ backgroundImage: `url(${meal.image_url})` }}
    >
      <div className={styles.imgOverlay}>
        <h3 className={styles.mealTitle}>{meal.title}</h3>
        {/*<p className={styles.mealDesc}>{meal.DESCRIPTION}</p>*/}
        <p className={styles.mealPrice}>{meal.price}</p>

        <button onClick={handleInfo} className={styles.mealBtn}>
          More Info
        </button>
      </div>
    </div>
  );
}

export default Mealcard;
