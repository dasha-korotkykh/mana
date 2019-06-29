import React from "react";
import logoSrc from "../../assets/images/logos/ricker-lyman-robotic.svg";

const Header = () => (
  <header>
    <nav className="navbar">
      <section className="navbar-section" />
      <section className="navbar-center">
        <a href="https://rickerlyman.com/" className="navbar-brand">
          <img src={logoSrc} alt="Ricker Lyman Robotic" />
        </a>
      </section>
      <section className="navbar-section" />
    </nav>
  </header>
);

export default Header;