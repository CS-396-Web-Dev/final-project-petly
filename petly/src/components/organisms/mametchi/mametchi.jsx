import Image from "next/image";
import shadow_img from "../../../../public/shadow.png";
import mametchi_sprite_sheet from "../../../../public/mametchi_sprite_sheet.png";
import "./mametchi.css";

const Mametchi = () => {
  return (
    <section id="mametchi">
      <div className="mametchi-wrapper">
        <Image
          className="mametchi-spritesheet pixel-art"
          src={mametchi_sprite_sheet}
          alt=""
          width={320}
          height={320}
          unoptimized={true}
          priority
        />
      </div>
      <Image
        className="pixel-shadow pixel-art"
        src={shadow_img}
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
