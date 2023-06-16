import { PlantItem } from "components/items";
import { useFetch } from "utilities/hooks";

import styles from "./PlantTable.module.css";

const PlantTable = () => {
  const { isLoading, apiData, apiError } = useFetch("GET", `/plants`, {});

  const plantsList = apiData.map((plant) => (
    <PlantItem
      key={plant.latinName}
      latinName={plant.latinName}
      commonName={plant.commonName}
      sun={plant.sun}
      water={plant.water}
      lastWatered={plant.lastWatered}
    />
  ));

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (apiError) {
    return <p>Something went wrong!</p>;
  }

  return <div className={styles.table}>{plantsList}</div>;
};

export default PlantTable;
