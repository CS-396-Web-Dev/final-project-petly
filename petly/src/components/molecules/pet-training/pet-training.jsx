import Image from "next/image";
import training_normal_img from "../../../../public/profile/training_normal.png";
import "./pet-training.css";

const PetTraining = () => {
  return (
    <>
      <p className="pet-training-text">Training</p>
      <p className="pet-training-subtext">
        Good Condition: <span className="pet-training-sp1">85</span>
        <span className="pet-training-sp2">/100</span>
      </p>

      <div className="pet-training">
        <div className="pet-training-progress progress-moved">
          <div className="pet-training-progress-bar"></div>
        </div>
        <div className="training">
          <Image
            src={training_normal_img}
            alt=""
            className="training_img"
            priority
          />
        </div>
      </div>
    </>
  );
};

export default PetTraining;
