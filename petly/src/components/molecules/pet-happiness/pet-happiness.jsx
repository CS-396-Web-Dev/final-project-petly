"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import happy_good_img from "../../../../public/profile/happy_good.png";
import "./pet-happiness.css";

const PetHappiness = ({ userId }) => {
  const [petHappiness, setPetHappiness] = useState(0);
  const [maxHappiness, setMaxHappiness] = useState(100);
  const [progressBarWidth, setProgressBarWidth] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("#24b874");
  const [condition, setCondition] = useState("Good Condition");

  useEffect(() => {
    const fetchPetHappiness = async () => {
      try {
        const db = getFirestore();
        const userDocRef = doc(db, "users", userId);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          const userData = userDoc.data();
          const happiness = userData.petHappiness || 0;
          const max = userData.maxHappiness || 100;

          const progress = max ? Math.min((happiness / max) * 100, 100) : 0;

          setPetHappiness(happiness);
          setMaxHappiness(max);
          setProgressBarWidth(progress);

          if (happiness < 20) {
            setBackgroundColor("red");
            setCondition("Poor Condition");
          } else if (happiness < 80) {
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
        console.error("Error fetching pet happiness:", error);
      }
    };

    fetchPetHappiness();
  }, [userId]);

  useEffect(() => {
    const styleSheet = document.styleSheets[0];
    const animationName = `progressAnimationHappiness-${Math.floor(
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

    const progressBar = document.querySelector(".pet-happiness-progress-bar");
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
  }, [progressBarWidth, backgroundColor]);

  return (
    <>
      <p className="pet-happiness-text">Happiness</p>
      <p className="pet-happiness-subtext">
        {condition}: <span className="pet-happiness-sp1">{petHappiness}</span>
        <span className="pet-happiness-sp2">/{maxHappiness}</span>
      </p>

      <div className="pet-happiness">
        <div className="pet-happiness-progress">
          <div
            className="pet-happiness-progress-bar"
            style={{
              backgroundColor,
              width: `${progressBarWidth}%`,
            }}
          ></div>
        </div>
        <div className="happiness">
          <Image
            src={happy_good_img}
            alt=""
            className="happiness-img"
            priority
          />
        </div>
      </div>
    </>
  );
};

export default PetHappiness;
