import Image from "next/image";
import happy_good_img from "../../../../public/profile/happy_good.png";
import "./pet-happiness.css";

const PetHappiness = () => {
  return (
    <>
      <p className="pet-happiness-text">Happiness</p>
      <p className="pet-happiness-subtext">
        Good Condition: <span className="pet-happiness-sp1">75</span>
        <span className="pet-happiness-sp2">/100</span>
      </p>

      <div className="pet-happiness">
        <div className="pet-happiness-progress progress-moved">
          <div className="pet-happiness-progress-bar"></div>
        </div>
        <div className="happiness">
          <Image
            src={happy_good_img}
            alt=""
            className="happiness-img"
            priority
          />
        </div>
      </div>
    </>
  );
};

export default PetHappiness;
