"use client";
import { useRouter } from "next/navigation";
import { usePetStore } from "@/ctx/store";
import { PetType } from "@/helper/petType";
import "./new-user-btn.css";

const NewUserBtn = () => {
  const router = useRouter();
  const { petName, petType, setPetType } = usePetStore((state) => ({
    petName: state.petName,
    petType: state.petType,
    setPetType: state.setPetType,
  }));

  const handleClick = () => {
    if (!petName || petName.trim() === "") {
      alert("Please enter a pet name!");
      return;
    }

    if (!petType) {
      const petOptions = Object.values(PetType);
      const randomPet =
        petOptions[Math.floor(Math.random() * petOptions.length)];
      setPetType(randomPet);
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
