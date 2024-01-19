import img from "../../assets/instructor.svg";
import "./ImgCards.sass";

const ImgCards = () => {
  return (
    <div className="imgCard">
      <img className="img1" src={img} alt="" />
      <img className="img2" src={img} alt="" />
      <img className="img3" src={img} alt="" />

      <p>Experience Trainers</p>
    </div>
  );
};

export default ImgCards;
