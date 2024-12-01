"use client";
import Image from "next/image";
import pet_shadow_img from "../../../../public/sprite_sheet/pet_shadow.png";
import lovelitch_sprite_sheet from "../../../../public/sprite_sheet/lovelitchi_sprite_sheet.png";
import { usePetStore } from "@/ctx/store";
import "./lovelitchi.css";

const LoveLitchi = () => {
  const animationState = usePetStore((state) => state.animationState);

  return (
    <section id="lovelitchi">
      <div className="lovelitchi-wrapper">
        <Image
          className={`lovelitchi-spritesheet pixel-art lovelitchi-${animationState}`}
          src={lovelitch_sprite_sheet}
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

export default LoveLitchi;
