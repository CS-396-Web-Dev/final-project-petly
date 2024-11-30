"use client";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/config";
import RankTopThree from "@/components/atoms/rank-top-three-item/rank-top-three-item";
import pet_info_shadow_img from "../../../../public/sprite_sheet/pet_info_shadow.png";
import badge_1 from "../../../../public/rank/badge_1.svg";
import badge_2 from "../../../../public/rank/badge_2.svg";
import badge_3 from "../../../../public/rank/badge_3.svg";

const PetRankTopThree = () => {
  const [topThree, setTopThree] = useState([]);

  const badges = [badge_1, badge_2, badge_3]; // 徽章图片数组
  const positions = ["rank-first", "rank-second", "rank-third"]; // 位置类名数组

  useEffect(() => {
    const fetchRanking = async () => {
      try {
        const usersCollection = collection(db, "users");
        const snapshot = await getDocs(usersCollection);

        const users = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          users.push({
            petExp: data.petExp || 0,
            petName: data.petName || "N/A",
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
      {topThree.map((user, index) => (
        <RankTopThree
          key={index}
          rank={index + 1}
          badgeSrc={badges[index]}
          petShadowSrc={pet_info_shadow_img}
          petName={user.petName}
          positionClass={positions[index]}
        />
      ))}
    </>
  );
};

export default PetRankTopThree;
