import React from "react";
import { Link } from "react-router-dom";
// import { BiFoodMenu } from "react-icons/bi";
import "../App.css";
import data from "../assets/data.js";
import CategoriesList from "../components/CategoriesList";
import BackgroundDiv from "../components/backgroundDiv";
import "animate.css";

function Menu() {
  return (
    <div>
      <div className="menuTitle">
        {/* <BiFoodMenu className="menuIcon" /> */}
        <img src="./menuIcon.png" style={{width:'70px', margin:'10px'}} alt="menu Icon"/>
        <h1>Our Menu</h1>
      </div>
      <CategoriesList>
        <div className="categoriesList">
          <Link to="/" className="categoryInList navLink animate__animated animate__swing">
            <BackgroundDiv src={require(`../assets/imgs/restaurant.jpg`)}>
              All Categories
            </BackgroundDiv>
          </Link>
          {data.map((item) => (
            <Link
              key={item.categoryId}
              to={"/" + item.categoryName}
              className="categoryInList navLink animate__animated animate__swing"
            >
              <BackgroundDiv
                src={require(`../assets/imgs/${item.categoryName}/${item.categoryImgSrc}`)}
              >
                {item.categoryName}
              </BackgroundDiv>
            </Link>
          ))}
        </div>
      </CategoriesList>
    </div>
  );
}

export default Menu;
