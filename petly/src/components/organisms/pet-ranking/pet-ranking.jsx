"use client";
import BackModal from "@/components/atoms/back-modal/back-modal";
import CloseBtn from "@/components/atoms/close-btn/close-btn";
import RankTopThree from "@/components/molecules/rank-top-three-section/rank-top-three-section";
import RankTopFive from "@/components/molecules/rank-top-five-section/rank-top-five-section";
import { useModalStore } from "@/ctx/store";
import "./pet-ranking.css";

const PetRanking = () => {
  const isPetRankingOpen = useModalStore((state) => state.modals.petRanking);
  const closeModal = useModalStore((state) => state.closeModal);

  if (!isPetRankingOpen) return null;

  return (
    <section id="pet-ranking-wrapper">
      <BackModal />
      <div id="pet-ranking">
        <CloseBtn
          text={"Close"}
          onBtnClicked={() => closeModal("petRanking")}
        />

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
