"use client";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/config";
import RankTopFive from "@/components/atoms/rank-top-five-item/rank-top-five-item";
import doggchi from "../../../../public/new-user/doggchi.gif";
import lovelitchi from "../../../../public/new-user/lovelitchi.gif";
import mametchi from "../../../../public/new-user/mametchi.gif";
import milktchi from "../../../../public/new-user/milktchi.gif";

const PetRankTopFive = () => {
  const [topFive, setTopFive] = useState([]);

  const getPetComponent = (petType) => {
    switch (petType) {
      case "DOGGCHI":
        return doggchi;
      case "LOVELITCHI":
        return lovelitchi;
      case "MAMETCHI":
        return mametchi;
      case "MILKTCHI":
        return milktchi;
      default:
        console.warn("Unknown pet type, defaulting to DoggChi:", petType);
        return doggchi;
    }
  };

  useEffect(() => {
    const fetchRanking = async () => {
      try {
        const usersCollection = collection(db, "users");
        const snapshot = await getDocs(usersCollection);

        const users = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          users.push({
            petLevel: data.petLevel || 0,
            petName: data.petName || "N/A",
            petType: data.petType || "DOGGCHI",
          });
        });

        const sortedUsers = users
          .sort((a, b) => b.petLevel - a.petLevel)
          .slice(0, 5);

        setTopFive(sortedUsers);
      } catch (error) {
        console.error("Error fetching ranking:", error);
      }
    };

    fetchRanking();
  }, []);

  if (topFive.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {topFive.map((user, index) => (
        <RankTopFive
          key={index}
          rank={index + 1}
          petShadowSrc={getPetComponent(user.petType)}
          petName={user.petName}
          level={user.petLevel}
        />
      ))}
    </>
  );
};

export default PetRankTopFive;
