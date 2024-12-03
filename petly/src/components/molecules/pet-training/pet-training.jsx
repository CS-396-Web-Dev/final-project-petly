"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import training_normal_img from "../../../../public/profile/training_normal.png";
import "./pet-training.css";

const PetTraining = ({ userId }) => {
  const [petTraining, setPetTraining] = useState(0);
  const [maxTraining, setMaxTraining] = useState(100);
  const [progressBarWidth, setProgressBarWidth] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("#24b874");
  const [condition, setCondition] = useState("Good Condition");

  useEffect(() => {
    const fetchPetTraining = async () => {
      try {
        const db = getFirestore();
        const userDocRef = doc(db, "users", userId);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          const userData = userDoc.data();
          const training = userData.petTraining || 0;
          const max = userData.maxTraining || 100;

          const progress = max ? Math.min((training / max) * 100, 100) : 0;

          setPetTraining(training);
          setMaxTraining(max);
          setProgressBarWidth(progress);

          if (training < 20) {
            setBackgroundColor("red");
            setCondition("Poor Condition");
          } else if (training < 80) {
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
        console.error("Error fetching pet training:", error);
      }
    };

    fetchPetTraining();
  }, [userId]);

  useEffect(() => {
    const styleSheet = document.styleSheets[0];
    const animationName = `progressAnimationTraining-${Math.floor(
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

    const progressBar = document.querySelector(".pet-training-progress-bar");
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
      <p className="pet-training-text">Training</p>
      <p className="pet-training-subtext">
        {condition}: <span className="pet-training-sp1">{petTraining}</span>
        <span className="pet-training-sp2">/{maxTraining}</span>
      </p>

      <div className="pet-training">
        <div className="pet-training-progress">
          <div
            className="pet-training-progress-bar"
            style={{
              backgroundColor,
              width: `${progressBarWidth}%`,
            }}
          ></div>
        </div>
        <div className="training">
          <Image
            src={training_normal_img}
            alt=""
            className="training_img"
            priority
          />
        </div>
      </div>
    </>
  );
};

export default PetTraining;
