"use client";
import Image from "next/image";
import pet_shadow_img from "../../../../public/sprite_sheet/pet_shadow.png";
import milktchi_sprite_sheet from "../../../../public/sprite_sheet/milktchi_sprite_sheet.png";
import { usePetStore } from "@/ctx/store";
import "./milktchi.css";

const Milktchi = () => {
  const animationState = usePetStore((state) => state.animationState);

  return (
    <section id="milktchi">
      <div className="milktchi-wrapper">
        <Image
          className={`milktchi-spritesheet pixel-art milktchi-${animationState}`}
          src={milktchi_sprite_sheet}
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

export default Milktchi;
