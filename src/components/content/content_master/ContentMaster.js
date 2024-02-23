import styles from "./ContentMaster.module.css";
import MissingPage from "./MissingPage";
import Accounts from "../Accounts/Accounts";

const ContentMaster = (props) => {
  if (props.option === "Кредиты и Депозиты") {
    return <Accounts />;
  } else {
    return (
      <div className={styles["missing_center"]}>
        <MissingPage />
      </div>
    );
  }
};

export default ContentMaster;
