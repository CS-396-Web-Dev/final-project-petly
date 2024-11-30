"use client";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";
import dumbell_img from "../../../../public/action/dumbell.svg";
import football_img from "../../../../public/action/football.svg";
import tennis_img from "../../../../public/action/tennis.svg";
import ActionBtn from "@/components/atoms/action-btn/action-btn";

const ActionTraining = ({ userId }) => {
  const handleTrainingUpdate = async (value) => {
    try {
      const db = getFirestore();
      const userDocRef = doc(db, "users", userId);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        const userData = userDoc.data();
        const currentTraining = userData.petTraining || 0;
        const updatedTraining = Math.min(currentTraining + value, 100);

        await updateDoc(userDocRef, { petTraining: updatedTraining });
        console.log(`Updated petTraining to ${updatedTraining}`);
      } else {
        console.warn("User document not found!");
      }
    } catch (error) {
      console.error("Error updating petTraining:", error);
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
        handleClick={handleTrainingUpdate}
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
        handleClick={handleTrainingUpdate}
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
        handleClick={handleTrainingUpdate}
      />
    </>
  );
};

export default ActionTraining;
