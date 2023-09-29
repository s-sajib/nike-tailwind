import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center max-container">
      <a href="#">
        <img src={headerLogo} alt="logo" />
      </a>
      <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
        {navLinks?.map((navlink) => (
          <li key={navlink.label}>
            <a
              href={navlink.href}
              className="font-montserrat leading-normal text-lg text-slate-gray"
            >
              {navlink.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="flex text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
        <Button>Sign In</Button>
      </div>
    </nav>
  );
};

export default Navbar;
