"use client";
import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import RankTopThree from "@/components/atoms/rank-top-three-item/rank-top-three-item";
import pet_info_shadow_img from "../../../../public/sprite_sheet/pet_info_shadow.png";
import badge_1 from "../../../../public/rank/badge_1.svg";
import badge_2 from "../../../../public/rank/badge_2.svg";
import badge_3 from "../../../../public/rank/badge_3.svg";

const PetRankTopThree = () => {
  const [topThree, setTopThree] = useState([]);

  useEffect(() => {
    const fetchRanking = async () => {
      try {
        const db = getFirestore();
        const usersCollection = collection(db, "users");
        const snapshot = await getDocs(usersCollection);

        const users = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          users.push({
            petExp: data.petExp || 0,
            petName: data.petName || "Unknown",
          });
        });

        const sortedUsers = users
          .sort((a, b) => b.petExp - a.petExp)
          .slice(0, 3);

        setTopThree(sortedUsers);
      } catch (error) {
        console.error("Error fetching ranking:", error);
      }
    };

    fetchRanking();
  }, []);

  if (topThree.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <RankTopThree
        rank={1}
        badgeSrc={badge_1}
        petShadowSrc={pet_info_shadow_img}
        petName={topThree[0]?.petName || "Unknown"}
        positionClass="rank-first"
      />
      <RankTopThree
        rank={2}
        badgeSrc={badge_2}
        petShadowSrc={pet_info_shadow_img}
        petName={topThree[1]?.petName || "Unknown"}
        positionClass="rank-second"
      />
      <RankTopThree
        rank={3}
        badgeSrc={badge_3}
        petShadowSrc={pet_info_shadow_img}
        petName={topThree[2]?.petName || "Unknown"}
        positionClass="rank-third"
      />
    </>
  );
};

export default PetRankTopThree;
