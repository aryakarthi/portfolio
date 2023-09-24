import { Link, useLocation } from "react-router-dom";

// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

// nav data
export const navData = [
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
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-10 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
        {navData.map((link, index) => {
          return (
            <Link
              to={link.path}
              key={index}
              className={`${
                link.path === location.pathname && "text-accent"
              } relative flex items-center group hover:text-accent`}
            >
              <span className="absolute pr-14 right-0 hidden xl:group-hover:flex">
                <span className="bg-white relative flex text-primary items-center p-[8px] rounded-[3px]">
                  <span className="text-[12px] leading-none font-semibold capitalize">
                    {link.name}
                  </span>
                  <span className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute right-0"></span>
                </span>
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
