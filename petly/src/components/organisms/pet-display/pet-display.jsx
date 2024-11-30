"use client";
import React, { useEffect, useState } from "react";
import { useAuth } from "@/ctx/AuthContext";
import PetDisplayUid from "@/components/molecules/pet-display-uid/pet-display-uid";

const PetDisplay = () => {
  const { user } = useAuth();

  return (
    <>
      <PetDisplayUid userId={user.uid} />
    </>
  );
};

export default PetDisplay;
