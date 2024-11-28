import { useRouter } from "next/navigation";
import { PetType } from "@/helper/type";
import "./new-user-btn.css";

const NewUserBtn = ({ petName, petType, initPet }) => {
  const router = useRouter();

  const handleClick = () => {
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

    router.push("/home");
  };

  return (
    <button id="new-user-btn" onClick={handleClick}>
      <p>Let’s Start</p>
    </button>
  );
};

export default NewUserBtn;
