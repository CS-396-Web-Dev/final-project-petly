"use client";
import BackModal from "@/components/atoms/back-modal/back-modal";
import TextBtn from "@/components/atoms/text-btn/text-btn";
import { useModalStore } from "@/ctx/store";
import pet_info_shadow_img from "../../../../public/sprite_sheet/pet_info_shadow.png";
import "./pet-ranking.css";

const PetRanking = () => {
  const isPetRankingOpen = useModalStore((state) => state.modals.petRanking);
  const closeModal = useModalStore((state) => state.closeModal);

  console.log("isPetRankingOpen:", isPetRankingOpen);

  if (!isPetRankingOpen) return null;

  return (
    <section id="pet-ranking-wrapper">
      <BackModal />
      <div id="pet-ranking">
        <TextBtn text={"Close"} onBtnClicked={() => closeModal("petRanking")} />

        {/* <section className="pet-rank-top-three-section"></section>

        <section className="pet-rank-top-five-section"></section> */}

        <p className="user-id">UID: 88bc0428-2c0a-48b1-953c-2e68ffa588d4</p>
      </div>
    </section>
  );
};

export default PetRanking;
