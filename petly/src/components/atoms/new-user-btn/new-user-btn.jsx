"use client";
import { useRouter } from "next/navigation";
import { PetType } from "@/helper/type";
import { db } from "@/firebase/config";
import { doc, setDoc } from "firebase/firestore";
import { useAuth } from "@/ctx/AuthContext";
import "./new-user-btn.css";

const NewUserBtn = ({ petName, petType, initPet }) => {
  const router = useRouter();
  const { user } = useAuth();

  const handleClick = async () => {
    if (!petName || petName.trim() === "") {
      alert("Please enter a pet name!");
      return;
    }

    let finalPetType = petType;
    if (petType === undefined) {
      const options = Object.values(PetType);
      finalPetType = options[Math.floor(Math.random() * options.length)];
    }

    initPet(petName, finalPetType);

    if (!user || !user.uid) {
      alert("User is not authenticated. Please log in again.");
      return;
    }

    const defaultPetData = {
      petName,
      petType: finalPetType,
      petHappiness: 100,
      petHungriness: 100,
      petTraining: 0,
      petStage: "HATCH",
      petExp: 0,
      petLevel: 1,
    };

    try {
      const docRef = doc(db, "users", user.uid);
      await setDoc(docRef, defaultPetData, { merge: true });
      console.log("User pet data saved successfully!");
    } catch (error) {
      console.error("Error saving pet data to Firestore:", error.message);
      alert("Failed to save pet data. Please try again.");
      return;
    }

    router.push("/home");
  };

  return (
    <button id="new-user-btn" onClick={handleClick}>
      <p>Let’s Start</p>
    </button>
  );
};

export default NewUserBtn;