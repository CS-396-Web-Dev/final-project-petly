"use client";
import React from "react";
import { useAuth } from "@/ctx/AuthContext";
import PetDisplay from "@/components/molecules/pet-display/pet-display";
import "./tamagotchi.css";

const Tamagotchi = () => {
  const { user } = useAuth();

  return (
    <>
      <PetDisplay userId={user.uid} />
    </>
  );
};

export default Tamagotchi;
