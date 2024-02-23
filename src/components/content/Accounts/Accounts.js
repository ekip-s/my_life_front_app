import { useState, Fragment } from "react";
import styles from "./Accounts.module.css";
import FormMaster from "../../content/form_master/FormMaster";

const Accounts = (props) => {
  const [formState, setFormState] = useState("");

  const newAccountHandler = (elem) => {
    setFormState(() => {
      return elem.target.id;
    });
  };

  const closeHandler = () => {
    setFormState(() => {
      return "";
    });
  };

  return (
    <Fragment>
      {formState && (
        <FormMaster state={formState} onCloseModal={closeHandler} />
      )}
      <div className={styles["top-info"]}>
        <div>
          <h3>Счета:</h3>
          <p>Информация по кредитным и депозитным счетам.</p>
        </div>
        <div className={styles["btn-div"]}>
          <button id="new-acc-form" type="submit" onClick={newAccountHandler}>
            Новый Счет
          </button>
        </div>
      </div>
      <div className={styles["accounts-list"]}></div>
    </Fragment>
  );
};

export default Accounts;
