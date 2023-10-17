import React from "react";

export default function Home() {
  return (
    <header className="App-header">
      <img
        src={"/logo.jpeg"}
        className="App-logo"
        alt="logo"
        style={{
          borderRadius: 20,
        }}
      />
      <br />
      <p className="App-link">
        <strong>Support Phone: </strong>
        <a
          href="tel:+962790498335"
          style={{
            color: "#ffffff",
          }}
        >
          +962790498335
        </a>
      </p>
      <p className="App-link">
        <strong>Support Email: </strong>
        <a
          href="emailto:y.njadat@cryptonic-art.com"
          style={{
            color: "#ffffff",
          }}
        >
          y.njadat@cryptonic-art.com
        </a>
      </p>
      <p className="App-link">
        <a
          href="/privacy-policy"
          style={{
            color: "#ffffff",
          }}
        >
          <strong>Privacy Policy</strong>
        </a>
      </p>
    </header>
  );
}
