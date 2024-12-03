"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import level_up_img from "../../../../public/profile/level_up.png";
import "./pet-level.css";

const PetLevel = ({ userId }) => {
  const [petLevel, setPetLevel] = useState("Loading...");
  const [petExp, setPetExp] = useState(0);
  const [nextExp, setNextExp] = useState(0);
  const [progressBarWidth, setProgressBarWidth] = useState(0);

  useEffect(() => {
    const fetchPetLevel = async () => {
      try {
        const db = getFirestore();
        const userDocRef = doc(db, "users", userId);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          const userData = userDoc.data();
          const level = userData.petLevel || "Unknown";
          const exp = userData.petExp || 0;

          setPetLevel(level);
          setPetExp(exp);

          const calculateNextExp = (level) => {
            const baseExp = 100;
            const growthFactor = 1.5;

            if (level === 1) {
              return baseExp;
            }

            return Math.floor(baseExp * Math.pow(growthFactor, level - 1));
          };

          const calculatedNextExp = calculateNextExp(level);
          setNextExp(calculatedNextExp);

          const progress = Math.min((exp / calculatedNextExp) * 100, 100);
          setProgressBarWidth(progress);
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

  useEffect(() => {
    const styleSheet = document.styleSheets[0];
    const animationName = `progressAnimationLevel-${Math.floor(
      Math.random() * 1000
    )}`;
    const keyframes = `
      @keyframes ${animationName} {
        0% {
          width: 0%;
        }
        100% {
          width: ${progressBarWidth}%;
        }
      }
    `;

    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

    const progressBar = document.querySelector(".pet-level-progress-bar");
    if (progressBar) {
      progressBar.style.animation = `${animationName} 6s forwards`;
      progressBar.style.backgroundColor = "#24b874";
    }

    return () => {
      const index = Array.from(styleSheet.cssRules).findIndex(
        (rule) => rule.name === animationName
      );
      if (index !== -1) {
        styleSheet.deleteRule(index);
      }
    };
  }, [progressBarWidth]);

  return (
    <>
      <p className="pet-level-text">Level {petLevel}</p>
      <p className="pet-level-subtext">
        {nextExp - petExp} Points to next level
      </p>

      <div className="pet-level">
        <div className="pet-level-progress progress-moved">
          <div
            className="pet-level-progress-bar"
            style={{
              width: `${progressBarWidth}%`,
              backgroundColor: "#24b874",
            }}
          ></div>
        </div>
        <div className="level-up-container">
          <Image src={level_up_img} alt="" className="level-up-img" priority />
        </div>
      </div>

      <p className="pet-exp-text">
        <span>{petExp}</span>/{nextExp}
      </p>
    </>
  );
};

export default PetLevel;
