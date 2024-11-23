"use client";
import Hatch from "@/components/organisms/hatch/hatch";
import Mametchi from "@/components/organisms/mametchi/mametchi";
import Milktchi from "@/components/organisms/milktchi/milktchi";
import PetDialog from "@/components/organisms/pet-dialog/pet-dialog";
import PetProfile from "@/components/organisms/pet-profile/pet-profile";
import PetAction from "@/components/organisms/pet-action/pet-action";
import "./tamagotchi.css";

const Tamagotchi = () => {
  return (
    <>
      <Milktchi />
      <PetDialog />
      <PetProfile />
      <PetAction />
    </>
  );
};

export default Tamagotchi;
