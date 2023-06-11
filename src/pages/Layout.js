import React from "react";
import { Outlet } from "react-router-dom";
import "../App.css";
import Menu from "./Menu";

const Layout = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };
  return (
    <div className="page">
      {/* <nav>
        <ul className="navMenu">
          <li>
            <Link to="/" className="navLink">
              Logo
            </Link>
          </li>
          <li>
            <div className="foodMenuIcon" onClick={toggleMenu}>
              <BiFoodMenu />
            </div>
            <ul className={isOpen ? "linksWrapperMobile" : "linksWrapperWeb"}>
              <li>
                <Link to="/" className="navLink">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="navLink">
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="navLink">
                  Contact
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav> */}

      <div className="background">
        <div className="backgroundContent">Welcome to our Restaurant</div>
      </div>

      <Menu />

      <div className="outlet">
        <Outlet />
      </div>
      <footer className="footer">
        <div>
          <img
            src="./menuIcon.png"
            style={{ width: "70px", margin: "10px" }}
            alt="menu Icon"
          />
        </div>
        <div>Location: Lebanon</div>
        <div>
          Phone: <a class="whatsappLink" href="https://wa.me/96176008743">+961 76 00 87 43</a>
        </div>
      </footer>
      <div className="copyrightSection">
        <p>
          Copyright © 2023 - done by{" "}
          <a
            className="copyrightSectionMail"
            href="mailto:alimantache1994@gmail.com"
          >
            Ali Mantache
          </a>
        </p>
      </div>
    </div>
  );
};

export default Layout;
