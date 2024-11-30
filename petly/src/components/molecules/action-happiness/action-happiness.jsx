"use client";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";
import gift_img from "../../../../public/action/gift.svg";
import music_img from "../../../../public/action/music.svg";
import game_img from "../../../../public/action/game.svg";
import ActionBtn from "@/components/atoms/action-btn/action-btn";

const ActionHappiness = ({ userId }) => {
  const handleHappinessUpdate = async (value) => {
    try {
      const db = getFirestore();
      const userDocRef = doc(db, "users", userId);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        const userData = userDoc.data();
        const currentHappiness = userData.petHappiness || 0;
        const currentExp = userData.petExp || 0;

        if (currentHappiness >= 100) {
          console.log("Happiness is already at maximum. No updates made.");
          return;
        }

        const updatedHappiness = Math.min(currentHappiness + value, 100);
        var updatedExp = currentExp + value;
        if (currentHappiness + value > 100)
          updatedExp -= value - (100 - currentHappiness);

        const updatedLevel = Math.floor(updatedExp / 1000) + 1;

        await updateDoc(userDocRef, {
          petHappiness: updatedHappiness,
          petExp: updatedExp,
          petLevel: updatedLevel,
        });

        console.log(
          `Updated petHappiness to ${updatedHappiness}, petExp to ${updatedExp}, petLevel to ${updatedLevel}`
        );
      } else {
        console.warn("User document not found!");
      }
    } catch (error) {
      console.error("Error updating petHappiness and petExp:", error);
    }
  };

  return (
    <>
      <ActionBtn
        img_src={gift_img}
        width={32}
        height={28}
        text={"Gift"}
        value={12}
        pt={0}
        bg={"bg-1"}
        tx={"tx-1"}
        handleClick={handleHappinessUpdate}
      />
      <ActionBtn
        img_src={music_img}
        width={39}
        height={37}
        text={"Music"}
        value={18}
        pt={3}
        bg={"bg-2"}
        tx={"tx-2"}
        handleClick={handleHappinessUpdate}
      />
      <ActionBtn
        img_src={game_img}
        width={55}
        height={33}
        text={"Game"}
        value={24}
        pt={5}
        bg={"bg-3"}
        tx={"tx-3"}
        handleClick={handleHappinessUpdate}
      />
    </>
  );
};

export default ActionHappiness;
