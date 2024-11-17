"use client";
import Mametchi from "@/components/molecules/pet/mametchi/mametchi";
import Hatch from "@/components/molecules/pet/hatch/hatch";
import Dialog from "@/components/organisms/dialog/dialog";
import PetProfile from "../pet-profile/pet-profile";
import "./tamagotchi.css";

const Tamagotchi = () => {
  return (
    <section>
      <Hatch />
      <Dialog />
      <PetProfile />
    </section>
  );
};

export default Tamagotchi;
