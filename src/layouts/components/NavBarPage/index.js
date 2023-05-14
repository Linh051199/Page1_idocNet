import React from "react";
import { Link } from "react-router-dom";
function NavBarPage({ navList }) {
  console.log(navList);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        fontSize: "16px",
        gap: "20px",
        marginTop: "20px",
        textDecoration: "none",
      }}
    >
      <div className="link">
        <Link
          to="/page1_idocNet/home"
          style={{
            backgroundColor: "gray",
            color: "white",
            fontWeight: "bold",
            padding: "10px",
            borderRadius: "10px",
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          Page 1
        </Link>
      </div>
      <div className="link">
        <Link
          to="/page1_idocNet/mobile"
          style={{
            backgroundColor: "gray",
            color: "white",
            fontWeight: "bold",
            padding: "10px",
            borderRadius: "10px",
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          Page 2
        </Link>
      </div>
    </div>
  );
}

export default NavBarPage;
