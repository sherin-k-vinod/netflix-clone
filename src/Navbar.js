import React, { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Logo_Netflix.png/1200px-Logo_Netflix.png"
        alt="logo"
      />
      <img
        className="nav__avatar"
        src="https://www.name-doctor.com/nomi.png/9563.png"
        alt="avatar"
      />
    </div>
  );
}

export default Navbar;
