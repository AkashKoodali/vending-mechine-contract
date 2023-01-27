import styles from "../styles/VendingMachine.module.css";
import "bulma/css/bulma.css";
import Head from "next/head";
import { useState } from "react";

import Web3 from "web3";

const VendingMachine = () => {
  const [error, setError] = useState("");
  let web3;
  // window.ethereum
  const connectWalletHandler = async () => {
    if (
      typeof window !== "undefined" &&
      typeof window.ethereum !== "undefined"
    ) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        web3 = new Web3(window.ethereum);
      } catch (error) {
        setError(error.message);
      }
    } else {
      // meta mask not installed
      console.log("Please insall meta mask");
    }
  };

  return (
    <div className={styles.main}>
      <Head>
        <title>Vending Machine App</title>
        <meta name="description" content="A Blockchain vending machne app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="navbar mt-4 mb-4">
        <div className="container">
          <div className="navbar-brand">
            <h1>Vending Machine</h1>
          </div>
          <div className="navbar-end">
            <button
              className="button is-primary"
              onClick={connectWalletHandler}
            >
              Connect Wallet
            </button>
          </div>
        </div>
      </nav>
      <section>
        <div className="container">
          <p>Section</p>
        </div>
      </section>
      <section>
        <div className="container has-text-danger">
          <p>{error}</p>
        </div>
      </section>
    </div>
  );
};

export default VendingMachine;
