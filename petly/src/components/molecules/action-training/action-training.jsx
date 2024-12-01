"use client";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";
import dumbell_img from "../../../../public/action/dumbell.svg";
import football_img from "../../../../public/action/football.svg";
import tennis_img from "../../../../public/action/tennis.svg";
import ActionBtn from "@/components/atoms/action-btn/action-btn";
import { useActionStore, useModalStore, usePetStore } from "@/ctx/store";
import { AnimationState } from "@/helper/type";

const ActionTraining = ({ userId }) => {
  const { setAnimationState } = usePetStore();
  const { setActionCooldown, isActionAvailable } = useActionStore();
  const closeModal = useModalStore((state) => state.closeModal);

  const handleTrainingUpdate = async (value, actionName, cooldownDuration) => {
    if (!isActionAvailable(actionName)) {
      console.warn(`${actionName} is on cooldown.`);
      return;
    }

    if (actionName === "dumbell")
      setAnimationState(AnimationState.ANIMATION_WITH_DUMBELL);
    else if (actionName === "football")
      setAnimationState(AnimationState.ANIMATION_WITH_FOOTBALL);
    else setAnimationState(AnimationState.ANIMATION_WITH_TENNIS);

    setTimeout(() => {
      setAnimationState(AnimationState.REGULAR);
    }, 6000);

    try {
      const db = getFirestore();
      const userDocRef = doc(db, "users", userId);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        const userData = userDoc.data();
        let currentTraining = userData.petTraining || 0;
        let currentExp = userData.petExp || 0;
        let currentLevel = userData.petLevel || 1;

        if (currentTraining >= 100) {
          console.log("Training is already at maximum. No updates made.");
          closeModal("petAction");
          return;
        }

        const updatedTraining = Math.min(currentTraining + value, 100);

        const baseExp = 100;
        const growthFactor = 1.5;

        const calculateNextExp = (level) => {
          if (level === 1) return baseExp;
          return Math.floor(baseExp * Math.pow(growthFactor, level - 1));
        };

        let nextExp = calculateNextExp(currentLevel);
        currentExp += value;

        while (currentExp >= nextExp) {
          currentExp -= nextExp;
          currentLevel += 1;
          nextExp = calculateNextExp(currentLevel);
        }

        await updateDoc(userDocRef, {
          petTraining: updatedTraining,
          petExp: currentExp,
          petLevel: currentLevel,
        });

        console.log(
          `Updated petTraining to ${updatedTraining}, petExp to ${currentExp}, petLevel to ${currentLevel}`
        );

        setActionCooldown(actionName, cooldownDuration);
        closeModal("petAction");
      } else {
        console.warn("User document not found!");
      }
    } catch (error) {
      console.error("Error updating petTraining and petExp:", error);
    }
  };

  return (
    <>
      <ActionBtn
        img_src={dumbell_img}
        width={59}
        height={35}
        text={"Dumbell"}
        value={12}
        pt={1}
        bg={"bg-1"}
        tx={"tx-1"}
        handleClick={() => handleTrainingUpdate(12, "dumbell", 60)}
        disabled={!isActionAvailable("dumbell")}
      />
      <ActionBtn
        img_src={football_img}
        width={39}
        height={35}
        text={"Football"}
        value={18}
        pt={0}
        bg={"bg-2"}
        tx={"tx-2"}
        handleClick={() => handleTrainingUpdate(18, "football", 90)}
        disabled={!isActionAvailable("football")}
      />
      <ActionBtn
        img_src={tennis_img}
        width={39}
        height={40}
        text={"Tennis"}
        value={24}
        pt={1}
        bg={"bg-3"}
        tx={"tx-3"}
        handleClick={() => handleTrainingUpdate(24, "tennis", 120)}
        disabled={!isActionAvailable("tennis")}
      />
    </>
  );
};

export default ActionTraining;
