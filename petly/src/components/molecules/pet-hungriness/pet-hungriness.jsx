import Image from "next/image";
import hungry_normal_img from "../../../../public/profile/hungry_normal.png";
import "./pet-hungriness.css";

const PetHungriness = () => {
  return (
    <>
      <p className="pet-hungriness-text">Hungriness</p>
      <p className="pet-hungriness-subtext">
        Normal Condition: <span className="pet-hungriness-sp1">45</span>
        <span className="pet-hungriness-sp2">/100</span>
      </p>

      <div className="pet-hungriness">
        <div className="pet-hungriness-progress progress-moved">
          <div className="pet-hungriness-progress-bar"></div>
        </div>
        <div className="hungriness">
          <Image
            src={hungry_normal_img}
            alt=""
            className="hungriness-img"
            priority
          />
        </div>
      </div>
    </>
  );
};

export default PetHungriness;
