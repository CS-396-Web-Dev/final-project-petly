"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import level_up_img from "../../../../public/profile/level_up.png";
import "./pet-level.css";

const PetLevel = ({ userId }) => {
  const [petLevel, setPetLevel] = useState("Loading...");
  const [currentExp, setCurrentExp] = useState(0);
  const [nextLevelExp, setNextLevelExp] = useState(0);

  useEffect(() => {
    const fetchPetLevel = async () => {
      try {
        const db = getFirestore();
        const userDocRef = doc(db, "users", userId);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          const userData = userDoc.data();
          const level = userData.petLevel || "Unknown";

          setPetLevel(level);
        } else {
          console.error("No such user document!");
          setPetLevel("Unknown");
        }
      } catch (error) {
        console.error("Error fetching pet level:", error);
        setPetLevel("Error");
      }
    };

    fetchPetLevel();
  }, [userId]);

  return (
    <>
      <p className="pet-level-text">Level {petLevel}</p>
      <p className="pet-level-subtext">800 Points to next level</p>

      <div className="pet-level">
        <div className="pet-level-progress progress-moved">
          <div className="pet-level-progress-bar"></div>
        </div>
        <div className="level-up-container">
          <Image src={level_up_img} alt="" className="level-up-img" priority />
        </div>
      </div>

      <p className="pet-exp-text">
        <span>5200</span>/6000
      </p>
    </>
  );
};

export default PetLevel;
