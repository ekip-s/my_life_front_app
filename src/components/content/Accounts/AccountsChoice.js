import { Fragment, useState } from "react";
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
    accountSumAmount: 4000,
    depositAmount: 4000,
    lastPayment: 0,
    createDT: "2024-02-26T21:18:44.9687967",
    lastUpdateDT: "2024-02-26T21:18:44.9687967",
    schedule: null,
  },
];

const AccountsChoice = () => {
  const [initCurrency, setInitCurrency] = useState();

  const formatedNumber = (num, currency) => {
    return num.toLocaleString("ru-RU", {
      style: "currency",
      currency: currency,
    });
  };

  const getRubAbbount = (currency, amount) => {
    fetch("https://www.cbr-xml-daily.ru/daily_json.js")
      .then((res) => res.json())
      .then((data) => {
        setInitCurrency(data["Valute"][currency]["Value"]);
      })
      .catch((error) => console.log(error));
    return <p>{formatedNumber(initCurrency * amount, "RUB")}</p>;
  };

  return (
    <Fragment>
      {isAccount.map((account) => (
        <div className={styles["node-info"]} key={account.id}>
          <h4>{account.accountName}</h4>
          <div className={styles["node-info-add"]}>
            <div>
              <div className={styles.infos}>
                <p>{account.rate} %</p>
                <p>01.01.2023</p>
              </div>
            </div>
            <div className={styles.sum_info}>
              <p className={`${styles["acc-sum"]} ${styles[account.type]}`}>
                {formatedNumber(account.accountSumAmount, account.currency)}
              </p>
              {account.currency != "RUB" &&
                getRubAbbount(account.currency, account.accountSumAmount)}
              <p className={styles["last-operation"]}>+ 125</p>
            </div>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default AccountsChoice;
