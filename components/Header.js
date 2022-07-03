import logo from "../images/logo.svg";
import listen from "../images/listen.svg";
import Vector from "../images/Vector.svg";
import Link from "next/link";
import header from "../styles/Header.module.css";

const Header = () => {
  return (
    <div
      className={
        header.header +
        " h-20 flex items-center  justify-center  fixed w-full bg-red-400"
      }
    >
      <div className="flex w-4/5 justify-between items-center text-white ">
        <Link href="/">
          <img src={logo.src}></img>
        </Link>
        <img src={listen.src}></img>
        <Link href="/thisIsUs">
          <div>This Is Us</div>
        </Link>
        <div>Services</div>
        <div>Case Studies</div>
        <div>Resource Bunker</div>

        <div className="flex ">
          <img src={Vector.src}></img>
          <div className="text-3xl font-bold mr-3">1300 397 603</div>
          <button className="bg-main-red  rounded px-8 py-2">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
