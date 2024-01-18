import React from "react";
import "./ShapeInfo.sass";
import Button from "../Button/Button";
import CardBookAClass from "../CardBookAClass/CardBookAClass";
import CardInstructor from "../CardInstructor/CardInstructor";

const ShapeInfo = () => {
  return (
    <div className="containerShapeInfo">
      <section className="cardLeft">
        <h2>
          Shape your <strong>perfect body</strong> with us
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet cum
          accusamus voluptate, eaque blanditiis laudantium quaerat hic pariatur
          culpa soluta dolores quae eum mollitia itaque dolore eius aspernatur
          nesciunt architecto! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Amet cum accusamus voluptate, eaque blanditiis
          laudantium quaerat hic pariatur culpa soluta dolores quae eum mollitia
          itaque
        </p>
        <Button>Star your Trainnig</Button>
      </section>
      <section className="cardRight">
        <CardBookAClass />
        <CardInstructor />
      </section>
    </div>
  );
};

export default ShapeInfo;
