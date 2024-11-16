import Image from "next/image";
import sprite_all from "../../../../../public/sprite_sheet_all.png";
import "./hatch.css";

const Hatch = () => {
  return (
    <section id="hatch">
      <div className="hatch-wrapper type-2">
        <Image
          className="spritesheet pixel-art egg-2 unhatched"
          src={sprite_all}
          alt=""
          width={1024}
          height={1024}
          unoptimized={true}
          priority
        />
      </div>
    </section>
  );
};

export default Hatch;
