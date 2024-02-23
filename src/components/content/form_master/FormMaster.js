import { Fragment } from "react";
import styles from "./FormMaster.module.css";
import Card from "../../UI/Card";
import ReactDom from "react-dom";
import AccountForm from "../Accounts/AccountForm";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onCloseModal}></div>;
};

const Form = (props) => {
  const getForm = (state) => {
    if (state === "new-acc-form") {
      return <AccountForm onCloseModal={props.onCloseModal} />;
    } else {
      <p>Такой формы нет.</p>;
    }
  };

  return <Card className={styles.modal}>{getForm(props.state)}</Card>;
};

const FormMaster = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <Backdrop onCloseModal={props.onCloseModal} />,
        document.getElementById("backdrop")
      )}
      {ReactDom.createPortal(
        <Form state={props.state} onCloseModal={props.onCloseModal} />,
        document.getElementById("new-form")
      )}
    </Fragment>
  );
};

export default FormMaster;
