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
      }}
    >
      <div>
        <Link to="/home" style={{ backgroundColor: "gray", padding: "10px" }}>
          Page 1
        </Link>
      </div>
      <div>
        <Link to="/mobile" style={{ backgroundColor: "gray", padding: "10px" }}>
          Page 2
        </Link>
      </div>
    </div>
  );
}

export default NavBarPage;
