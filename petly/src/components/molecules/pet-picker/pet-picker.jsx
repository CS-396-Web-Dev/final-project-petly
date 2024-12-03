"use client"
import { PetType } from "@/helper/type";
import Image from "next/image";
import doggchi from "../../../../public/new-user/doggchi.gif";
import lovelitchi from "../../../../public/new-user/lovelitchi.gif";
import mametchi from "../../../../public/new-user/mametchi.gif";
import milktchi from "../../../../public/new-user/milktchi.gif";
import random from "../../../../public/new-user/random.svg";
import "./pet-picker.css";

const PetPicker = ({ petType, onPetTypeChange }) => {
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

  const handleRandomPetSelection = () => {
    const petTypesArray = [
      PetType.DOGGCHI,
      PetType.LOVELITCHI,
      PetType.MAMETCHI,
      PetType.MILKTCHI,
    ];
    const randomPet =
      petTypesArray[Math.floor(Math.random() * petTypesArray.length)];
    onPetTypeChange(randomPet);
  };

  return (
    <>
      <p className="pet-picker-heading">Pick your pet!</p>
      <div className="pet-picker-container">
        {Object.values(PetType).map((pet) => (
          <button
            key={pet}
            className={`pet-picker-button ${petType === pet ? "selected" : ""}`}
            onClick={() => onPetTypeChange(pet)}
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
          className={`pet-picker-button ${!petType ? "selected" : ""}`}
          onClick={handleRandomPetSelection}
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