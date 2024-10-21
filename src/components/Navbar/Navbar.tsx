import { useState } from "react";

const Navbar = () => {
  const [toggleNavigation, setToggleNavigation] = useState(false);

  return (
    <div className="navbar absolute top-10 left-10">
      <button className={`sidebar-button ${toggleNavigation && 'opacity-25'} z-20 cursor-pointer`} onClick={() => setToggleNavigation(!toggleNavigation)}>
        <img
          className=" absolute cursor-pointer top-12 left-10"
          src="/assets/HamburgerIcon.png"
          alt="Hamburger Icon"
        />
      </button>

      <img
        className=" absolute top-12 left-28"
        src="/assets/LogoNavbar.png"
        alt="Logo for Navbar"
      />

      {toggleNavigation && (
        <div className="navbar-menu">
          Menu
        </div>
      )}
    </div>
  );
};

export default Navbar;
