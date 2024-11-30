"use client";
import RankTopFive from "@/components/atoms/rank-top-five-item/rank-top-five-item";
import pet_info_shadow_img from "../../../../public/sprite_sheet/pet_info_shadow.png";

const PetRankTopFive = () => {
  return (
    <>
      <RankTopFive
        rank={1}
        petShadowSrc={pet_info_shadow_img}
        petName="CuddleKeeper"
        level={10}
      />
      <RankTopFive
        rank={2}
        petShadowSrc={pet_info_shadow_img}
        petName="PetlyGuru"
        level={10}
      />
      <RankTopFive
        rank={3}
        petShadowSrc={pet_info_shadow_img}
        petName="PetLoverXX"
        level={10}
      />
      <RankTopFive
        rank={4}
        petShadowSrc={pet_info_shadow_img}
        petName="SnuggleMaster"
        level={9}
      />
      <RankTopFive
        rank={5}
        petShadowSrc={pet_info_shadow_img}
        petName="FluffyKing"
        level={8}
      />
    </>
  );
};

export default PetRankTopFive;