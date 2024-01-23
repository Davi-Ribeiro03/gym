import "./PresentationHome.sass";
import ImgCards from "../ImgCards/ImgCards";
import { motion } from "framer-motion";
import Button from "../Button/Button";

const PresentationHome = () => {
  return (
    <div className="containerPresentationHome">
      <motion.div
        className="presentationText"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <section className="title">
          <h1 className="titleSection">
            Take care of your body and it's the only place you have to live
          </h1>
        </section>
        <section className="textAndButton">
          <p>
            Gym session or brisk walk can help. Physical activy stimulates many
            brain chemicals that may leave you.
          </p>
          <Button>Be a Member</Button>
        </section>
      </motion.div>

      <motion.div
        className="presentationImg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="imageHome">
          <div className="imgCardComponent">
            <ImgCards />
          </div>
        </div>
        {/* <img className="imageHome" src={imageHome} alt="" /> */}
      </motion.div>
    </div>
  );
};

export default PresentationHome;
