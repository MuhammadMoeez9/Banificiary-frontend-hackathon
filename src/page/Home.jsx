import React from "react";

const Homepage = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: 0, padding: 0 }}>
      {/* Header Section */}
      <header
        style={{
          backgroundColor: "#2c3e50",
          color: "white",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <h1 style={{ margin: 0, fontSize: "36px" }}>
          SMIT Banificiary Web App
        </h1>
        <p style={{ margin: "5px 0", fontSize: "18px" }}>
          Empowering Beneficiaries with Seamless Access
        </p>
      </header>

      {/* Navigation Menu */}
      <nav
        style={{
          backgroundColor: "#34495e",
          textAlign: "center",
          padding: "10px",
        }}
      >
        <a
          href="#"
          style={{
            color: "white",
            textDecoration: "none",
            padding: "15px",
            fontSize: "18px",
          }}
        >
          Home
        </a>
        <a
          href="#"
          style={{
            color: "white",
            textDecoration: "none",
            padding: "15px",
            fontSize: "18px",
          }}
        >
          About
        </a>
        <a
          href="#"
          style={{
            color: "white",
            textDecoration: "none",
            padding: "15px",
            fontSize: "18px",
          }}
        >
          Services
        </a>
        <a
          href="#"
          style={{
            color: "white",
            textDecoration: "none",
            padding: "15px",
            fontSize: "18px",
          }}
        >
          Contact
        </a>
      </nav>

      {/* Main Content Section */}
      <section style={{ padding: "40px", textAlign: "center" }}>
        <h2 style={{ color: "#2c3e50" }}>
          Welcome to SMIT Banificiary Web App
        </h2>
        <p
          style={{
            color: "#555",
            fontSize: "18px",
            maxWidth: "800px",
            margin: "auto",
          }}
        >
          Our platform helps beneficiaries track their progress, manage their
          accounts, and access essential resources with ease. Join us today and
          experience the convenience.
        </p>
        <img
          src="https://via.placeholder.com/800x400"
          alt="Beneficiary"
          style={{
            width: "80%",
            maxWidth: "800px",
            marginTop: "20px",
            borderRadius: "10px",
          }}
        />
        <br />
        <a
          href="#"
          style={{
            display: "inline-block",
            marginTop: "20px",
            padding: "15px 30px",
            backgroundColor: "#2980b9",
            color: "white",
            textDecoration: "none",
            borderRadius: "5px",
            fontSize: "20px",
          }}
        >
          Get Started
        </a>
      </section>

      {/* Footer Section */}
      <footer
        style={{
          backgroundColor: "#2c3e50",
          color: "white",
          textAlign: "center",
          padding: "15px",
        }}
      >
        <p style={{ margin: 0 }}>
          &copy; 2025 SMIT Banificiary Web App. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Homepage;
