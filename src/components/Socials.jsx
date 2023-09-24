import { Link } from "react-router-dom";

import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaCodepen,
} from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link to={""} className="hover:text-accent transition-all duration-300">
        <FaGithub />
      </Link>
      <Link to={""} className="hover:text-accent transition-all duration-300">
        <FaLinkedin />
      </Link>
      <Link to={""} className="hover:text-accent transition-all duration-300">
        <FaCodepen />
      </Link>
      <Link to={""} className="hover:text-accent transition-all duration-300">
        <FaFacebook />
      </Link>
      <Link to={""} className="hover:text-accent transition-all duration-300">
        <FaInstagram />
      </Link>
    </div>
  );
};

export default Socials;
