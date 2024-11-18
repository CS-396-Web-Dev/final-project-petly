import Image from "next/image";
import pet_image from "../../../../public/tile000.png";
import shadow_img from "../../../../public/shadow_2.png";
import "./pet-info.css";

const PetInfo = () => {
  return (
    <>
      <Image
        src={pet_image}
        alt=""
        className="pet-image"
        width={32}
        height={32}
        unoptimized={true}
        priority
      />
      <Image
        src={shadow_img}
        alt=""
        className="pet-shadow"
        width={32}
        height={32}
        priority
      />

      <p className="pet-name">Mametchi</p>
    </>
  );
};

export default PetInfo;
