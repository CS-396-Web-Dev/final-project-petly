import Image from "next/image";
import hungry_face_img from "../../../../public/hungry_face.png";
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
            src={hungry_face_img}
            alt=""
            className="hungry-face-img"
            priority
          />
        </div>
      </div>
    </>
  );
};

export default PetHungriness;
