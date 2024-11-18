import Image from "next/image";
import more_btn from "../../../../public/more_btn.png";
import "./home-header.css";

const HomeHeader = () => {
  return (
    <header>
      <p>Home</p>
      <Image src={more_btn} alt="" className="more-btn" priority />
    </header>
  );
};

export default HomeHeader;
