import "./BenefitsHome.sass";
import CardBenefits from "../CardBenefits/CardBenefits";
import trofeu from "../../assets/trofeu.svg";
import corrida from "../../assets/corrida.svg";
import peso from "../../assets/peso.svg";
import supino from "../../assets/supino.svg";

const benefits = [
  {
    img: `${peso}`,
    title: "Best Training",
    description:
      "Best Training dolor sit amet consectetur. Cras eros molestie habitasse sed proin volutpat sollicitudin adipiscing.",
  },
  {
    img: `${corrida}`,
    title: "Modern Equipament",
    description:
      "Best Training dolor sit amet consectetur. Cras eros molestie habitasse sed proin volutpat sollicitudin adipiscing.",
  },
  {
    img: `${supino}`,
    title: "Experience Trainers",
    description:
      "Best Training dolor sit amet consectetur. Cras eros molestie habitasse sed proin volutpat sollicitudin adipiscing.",
  },
  {
    img: `${trofeu}`,
    title: "Award Winners",
    description:
      "Best Training dolor sit amet consectetur. Cras eros molestie habitasse sed proin volutpat sollicitudin adipiscing.",
  },
];

const BenefitsHome = () => {
  return (
    <div className="containerBenefitsHome">
      <h2>Why Choose Us</h2>

      <p>
        When picking a gym, consider its amenities like guest access, hours,
        location, and extra benefits to enahnce your experience
      </p>

      <div className="cardBenefitsHome">
        <div className="benefitsInfo">
          {benefits.map((ben) => (
            <CardBenefits
              img={ben.img}
              title={ben.title}
              description={ben.description}
            />
          ))}
        </div>
        <div className="benefitsImage"></div>
      </div>
    </div>
  );
};

export default BenefitsHome;
