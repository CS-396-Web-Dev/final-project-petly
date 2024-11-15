import Image from "next/image";
import more_btn from "../../../../../public/more_btn.png";
import "./header.css";

const Header = () => {
  return (
    <header>
      <p>Home</p>
      <Image src={more_btn} alt="" className="more-btn" />
    </header>
  );
};

export default Header;
