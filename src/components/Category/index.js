import React from "react";
import "./Category.css";
import BackgroundDiv from "../backgroundDiv";
import "animate.css";

function Category(props) {
  return (
    <div className="category">
        <div className="categoryBackground animate__animated animate__bounceIn">
      <BackgroundDiv src={require(`../../assets/imgs/${props.categoryName}/0.jpg`)} >
        <div>{props.categoryName}</div>
      </BackgroundDiv>
      </div>
      <div>{props.children}</div>
    </div>
  );
}

export default Category;