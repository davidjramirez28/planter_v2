import { useState } from "react";

import styles from "./PlantItem.module.css";

const PlantItem = (props) => {
  const { latinName, commonName, sun, water, lastWatered } = props;

  const [isOpen, setIsOpen] = useState(false);
  const onPlantClickHandler = (event) => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div className={styles.plantItem} onClick={onPlantClickHandler}>
      <p className={styles.plant_latinName}>{latinName}</p>
      {isOpen && (
        <div className={styles.additionalContent}>
          <p className={styles.plant_commonName}>Common Name: {commonName}</p>
          <p className={styles.plant_sunAmount}>
            Amount of sun required: {sun}
          </p>
          <p className={styles.plant_waterAmount}>
            Amount of water required: {water}
          </p>
          <p className={styles.plant_lastWatered}>
            Last Watered: {lastWatered}
          </p>
        </div>
      )}
    </div>
  );
};

export default PlantItem;
