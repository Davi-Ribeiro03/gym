import "./CardBookAClass.sass";

const CardBookAClass = () => {
  return (
    <div className="cardBookAClass">
      <h4>Book a class</h4>
      <p className="description">
        Track your workouts, get better results, and be Less thinking
      </p>
      <div className="infoOfCard">
        <div className="imgContact"></div>
        <section>
          <h5>For the beginners</h5>
          <p>You never workout before, it's now a good start</p>
        </section>
      </div>
      <div className="infoOfCard marked">
        <div className="imgMedal"></div>
        <section>
          <h5>Advanced classes</h5>
          <p>You never workout before, it's now a good start</p>
        </section>
      </div>
      <div className="infoOfCard">
        <div className="imgRay"></div>
        <section>
          <h5>Premium (limited)</h5>
          <p>You never workout before, it's now a good start</p>
        </section>
      </div>
    </div>
  );
};

export default CardBookAClass;
