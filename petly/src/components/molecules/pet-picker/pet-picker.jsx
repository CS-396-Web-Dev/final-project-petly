"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "./pet-picker.css";

import questionMarkGif from "../../../../public/picker/question_mark.gif";
import doggchiGif from "../../../../public/picker/doggchi.gif";
import lovelitchiGif from "../../../../public/picker/lovelitchi.gif";
import mametchiGif from "../../../../public/picker/mametchi.gif";
import milktchiGif from "../../../../public/picker/milktchi.gif";

const pets = [
  { id: "doggchi", name: "Doggchi", gif: doggchiGif },
  { id: "lovelitchi", name: "Lovelitchi", gif: lovelitchiGif },
  { id: "mametchi", name: "Mametchi", gif: mametchiGif },
  { id: "milktchi", name: "Milktchi", gif: milktchiGif },
  { id: "random", name: "Random", gif: questionMarkGif }, // Random button is now the last button
];

const Home = () => {
  const [selectedPet, setSelectedPet] = useState(null);

  const selectPet = (pet) => {
    if (pet.id === "random") {
      const randomIndex = Math.floor(Math.random() * (pets.length - 1));
      setSelectedPet(pets[randomIndex]);
    } else {
      setSelectedPet(pet);
    }
  };

  return (
    <div>
      <p className="pet-picker-heading">Pick your pet!</p>
      <div className="pet-picker-container">
        {pets.map((pet) => (
          <button
            key={pet.id}
            className={`pet-picker-button ${
              selectedPet?.id === pet.id ? "selected" : ""
            }`}
            onClick={() => selectPet(pet)}
          >
            <Image
              className="pet-gif"
              src={pet.gif}
              alt={`${pet.name}`}
              width={48}
              height={48}
            />
            <p className="pet-name">{pet.name}</p>
          </button>
        ))}
      </div>

      <div className="action-buttons">
        {selectedPet ? (
          <Link href="/home" passHref>
            <button className="next-button">Next</button>
          </Link>
        ) : (
          <button className="next-button" onClick={() => alert("Please select a pet first!")}>
            Next
          </button>
        )}
      </div>

      {selectedPet && (
        <div className="selected-pet-info">
          <p className="selected-pet-name">
            <strong>{selectedPet.name}</strong> IS YOUR PET NOW.
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;