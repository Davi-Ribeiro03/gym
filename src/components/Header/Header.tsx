import { useState } from "react";
import Logo from "../../assets/logo.png";
import "./Header.sass";
import { motion } from "framer-motion";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <motion.header
      className="header"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <img src={Logo} alt="logo da academia" />

      <nav>
        <ul className={`desktop ${menuActive && "mobile"}`}>
          <li>Home</li>
          <li>Class</li>
          <li>Membership</li>
          <li>Trainers</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </nav>

      <AiOutlineMenu
        size={30}
        color="white"
        className="menuHamburguer"
        onClick={() => setMenuActive(!menuActive)}
      />
    </motion.header>
  );
};

export default Header;
