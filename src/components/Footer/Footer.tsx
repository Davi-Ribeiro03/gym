import Logo from "../../assets/logo.png";
import "./Footer.sass";
import Wpp from "../../assets/whatsapp.svg";
import Insta from "../../assets/instagram.svg";
import Face from "../../assets/facebook.svg";
import Twitter from "../../assets/twitter.png";
import Telefone from "../../assets/telefone.png";
import Email from "../../assets/email.png";
import Local from "../../assets/local.png";

const Footer = () => {
  return (
    <div className="containerFooter">
      <div className="footer">
        <div className="gymnastic">
          <img className="logo" src={Logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            quisquam illum, sunt quasi vel itaque! Quaerat consectetur atque
            iure ducimus mollitia provident minus harum itaque, soluta ex magnam
            quos sed!
          </p>
          <section className="redesSociais">
            <img src={Wpp} alt="" />
            <img src={Insta} alt="" />
            <img src={Face} alt="" />
            <img src={Twitter} alt="" />
          </section>
        </div>

        <section className="cardFooter">
          <p className="title">Company</p>
          <p>Home</p>
          <p>Class</p>
          <p>Membership</p>
          <p>Trainers</p>
          <p>Blog</p>
        </section>
        <section className="cardFooter">
          <p className="title">Category</p>
          <p>Strengh Training</p>
          <p>Body Building</p>
          <p>Weight Lost</p>
          <p>Basic Yoga</p>
          <p>Physical Fitness</p>
        </section>
        <div className="cardFooter">
          <p className="title">Contact Us</p>
          <section className="contact">
            <img src={Telefone} alt="" />
            <span>+971 50 461 7277</span>
          </section>
          <section className="contact">
            <img src={Email} alt="" />
            <span>info@domain.com</span>
          </section>
          <section className="contact">
            <img src={Local} alt="" />
            <span>Warehouse 4, 5th Street, Al Quoz, Al Quoz 3, Dubai</span>
          </section>
        </div>
      </div>

      <div className="division"></div>

      <section className="terms">
        <span>@ 2024 Gymnastic</span>
        <span>Terms of Use | Privacy Policy</span>
      </section>
    </div>
  );
};

export default Footer;
