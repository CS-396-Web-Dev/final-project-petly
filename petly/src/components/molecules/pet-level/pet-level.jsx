import Image from "next/image";
import level_up_img from "../../../../public/level_up.png";
import "./pet-level.css";

const PetLevel = () => {
  return (
    <>
      <p className="pet-level-text">Level 99</p>
      <p className="pet-level-subtext">800 Points to next level</p>

      <div className="pet-level">
        <div className="pet-level-progress progress-moved">
          <div className="pet-level-progress-bar"></div>
        </div>
        <div className="level-up-container">
          <Image src={level_up_img} alt="" className="level-up-img" priority />
        </div>
      </div>

      <p className="pet-exp-text">
        <span>5200</span>/6000
      </p>
    </>
  );
};

export default PetLevel;
