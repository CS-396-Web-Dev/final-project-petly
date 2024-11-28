"use client";
import Image from "next/image";
import MobileContainer from "@/components/organisms/mobile-container/mobile-container";
import PageHeader from "@/components/atoms/page-header/page-header";
import PetNameInput from "@/components/atoms/pet-name-input/pet-name-input";
import PetPicker from "@/components/molecules/pet-picker/pet-picker";
import NewUserBtn from "@/components/atoms/new-user-btn/new-user-btn";
import new_user_bg from "../../../public/new-user/new_user_bg.svg";
import { useState } from "react";
import { usePetStore } from "@/ctx/store";

export default function NewUser() {
  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState(undefined);
  const initPet = usePetStore((state) => state.initPet);

  const handlePetNameChange = (name) => setPetName(name);
  const handlePetTypeChange = (type) => setPetType(type);

  return (
    <MobileContainer>
      <PageHeader text={"New User"} showOptions={false} />
      <Image
        src={new_user_bg}
        alt=""
        width={330}
        height={200}
        priority
        style={{ objectFit: "cover", margin: "1.5rem auto", width: "auto" }}
      />
      <PetNameInput petName={petName} onPetNameChange={handlePetNameChange} />
      <PetPicker petType={petType} onPetTypeChange={handlePetTypeChange} />
      <NewUserBtn petName={petName} petType={petType} initPet={initPet} />
    </MobileContainer>
  );
}
