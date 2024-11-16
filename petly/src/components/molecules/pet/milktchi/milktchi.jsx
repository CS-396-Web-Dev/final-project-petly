import Image from "next/image";
import shadow from "../../../../../public/shadow.png";
import milktchi from "../../../../../public/milktchi_sprite_sheet.png";
import "./milktchi.css";

const Milktchi = () => {
  return (
    <section id="milktchi">
      <div className="milktchi-wrapper">
        <Image
          className="milktchi-spritesheet pixel-art"
          src={milktchi}
          alt=""
          width={320}
          height={320}
          unoptimized={true}
          priority
        />
      </div>
      <Image
        className="pixel-shadow pixel-art"
        src={shadow}
        alt=""
        width={32}
        height={32}
        unoptimized={true}
        priority
      />
    </section>
  );
};

export default Milktchi;
