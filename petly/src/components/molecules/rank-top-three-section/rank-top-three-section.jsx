"use client";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/config";
import RankTopThree from "@/components/atoms/rank-top-three-item/rank-top-three-item";
import doggchi from "../../../../public/new-user/doggchi.gif";
import lovelitchi from "../../../../public/new-user/lovelitchi.gif";
import mametchi from "../../../../public/new-user/mametchi.gif";
import milktchi from "../../../../public/new-user/milktchi.gif";
import badge_1 from "../../../../public/rank/badge_1.svg";
import badge_2 from "../../../../public/rank/badge_2.svg";
import badge_3 from "../../../../public/rank/badge_3.svg";

const PetRankTopThree = () => {
  const [topThree, setTopThree] = useState([]);

  const badges = [badge_1, badge_2, badge_3];
  const positions = ["rank-first", "rank-second", "rank-third"];

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
            petExp: data.petExp || 0,
            petLevel: data.petLevel || 1,
            petName: data.petName || "N/A",
            petType: data.petType || "DOGGCHI",
          });
        });

        const sortedUsers = users
          .sort((a, b) => {
            if (b.petLevel !== a.petLevel) {
              return b.petLevel - a.petLevel; // Sort by petLevel first
            }
            return b.petExp - a.petExp; // Sort by petExp if petLevel is the same
          })
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
          petShadowSrc={getPetComponent(user.petType)}
          petName={user.petName}
          positionClass={positions[index]}
        />
      ))}
    </>
  );
};

export default PetRankTopThree;
