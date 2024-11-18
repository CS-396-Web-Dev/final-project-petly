"use client";
import Mametchi from "@/components/organisms/mametchi/mametchi";
import Hatch from "@/components/organisms/hatch/hatch";
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
