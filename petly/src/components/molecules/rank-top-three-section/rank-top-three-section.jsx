"use client";
import RankTopThree from "@/components/atoms/rank-top-three-item/rank-top-three-item";
import pet_info_shadow_img from "../../../../public/sprite_sheet/pet_info_shadow.png";
import badge_1 from "../../../../public/rank/badge_1.svg";
import badge_2 from "../../../../public/rank/badge_2.svg";
import badge_3 from "../../../../public/rank/badge_3.svg";

const PetRankTopThree = () => {
  return (
    <>
      <RankTopThree
        rank={1}
        badgeSrc={badge_1}
        petShadowSrc={pet_info_shadow_img}
        petName="CuddleKeeper"
        positionClass="rank-first"
      />
      <RankTopThree
        rank={2}
        badgeSrc={badge_2}
        petShadowSrc={pet_info_shadow_img}
        petName="PetlyGuru"
        positionClass="rank-second"
      />
      <RankTopThree
        rank={3}
        badgeSrc={badge_3}
        petShadowSrc={pet_info_shadow_img}
        petName="PetLoverXX"
        positionClass="rank-third"
      />
    </>
  );
};

export default PetRankTopThree;