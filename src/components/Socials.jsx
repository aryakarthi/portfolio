import { Link } from "react-router-dom";

import { FaLinkedin, FaGithub, FaCodepen } from "react-icons/fa";

const socialsData = [
  {
    title: "GitHub",
    icon: <FaGithub />,
    link: "https://github.com/aryakarthi",
  },
  {
    title: "LinkedIn",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/ariyaperumal-m/",
  },
  {
    title: "CodePen",
    icon: <FaCodepen />,
    link: "https://codepen.io/aryakarthi/pens/public",
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialsData.map((social, index) => (
        <Link
          key={index}
          to={social.link}
          target="_blank"
          className="hover:text-accent transition-all duration-300"
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
