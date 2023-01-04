import "./navbar.css";
import React from "react";
import Button from "../Components/Button";

const Navbar = () => {
  return (
    <div className="navbar_container">
      <div>
        <img src='https://voosh.in/static/media/VooshLogo.c64bcebd40a2d49cc591.webp' className="voosh_logo" alt="logo" />
      </div>
      <div>
        {/* <Button
                    title="Get Started"
                    href="#Waitinglist"
                /> */}
      </div>
    </div>
  );
};

export default Navbar;
