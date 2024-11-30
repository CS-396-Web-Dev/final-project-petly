"use client";
import React, { useEffect, useState } from "react";
import DoggChi from "@/components/atoms/doggchi/doggchi";
import LoveLitchi from "@/components/atoms/lovelitch/lovelitchi";
import Mametchi from "@/components/atoms/mametchi/mametchi";
import Milktchi from "@/components/atoms/milktchi/milktchi";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const PetDisplay = ({ userId }) => {
  const [petType, setPetType] = useState(null);

  useEffect(() => {
    const fetchPetType = async () => {
      try {
        const db = getFirestore();
        const userDocRef = doc(db, "users", userId);
        const userDoc = await getDoc(userDocRef);
        setPetType(userDoc.data().petType);
      } catch (error) {
        console.error("Error fetching pet type:", error);
        setPetType("DOGGCHI");
      }
    };
    fetchPetType();
  }, [userId]);

  const getPetComponent = (type) => {
    switch (type) {
      case "DOGGCHI":
        return <DoggChi />;
      case "LOVELITCHI":
        return <LoveLitchi />;
      case "MAMETCHI":
        return <Mametchi />;
      case "MILKTCHI":
        return <Milktchi />;
      default:
        console.warn("Unknown pet type:", type);
        return;
    }
  };

  return <>{getPetComponent(petType)}</>;
};

export default PetDisplay;
