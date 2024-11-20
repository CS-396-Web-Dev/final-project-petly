"use client";
import { useState, useEffect } from "react";
import shadow_img from "../../../../public/shadow_2.png";
import mametchi_sprite_sheet from "../../../../public/mametchi_sprite_sheet.png";
import "./pet-info.css";

const PetInfo = () => {
  const SPRITE_WIDTH = 32;
  const SPRITE_COLUMNS = 10;
  const SPRITE_COUNT = 100;

  const [spritePosition, setSpritePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const randomSpriteIndex = Math.floor(Math.random() * SPRITE_COUNT);
    const x = -(randomSpriteIndex % SPRITE_COLUMNS) * SPRITE_WIDTH;
    const y = -Math.floor(randomSpriteIndex / SPRITE_COLUMNS) * SPRITE_WIDTH;
    setSpritePosition({ x, y });
  }, []);

  return (
    <>
      <div
        className="pet-image"
        style={{
          backgroundImage: `url(${mametchi_sprite_sheet.src})`,
          backgroundPosition: `${spritePosition.x}px ${spritePosition.y}px`,
        }}
      ></div>

      <img
        className="pet-shadow"
        src={shadow_img.src}
        alt=""
        width={32}
        height={32}
      />

      <p className="pet-name">Mametchi</p>
    </>
  );
};

export default PetInfo;
