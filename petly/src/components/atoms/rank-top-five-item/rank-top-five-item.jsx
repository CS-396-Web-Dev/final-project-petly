"use client";
import Image from "next/image";

const RankTopFiveRow = ({ rank, petShadowSrc, petName, level }) => {
  return (
    <div className="rank-row">
      <p className="rank-number">#{rank}</p>
      <Image
        src={petShadowSrc}
        alt={`${rank} Pet Shadow`}
        className="pet-shadow"
      />
      <p className="pet-name">{petName}</p>
      <p className="pet-level">Lv.{level}</p>
    </div>
  );
};

export default RankTopFiveRow;