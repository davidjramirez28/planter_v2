import styles from "./PlanterHeader.module.css";

const PlanterHeader = () => {
  return (
    <div className={styles.headerContainer}>
      <h1 className={styles.title}>David's Planter</h1>
    </div>
  );
};

export default PlanterHeader;
