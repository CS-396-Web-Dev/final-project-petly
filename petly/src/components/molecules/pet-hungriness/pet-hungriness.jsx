"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import hungry_normal_img from "../../../../public/profile/hungry_normal.png";
import "./pet-hungriness.css";

const PetHungriness = ({ userId }) => {
  const [petHungriness, setPetHungriness] = useState(0);
  const [maxHungriness, setMaxHungriness] = useState(100);
  const [progressBarWidth, setProgressBarWidth] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("#24b874");
  const [condition, setCondition] = useState("Normal Condition");

  useEffect(() => {
    const fetchPetHungriness = async () => {
      try {
        const db = getFirestore();
        const userDocRef = doc(db, "users", userId);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          const userData = userDoc.data();
          const hungriness = userData.petHungriness || 0;
          const max = userData.maxHungriness || 100;

          const progress = max ? Math.min((hungriness / max) * 100, 100) : 0;

          setPetHungriness(hungriness);
          setMaxHungriness(max);
          setProgressBarWidth(progress);

          if (hungriness < 20) {
            setBackgroundColor("red");
            setCondition("Poor Condition");
          } else if (hungriness < 80) {
            setBackgroundColor("#fbaa00");
            setCondition("Normal Condition");
          } else {
            setBackgroundColor("#24b874");
            setCondition("Good Condition");
          }
        } else {
          console.error("No such user document!");
        }
      } catch (error) {
        console.error("Error fetching pet hungriness:", error);
      }
    };

    fetchPetHungriness();
  }, [userId]);

  useEffect(() => {
    const styleSheet = document.styleSheets[0];
    const animationName = `progressAnimationHungriness-${Math.floor(
      Math.random() * 1000
    )}`;
    const keyframes = `
      @keyframes ${animationName} {
        0% {
          width: 0%;
          background-color: ${backgroundColor};
        }
        100% {
          width: ${progressBarWidth}%;
          background-color: ${backgroundColor};
        }
      }
    `;

    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

    const progressBar = document.querySelector(".pet-hungriness-progress-bar");
    if (progressBar) {
      progressBar.style.animation = `${animationName} 6s forwards`;
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
      <p className="pet-hungriness-text">Hungriness</p>
      <p className="pet-hungriness-subtext">
        {condition}:{" "}
        <span className="pet-hungriness-sp1">{petHungriness}</span>
        <span className="pet-hungriness-sp2">/{maxHungriness}</span>
      </p>

      <div className="pet-hungriness">
        <div className="pet-hungriness-progress">
          <div className="pet-hungriness-progress-bar"></div>
        </div>
        <div className="hungriness">
          <Image
            src={hungry_normal_img}
            alt=""
            className="hungriness-img"
            priority
          />
        </div>
      </div>
    </>
  );
};

export default PetHungriness;
