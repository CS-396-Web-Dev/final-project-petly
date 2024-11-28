"use client";
import Image from "next/image";
import { useState } from "react";
import { usePetStore } from "@/ctx/store";
import { PetType } from "@/helper/petType";
import doggchi from "../../../../public/new-user/doggchi.gif";
import lovelitchi from "../../../../public/new-user/lovelitchi.gif";
import mametchi from "../../../../public/new-user/mametchi.gif";
import milktchi from "../../../../public/new-user/milktchi.gif";
import random from "../../../../public/new-user/random.svg";
import "./pet-picker.css";

const PetPicker = () => {
  const { setPetType } = usePetStore((state) => ({
    setPetType: state.setPetType,
  }));
  const [selectedPet, setSelectedPet] = useState(null);

  const petImages = {
    [PetType.DOGGCHI]: doggchi,
    [PetType.LOVELITCHI]: lovelitchi,
    [PetType.MAMETCHI]: mametchi,
    [PetType.MILKTCHI]: milktchi,
  };

  const petNames = {
    [PetType.DOGGCHI]: "Doggchi",
    [PetType.LOVELITCHI]: "Lovelitchi",
    [PetType.MAMETCHI]: "Mametchi",
    [PetType.MILKTCHI]: "Milktchi",
  };

  const handleRandomClick = () => {
    setSelectedPet(null);
    setPetType(null);
  };

  const handlePetClick = (pet) => {
    setSelectedPet(pet);
    setPetType(pet);
  };

  return (
    <>
      <p className="pet-picker-heading">Pick your pet!</p>
      <div className="pet-picker-container">
        {Object.values(PetType).map((pet) => (
          <button
            key={pet}
            className={`pet-picker-button ${
              selectedPet === pet ? "selected" : ""
            }`}
            onClick={() => handlePetClick(pet)}
          >
            <Image
              className="pet-picker-img"
              src={petImages[pet]}
              alt=""
              width={48}
              height={48}
              priority
            />
            <p className="pet-picker-name">{petNames[pet]}</p>
          </button>
        ))}
        <button
          key="random"
          className={`pet-picker-button ${
            selectedPet === null ? "selected" : ""
          }`}
          onClick={handleRandomClick}
        >
          <Image
            className="pet-picker-img"
            src={random}
            alt=""
            width={48}
            height={48}
            priority
          />
          <p className="pet-picker-name">Random</p>
        </button>
      </div>
    </>
  );
};

export default PetPicker;
