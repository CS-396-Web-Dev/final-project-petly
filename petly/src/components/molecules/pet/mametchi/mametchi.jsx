import Image from "next/image";
import shadow from "../../../../../public/shadow.png";
import mametchi from "../../../../../public/mametchi_sprite_sheet.png";
import "./mametchi.css";

const Mametchi = () => {
  return (
    <section id="mametchi">
      <div className="mametchi-wrapper">
        <Image
          className="mametchi-spritesheet pixel-art"
          src={mametchi}
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

export default Mametchi;
