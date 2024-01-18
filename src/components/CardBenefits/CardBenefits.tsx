import React from "react";
import "./CardBenefits.sass";
import { motion } from "framer-motion";

interface benefits {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  img: string;
  title: string;
  description: string;
}

const CardBenefitsHome = ({ img, title, description }: benefits) => {
  return (
    <motion.div
      className="cardBenefits"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <section className="benefitsImg">
        <img src={img} />
      </section>
      <section className="benefitsText">
        <h3>{title}</h3>
        <p>{description}</p>
      </section>
    </motion.div>
  );
};

export default CardBenefitsHome;
