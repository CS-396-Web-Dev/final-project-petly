"use client";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";
import cookie_img from "../../../../public/action/cookie.svg";
import pie_img from "../../../../public/action/pie.svg";
import chicken_img from "../../../../public/action/chicken.svg";
import ActionBtn from "@/components/atoms/action-btn/action-btn";
import { useActionStore, useModalStore, usePetStore } from "@/ctx/store";
import { AnimationState } from "@/helper/type";

const ActionHungriness = ({ userId }) => {
  const { setAnimationState } = usePetStore();
  const { setActionCooldown, isActionAvailable } = useActionStore();
  const closeModal = useModalStore((state) => state.closeModal);

  const handleHungrinessUpdate = async (
    value,
    actionName,
    cooldownDuration
  ) => {
    if (!isActionAvailable(actionName)) {
      console.warn(`${actionName} is on cooldown.`);
      return;
    }

    if (actionName === "cookie")
      setAnimationState(AnimationState.ANIMATION_WITH_COOKIE, 6000);
    else if (actionName === "pie")
      setAnimationState(AnimationState.ANIMATION_WITH_PIE, 6000);
    else setAnimationState(AnimationState.ANIMATION_WITH_CHICKEN, 6000);

    try {
      const db = getFirestore();
      const userDocRef = doc(db, "users", userId);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        const userData = userDoc.data();
        let currentHungriness = userData.petHungriness || 0;
        let currentExp = userData.petExp || 0;
        let currentLevel = userData.petLevel || 1;

        if (currentHungriness >= 100) {
          console.log("Hungriness is already at maximum. No updates made.");
          closeModal("petAction");
          return;
        }

        const updatedHungriness = Math.min(currentHungriness + value, 100);

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
          petHungriness: updatedHungriness,
          petExp: currentExp,
          petLevel: currentLevel,
        });

        console.log(
          `Updated petHungriness to ${updatedHungriness}, petExp to ${currentExp}, petLevel to ${currentLevel}`
        );

        setActionCooldown(actionName, cooldownDuration);
        closeModal("petAction");
      } else {
        console.warn("User document not found!");
      }
    } catch (error) {
      console.error("Error updating petHungriness and petExp:", error);
    }
  };

  return (
    <>
      <ActionBtn
        img_src={cookie_img}
        width={33}
        height={35}
        text={"Cookie"}
        value={12}
        pt={0}
        bg={"bg-1"}
        tx={"tx-1"}
        handleClick={() => handleHungrinessUpdate(12, "cookie", 60)}
        disabled={!isActionAvailable("cookie")}
      />
      <ActionBtn
        img_src={pie_img}
        width={36}
        height={33}
        text={"Pie"}
        value={18}
        pt={0}
        bg={"bg-2"}
        tx={"tx-2"}
        handleClick={() => handleHungrinessUpdate(18, "pie", 90)}
        disabled={!isActionAvailable("pie")}
      />
      <ActionBtn
        img_src={chicken_img}
        width={35}
        height={35}
        text={"Chicken"}
        value={24}
        pt={0}
        bg={"bg-3"}
        tx={"tx-3"}
        handleClick={() => handleHungrinessUpdate(24, "chicken", 120)}
        disabled={!isActionAvailable("chickenF")}
      />
    </>
  );
};

export default ActionHungriness;
