import Image from "next/image";
import pet_shadow_img from "../../../../public/sprite_sheet/pet_shadow.png";
import doggchi_sprite_sheet from "../../../../public/sprite_sheet/doggchi_sprite_sheet.png";
import "./doggchi.css";

const DoggChi = () => {
  return (
    <section id="doggchi">
      <div className="doggchi-wrapper">
        <Image
          className="doggchi-spritesheet pixel-art"
          src={doggchi_sprite_sheet}
          alt=""
          width={320}
          height={320}
          unoptimized={true}
          priority
        />
      </div>
      <Image
        className="pixel-shadow pixel-art"
        src={pet_shadow_img}
        alt=""
        width={32}
        height={32}
        unoptimized={true}
        priority
      />
    </section>
  );
};

export default DoggChi;
