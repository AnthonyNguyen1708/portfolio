import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiceD20 } from "@fortawesome/free-solid-svg-icons";
import "./navbar.scss";

const Navbar = () => {
  const [navbarClass, setNavbarClass] = useState("");
  const handleScroll = (navbarClass) => {
    if (navbarClass !== "headerScroll" && window.pageYOffset >= 50) {
      setNavbarClass("headerScroll");
    } else if (navbarClass === "headerScroll" && window.pageYOffset < 50) {
      setNavbarClass("");
    }
  };

  useEffect(() => {
    window.onscroll = () => {
      handleScroll(navbarClass);
    };
  }, [navbarClass]);

  return (
    <>
      <div className={navbarClass + " fixed top-0 left-0 right-0"}>
        <div className="header_wrapper container mx-auto">
          <div className="header_content flex justify-between py-3">
            <div className="header_logo">
              <div className="logo_wrapper flex flex-row items-center">
                <FontAwesomeIcon className="logo_icon" icon={faDiceD20} />
                <h1 className="ml-2">Anthony{"'"}s Portfolio</h1>
              </div>
            </div>
            <div className="header_navbar">
              <div className="navbar_wrapper">
                <ul className="navbar_content flex justify-evenly">
                  <li className="navbar_item mx-4">
                    <a href="">#Home</a>
                  </li>
                  <li className="navbar_item mx-4">
                    <a href="">#Work</a>
                  </li>
                  <li className="navbar_item mx-4">
                    <a href="">#About-me</a>
                  </li>
                  <li className="navbar_item mx-4">
                    <a href="">#Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
