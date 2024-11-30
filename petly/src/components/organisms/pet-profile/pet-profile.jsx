"use client";
import BackModal from "@/components/atoms/back-modal/back-modal";
import CloseBtn from "@/components/atoms/close-btn/close-btn";
import PetInfo from "@/components/molecules/pet-info/pet-info";
import PetLevel from "@/components/molecules/pet-level/pet-level";
import PetHappiness from "@/components/molecules/pet-happiness/pet-happiness";
import PetHungriness from "@/components/molecules/pet-hungriness/pet-hungriness";
import PetTraining from "@/components/molecules/pet-training/pet-training";
import { useModalStore } from "@/ctx/store";
import "./pet-profile.css";

const PetProfile = () => {
  const isPetProfileOpen = useModalStore((state) => state.modals.petProfile);
  const closeModal = useModalStore((state) => state.closeModal);

  if (!isPetProfileOpen) return null;

  return (
    <section id="pet-profile-wrapper">
      <BackModal />
      <div id="pet-profile">
        <CloseBtn
          text={"Close"}
          onBtnClicked={() => closeModal("petProfile")}
        />

        <section className="pet-info-section">
          <PetInfo />
        </section>

        <span className="level-heading">
          <p>Level</p>
        </span>

        <section className="pet-level-section">
          <PetLevel />
        </section>

        <span className="status-heading">
          <p>Status</p>
        </span>

        <section className="pet-status-section">
          <PetHappiness />
          <PetHungriness />
          <PetTraining />
        </section>

        <p className="user-id">UID: 88bc0428-2c0a-48b1-953c-2e68ffa588d4</p>
      </div>
    </section>
  );
};

export default PetProfile;
