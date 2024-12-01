"use client";
import { useEffect } from "react";
import { usePetStore } from "@/ctx/store";
import { useAuth } from "@/ctx/AuthContext";

const PetAttributeMonitor = () => {
  const { user } = useAuth();
  const decreaseAttributes = usePetStore((state) => state.decreaseAttributes);

  useEffect(() => {
    if (!user?.uid) {
      console.error("Error: User ID is not available.");
      return;
    }

    const interval = setInterval(() => {
      decreaseAttributes(user.uid);
    }, 10 * 60 * 1000);

    decreaseAttributes(user.uid);

    return () => clearInterval(interval);
  }, [decreaseAttributes, user?.uid]);

  return null;
};

export default PetAttributeMonitor;
