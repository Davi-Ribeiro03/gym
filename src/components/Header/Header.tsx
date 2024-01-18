import Logo from "../../assets/logo.png";
import "./Header.sass";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      className="header"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <img src={Logo} alt="logo da academia" />

      <nav>
        <ul>
          <li>Home</li>
          <li>Class</li>
          <li>Membership</li>
          <li>Trainers</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
