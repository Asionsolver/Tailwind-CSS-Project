import { useState } from "react";
import NavActionButton from "@/components/navActionButton/NavActionButton";
import Brandlog from "@/assets/brand-logo.png";
import { NavLink } from "react-router-dom";
import { cn } from "@/utils";

const Navbar = () => {
  let Links = [
    { name: "Features", link: "/" },
    { name: "Team", link: "/" },
    { name: "Chatbot", link: "/" },
    { name: "Roadmap", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className={cn(`w-full shadow-md`, `${open ? "fixed" : "relative"}`)}>
      <div className="items-center justify-between bg-white px-7 py-4 md:flex md:px-10">
        <div className="flex cursor-pointer items-center font-poppins text-xl font-bold text-gray-800">
          <img src={Brandlog} alt="" className="h-9 w-9" />

          <div className="text-primary"> Quiet Tube</div>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-primary absolute right-8 top-6 cursor-pointer text-3xl md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={cn(
            `absolute left-0 z-[-1] w-full pb-12 pl-9 transition-all duration-500 ease-in md:static md:z-auto md:flex md:w-auto md:items-center md:pb-0 md:pl-0`,
            `${open ? "bg-primary top-16" : "top-[-490px] bg-white"}`,
          )}
        >
          {Links.map((link) => (
            <li key={link.name} className="my-7 text-xl md:my-0 md:ml-8">
              <NavLink
                to={link.link}
                className={`duration-500 ${open ? "py-6 text-white" : "text-primary"} `}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          <NavActionButton open={open}>Get the app</NavActionButton>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
