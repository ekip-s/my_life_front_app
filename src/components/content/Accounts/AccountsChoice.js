import { Fragment } from "react";
import styles from "./AccountsChoice.module.css";

const isAccount = [
  {
    id: "9c7ce2d2-0bf7-41db-8e8d-4a2242be9c9d",
    type: "deposit",
    accountName: "КН Тинькофф",
    currency: "RUB",
    capitalization: "monthly",
    openingDate: "2024-02-26",
    firstPaymentDate: "2024-02-26",
    lastPaymentDate: "2024-02-26",
    rate: 15,
    payment: 0,
    accountSumAmount: 50000,
    depositAmount: 50000,
    lastPayment: 0,
    createDT: "2024-02-26T21:18:44.9687967",
    lastUpdateDT: "2024-02-26T21:18:44.9687967",
    schedule: null,
  },
  {
    id: "9c7ce2d2-0bf7-41db-8e8d-4a2242be9c9",
    type: "deposit",
    accountName: "КН Тинькофф",
    currency: "USD",
    capitalization: "monthly",
    openingDate: "2024-02-26",
    firstPaymentDate: "2024-02-26",
    lastPaymentDate: "2024-02-26",
    rate: 15,
    payment: 0,
    accountSumAmount: 50000,
    depositAmount: 50000,
    lastPayment: 0,
    createDT: "2024-02-26T21:18:44.9687967",
    lastUpdateDT: "2024-02-26T21:18:44.9687967",
    schedule: null,
  },
];

const AccountsChoice = () => {
  const formatedNumber = (num, currency) => {
    return num.toLocaleString("ru-RU", {
      style: "currency",
      currency: currency,
    });
  };

  return (
    <Fragment>
      {isAccount.map((account) => (
        <div className={styles["node-info"]} key={account.id}>
          <div>
            <h4>{account.accountName}</h4>
            <div className={styles.infos}>
              <p>{account.rate} %</p>
              <p>01.01.2023</p>
            </div>
          </div>
          <div className={styles.sum_info}>
            <p className={`${styles["acc-sum"]} ${styles[account.type]}`}>
              {formatedNumber(account.accountSumAmount, account.currency)}
            </p>
            <p className={styles["last-operation"]}>+ 125</p>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default AccountsChoice;
