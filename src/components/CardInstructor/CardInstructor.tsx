import React from "react";
import "./CardInstructor.sass";
import medal from "../../assets/medal.png";

const CardInstructor = () => {
  return (
    <div className="cardInstructor">
      <div className="imgInstructor"></div>
      <div className="infoInstructor">
        <section>
          <h5>William Bell</h5>
          <p>Fitness instructor</p>
        </section>
        <img src={medal} />
      </div>
      <div className="infoExercise">
        <section className="infoLeft">
          <h4>01</h4>
          <p>Sessions</p>
        </section>
        <section className="division"></section>
        <section className="infoRight">
          <h4>30</h4>
          <p>Minutes</p>
        </section>
      </div>
      <div className="bookAClass">
        <p>Book a Class</p>
        <div className="toogleButton">
          <section></section>
        </div>
      </div>
    </div>
  );
};

export default CardInstructor;
