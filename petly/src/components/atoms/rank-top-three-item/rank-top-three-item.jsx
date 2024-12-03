"use client";
import Image from "next/image";

const RankTopThree = ({ rank, badgeSrc, petShadowSrc, petName, positionClass }) => {
  return (
    <div className={`rank-item ${positionClass}`}>
      <Image src={badgeSrc} alt={`${rank} Badge`} className="badge" width={50} height={50} />
      <p className="rank-number">#{rank}</p>
      <Image src={petShadowSrc} alt={`${rank} Pet Shadow`} className="pet-shadow" width={50} height={50} />
      <p className="pet-name">{petName}</p>
    </div>
  );
};

export default RankTopThree;