import React from "react";

const HeaderIndex = () => {
  return (
    <header style={{
      padding: "2rem",
      textAlign: "center",
      backgroundColor: "#f0e6b6" // warna background lightMode yang hangat
    }}>
      <h1 style={{ fontSize: "2rem", color: "#3e2f15" }}>Miftah Notes</h1>
      <p style={{ fontSize: "1rem", color: "#7a7a55" }}>My personal notes and thoughts</p>
    </header>
  );
};

export default HeaderIndex;
