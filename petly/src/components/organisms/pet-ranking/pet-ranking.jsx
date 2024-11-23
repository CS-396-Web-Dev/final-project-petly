"use client";
import Image from "next/image";
import BackModal from "@/components/atoms/back-modal/back-modal";
import TextBtn from "@/components/atoms/text-btn/text-btn";
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
        <div className="rank-item rank-first">
          <Image src={badge_1} alt="First Badge" className="badge" width={50} height={50} />
          <p className="rank-number">#1</p>
          <Image
            src={pet_info_shadow_img}
            alt="First Pet Shadow"
            className="pet-shadow"
            width={50}
            height={50}
          />
          <p className="pet-name">CuddleKeeper</p>
        </div>
        <div className="rank-item rank-second">
          <Image src={badge_2} alt="Second Badge" className="badge" width={50} height={50} />
          <p className="rank-number">#2</p>
          <Image
            src={pet_info_shadow_img}
            alt="Second Pet Shadow"
            className="pet-shadow"
            width={50}
            height={50}
          />
          <p className="pet-name">PetlyGuru</p>
        </div>
        <div className="rank-item rank-third">
          <Image src={badge_3} alt="Third Badge" className="badge" width={50} height={50} />
          <p className="rank-number">#3</p>
          <Image
            src={pet_info_shadow_img}
            alt="Third Pet Shadow"
            className="pet-shadow"
            width={50}
            height={50}
          />
          <p className="pet-name">PetLoverXX</p>
        </div>
      </section>

        <section className="pet-rank-top-five-section"></section>

        <p className="user-id">UID: 88bc0428-2c0a-48b1-953c-2e68ffa588d4</p>
      </div>
    </section>
  );
};

export default PetRanking;
