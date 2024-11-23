"use client";
import Image from "next/image";
import BackModal from "@/components/atoms/back-modal/back-modal";
import TextBtn from "@/components/atoms/text-btn/text-btn";
import RankTopThree from "@/components/molecules/rank-top-three-section/rank-top-three-section";
import RankTopFive from "@/components/molecules/rank-top-five-section/rank-top-five-section";
import { useModalStore } from "@/ctx/store";
import pet_info_shadow_img from "../../../../public/sprite_sheet/pet_info_shadow.png";
import badge_1 from "../../../../public/rank/badge_1.svg";
import badge_2 from "../../../../public/rank/badge_2.svg";
import badge_3 from "../../../../public/rank/badge_3.svg";
import "./pet-ranking.css";

const PetRanking = () => {
  const isPetRankingOpen = useModalStore((state) => state.modals.petRanking);
  const closeModal = useModalStore((state) => state.closeModal);

  if (!isPetRankingOpen) return null;

  return (
    <section id="pet-ranking-wrapper">
      <BackModal />
      <div id="pet-ranking">
        <TextBtn text={"Close"} onBtnClicked={() => closeModal("petRanking")} />

        <span className="rank-heading">
          <p>Rank</p>
        </span>

        <section className="pet-rank-top-three-section">
          <RankTopThree />
        </section>

        <section className="pet-rank-top-five-section">
          <RankTopFive />
        </section>

        {/* <p className="user-id">UID: 88bc0428-2c0a-48b1-953c-2e68ffa588d4</p> */}
      </div>
    </section>
  );
};

export default PetRanking;
