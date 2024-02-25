import { Fragment, useState, useRef } from "react";
import styles from "./AccountForm.module.css";

const requestURL = "http://localhost:122/my_life/account/api/v1";

const AccountForm = (props) => {
  const [creditType, setCreditType] = useState("");
  const [currency, setCurrency] = useState("");
  const [capitalization, setCapitalization] = useState("");
  const openingDateRef = useRef("");
  const firstPaymentDateRef = useRef("");
  const lastPaymentDateRef = useRef("");
  const creditNameRef = useRef("");
  const rateRef = useRef(0);
  const depositAmountRef = useRef(0);
  const paymentRef = useRef(0);
  const lastPaymentRef = useRef(0);

  function addNewAccount(body) {
    fetch(requestURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(body),
    }).catch((error) => console.log(error));
  }

  const selectCapitalizationHandler = (elem) => {
    setCapitalization(() => {
      return elem.target.value;
    });
  };
  const selectCurrencyHandler = (elem) => {
    setCurrency(() => {
      return elem.target.value;
    });
  };

  const selectHandler = (elem) => {
    setCreditType(() => {
      return elem.target.value;
    });
  };

  const getCreditInfo = (body) => {
    const firstPaymentDate = firstPaymentDateRef.current.value;
    const payment = +paymentRef.current.value;
    const lastPaymentDate = lastPaymentDateRef.current.value;
    const lastPayment = +lastPaymentRef.current.value;

    return {
      ...body,
      firstPaymentDate: firstPaymentDate,
      payment: payment,
      lastPaymentDate: lastPaymentDate,
      lastPayment: lastPayment,
    };
  };

  const getDebtInfo = (body) => {
    const depositAmount = +depositAmountRef.current.value;

    return {
      ...body,
      depositAmount: depositAmount,
    };
  };

  const formSendHandler = (event) => {
    event.preventDefault();
    const creditName = creditNameRef.current.value;
    const openingDate = openingDateRef.current.value;
    const rate = +rateRef.current.value;

    const initBody = {
      type: creditType,
      accountName: creditName,
      openingDate: openingDate,
      rate: rate,
      currency: currency == "" ? "RUB" : currency,
      capitalization: capitalization == "" ? null : capitalization,
    };

    addNewAccount(
      creditType == "credit" ? getCreditInfo(initBody) : getDebtInfo(initBody)
    );
    props.onCloseModal();
  };
  const getForm = () => {
    if (creditType == "credit") {
      return (
        <Fragment>
          <div className={styles.node}>
            <label htmlFor="credit-first-payment-date">
              Дата первого платежа:
            </label>
            <input
              id="credit-first-payment-date"
              type="date"
              ref={firstPaymentDateRef}
              required
            />
          </div>
          <div className={styles.node}>
            <label htmlFor="credit-payment-input">Платеж:</label>
            <input
              id="credit-payment-input"
              type="number"
              min={0}
              step={0.01}
              ref={paymentRef}
              required
            />
          </div>
          <div className={styles.node}>
            <label htmlFor="credit-last-payment-date">
              Дата последнего платежа:
            </label>
            <input
              id="credit-last-payment-date"
              type="date"
              ref={lastPaymentDateRef}
              required
            />
          </div>
          <div className={styles.node}>
            <label htmlFor="credit-last-payment-input">Последний платеж:</label>
            <input
              id="credit-last-payment-input"
              type="number"
              min={0}
              step={0.01}
              ref={lastPaymentRef}
              required
            />
          </div>
        </Fragment>
      );
    } else if (creditType == "deposit") {
      return (
        <Fragment>
          <div className={styles.node}>
            <label htmlFor="currency-select">Выбери валюту:</label>
            <select
              id="currency-select"
              onChange={selectCurrencyHandler}
              required
            >
              <option defaultValue value="RUB">
                Рубли
              </option>
              <option value="USD">Доллар</option>
              <option value="EUR">Евро</option>
            </select>
          </div>
          <div className={styles.node}>
            <label htmlFor="type-of-capitalization">
              Выбери тип капитализации:
            </label>
            <select
              id="type-of-capitalization"
              onChange={selectCapitalizationHandler}
            >
              <option defaultValue value="monthly">
                Ежемесячная
              </option>
              <option value="daily">Ежедневная</option>
            </select>
          </div>
          <div className={styles.node}>
            <label htmlFor="deposit-amount-input">Сумма:</label>
            <input
              id="deposit-amount-input"
              type="number"
              min={0}
              step={0.01}
              ref={depositAmountRef}
              required
            />
          </div>
        </Fragment>
      );
    }
  };

  return (
    <form onSubmit={formSendHandler}>
      <header className={styles.header}>
        <h2>Новый Счёт</h2>
      </header>
      <div className={styles.content}>
        <label htmlFor="credit-type-select">Выбери тип кредита:</label>
        <select id="credit-type-select" onChange={selectHandler} required>
          <option id="empty" value="">
            -- Выбери тип кредита --
          </option>
          <option id="redit-type-credit" value="credit">
            Кредит
          </option>
          <option id="redit-type-deposit" value="deposit">
            Депозит
          </option>
        </select>
        <hr />
        {creditType && (
          <div className={styles.node}>
            <label htmlFor="credit-name-input">Название счета:</label>
            <input
              id="credit-name-input"
              type="text"
              maxlength={30}
              required
              ref={creditNameRef}
            />
          </div>
        )}
        {creditType && (
          <div className={styles.node}>
            <label htmlFor="credit-date-input">Дата открытия:</label>
            <input
              id="credit-date-input"
              type="date"
              required
              ref={openingDateRef}
            />
          </div>
        )}
        {creditType && (
          <div className={styles.node}>
            <label htmlFor="credit-rate-input">Ставка:</label>
            <input
              id="credit-rate-input"
              type="number"
              min={0}
              step={0.01}
              required
              ref={rateRef}
            />
          </div>
        )}
        {getForm()}
      </div>
      <footer className={styles.actions}>
        <button type="submit">Создать</button>
        <button onClick={props.onCloseModal}>Закрыть</button>
      </footer>
    </form>
  );
};

export default AccountForm;
