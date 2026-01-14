import { Link, useLocation } from "react-router-dom";

// icons
import {
  HiHome,
  HiUser,
  HiRectangleGroup,
  HiEnvelope,
} from "react-icons/hi2";

// nav data
const navData = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "/about", icon: <HiUser /> },
  { name: "projects", path: "/projects", icon: <HiRectangleGroup /> },
  {
    name: "contact",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];

const Nav = () => {
  const location = useLocation();
  return (
    <nav className="flex flex-col items-center lg:justify-center gap-y-4 fixed h-max bottom-0 mt-auto lg:right-[2%] z-50 top-0 w-full lg:w-16 lg:max-w-md lg:h-screen">
      <div className="flex w-full lg:flex-col items-center justify-between lg:justify-center gap-y-10 px-10 h-[80px] lg:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl lg:text-xl lg:rounded-full">
        {navData.map((link, index) => {
          return (
            <Link
              to={link.path}
              key={index}
              className={`${
                link.path === location.pathname && "text-accent"
              } relative flex items-center group hover:text-accent`}
            >
              <span className="absolute right-14 hidden lg:group-hover:flex bg-white text-primary p-2 rounded-[4px] text-[12px] leading-none font-semibold capitalize">
                {link.name}
              </span>

              <span>{link.icon}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
