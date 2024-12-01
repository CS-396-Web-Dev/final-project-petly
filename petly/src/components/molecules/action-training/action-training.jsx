"use client";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";
import dumbell_img from "../../../../public/action/dumbell.svg";
import football_img from "../../../../public/action/football.svg";
import tennis_img from "../../../../public/action/tennis.svg";
import ActionBtn from "@/components/atoms/action-btn/action-btn";
import { useActionStore, useModalStore } from "@/ctx/store";

const ActionTraining = ({ userId }) => {
  const { setActionCooldown, isActionAvailable } = useActionStore();
  const closeModal = useModalStore((state) => state.closeModal);

  const handleTrainingUpdate = async (value, actionName, cooldownDuration) => {
    if (!isActionAvailable(actionName)) {
      console.warn(`${actionName} is on cooldown.`);
      return;
    }

    try {
      const db = getFirestore();
      const userDocRef = doc(db, "users", userId);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        const userData = userDoc.data();
        const currentTraining = userData.petTraining || 0;
        const currentExp = userData.petExp || 0;

        if (currentTraining >= 100) {
          console.log("Training is already at maximum. No updates made.");
          closeModal("petAction");
          return;
        }

        const updatedTraining = Math.min(currentTraining + value, 100);
        let updatedExp = currentExp + value;

        if (currentTraining + value > 100)
          updatedExp -= value - (100 - currentTraining);

        const updatedLevel = Math.floor(updatedExp / 1000) + 1;

        await updateDoc(userDocRef, {
          petTraining: updatedTraining,
          petExp: updatedExp,
          petLevel: updatedLevel,
        });

        console.log(
          `Updated petTraining to ${updatedTraining}, petExp to ${updatedExp}, petLevel to ${updatedLevel}`
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
