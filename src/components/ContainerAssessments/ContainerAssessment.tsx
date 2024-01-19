import "./ContainerAssessment.sass";
import { LiaStarSolid } from "react-icons/lia";
import { Swiper, SwiperSlide } from "swiper/react";
import pessoa1 from "../../assets/pessoa1.jpg";
import pessoa2 from "../../assets/pessoa2.jpg";
import pessoa3 from "../../assets/pessoa3.jpg";
import pessoa4 from "../../assets/pessoa4.jpg";
import pessoa5 from "../../assets/pessoa5.jpg";
import quote from "../../assets/quote.png";

const props = {
  size: 20,
  color: "orange",
};

const dataSlide = [
  {
    name: "Luísa Santos",
    img: pessoa1,
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam eu ultrices.lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam eu ultrices.lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam eu ultrices.",
  },
  {
    name: "Gabriel Alencar",
    img: pessoa2,
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam eu ultrices.lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam eu ultrices.lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam eu ultrices.",
  },
  {
    name: "Maria Santos",
    img: pessoa3,
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam eu ultrices.lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam eu ultrices.lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam eu ultrices.",
  },
  {
    name: "Fhilipe Santos",
    img: pessoa4,
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam eu ultrices.lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam eu ultrices.lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam eu ultrices.",
  },
  {
    name: "Rafael Borges",
    img: pessoa5,
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam eu ultrices.lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam eu ultrices.lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam eu ultrices.",
  },
];

const ContainerAssessment = () => {
  return (
    <div className="containerAssessment">
      <h2> Testimonial</h2>
      <section className="evaluation">
        <section className="stars">
          <LiaStarSolid {...props} />
          <LiaStarSolid {...props} />
          <LiaStarSolid {...props} />
          <LiaStarSolid {...props} />
          <LiaStarSolid {...props} />
        </section>
        <p>4.5(895)star reviews from our clients</p>
      </section>
      <div className="slider">
        <Swiper slidesPerView={2} pagination={{ clickable: true }} navigation>
          {dataSlide.map((data) => (
            <SwiperSlide key={data.name}>
              <div className="cardSlide">
                <section className="image">
                  <img src={data.img} />
                  <p>{data.name}</p>
                </section>
                <section className="description">
                  <img src={quote} alt="quotation marks" />
                  <p>{data.description}</p>
                </section>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ContainerAssessment;
