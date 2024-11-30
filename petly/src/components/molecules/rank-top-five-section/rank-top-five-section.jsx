"use client";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/config";
import RankTopFive from "@/components/atoms/rank-top-five-item/rank-top-five-item";
import pet_info_shadow_img from "../../../../public/sprite_sheet/pet_info_shadow.png";

const PetRankTopFive = () => {
  const [topFive, setTopFive] = useState([]);

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
          petShadowSrc={pet_info_shadow_img}
          petName={user.petName}
          level={user.petLevel}
        />
      ))}
    </>
  );
};

export default PetRankTopFive;
