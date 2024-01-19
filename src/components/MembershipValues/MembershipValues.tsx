import "./MembershipValues.sass";
import check from "../../assets/check.png";
import Button from "../Button/Button";
import { motion } from "framer-motion";

const benefitsMembership = [
  "Gym without Trainers",
  "Unlimited Access",
  "Access to all Clubs",
  "Training for all Classes",
  "Exclusive Studio",
  "Additional Session",
];

const MembershipValues = ({
  name,
  value,
  benefitsReleaseds,
}: {
  name: string;
  value: number;
  benefitsReleaseds: number;
}) => {
  return (
    <motion.div
      className="membershipValues"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <h4>{name}</h4>
      <p>
        <strong>${value}</strong>
        /mo
      </p>
      <div className="benefitsMembership">
        {benefitsMembership.map((benefit, index) => (
          <section
            key={index}
            className={`benefit ${
              index >= benefitsReleaseds && "benefitBlocked"
            }`}
          >
            <img className="check" src={check} alt="check" />
            <p>{benefit}</p>
          </section>
        ))}
        <section className="button">
          <Button>Join Now</Button>
        </section>
      </div>
    </motion.div>
  );
};

export default MembershipValues;
