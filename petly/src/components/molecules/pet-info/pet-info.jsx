"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import pet_info_shadow_img from "../../../../public/sprite_sheet/pet_info_shadow.png";
import mametchi_sprite_sheet from "../../../../public/sprite_sheet/mametchi_sprite_sheet.png";
import "./pet-info.css";

const PetInfo = ({ userId }) => {
  const SPRITE_WIDTH = 32;
  const SPRITE_COLUMNS = 10;
  const SPRITE_COUNT = 100;

  const [spritePosition, setSpritePosition] = useState({ x: 0, y: 0 });
  const [petName, setPetName] = useState("Loading...");

  useEffect(() => {
    const fetchPetType = async () => {
      try {
        const db = getFirestore();
        const userDocRef = doc(db, "users", userId);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          const userData = userDoc.data();
          setPetName(userData.petType || "Unknown");
        } else {
          console.error("No such user document!");
          setPetName("Unknown");
        }
      } catch (error) {
        console.error("Error fetching pet type:", error);
        setPetName("Error");
      }
    };

    fetchPetType();
  }, [userId]);

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

      <Image
        className="pet-shadow"
        src={pet_info_shadow_img}
        alt=""
        width={32}
        height={32}
      />

      <p className="pet-name">{petName}</p>
    </>
  );
};

export default PetInfo;
