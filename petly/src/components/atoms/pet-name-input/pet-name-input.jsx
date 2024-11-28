"use client";
import { usePetStore } from "@/ctx/store";
import "./pet-name-input.css";

const PetNameInput = () => {
  const { petName, setPetName } = usePetStore((state) => ({
    petName: state.petName,
    setPetName: state.setPetName,
  }));

  return (
    <>
      <p className="pet-name-heading">What’s your pet name?</p>
      <div className="pet-name-input-wrapper">
        <input
          className="pet-name-input"
          type="text"
          placeholder="Pet name here..."
          value={petName}
          onChange={(e) => setPetName(e.target.value)}
        ></input>
      </div>
    </>
  );
};

export default PetNameInput;
