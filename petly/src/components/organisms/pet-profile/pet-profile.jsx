"use client";
import BackModal from "@/components/atoms/back-modal/back-modal";
import CloseBtn from "@/components/atoms/close-btn/close-btn";
import PetInfo from "@/components/molecules/pet-info/pet-info";
import PetLevel from "@/components/molecules/pet-level/pet-level";
import PetHappiness from "@/components/molecules/pet-happiness/pet-happiness";
import PetHungriness from "@/components/molecules/pet-hungriness/pet-hungriness";
import PetTraining from "@/components/molecules/pet-training/pet-training";
import { useModalStore } from "@/ctx/store";
import { useAuth } from "@/ctx/AuthContext";
import "./pet-profile.css";

const PetProfile = () => {
  const { user } = useAuth();
  const isPetProfileOpen = useModalStore((state) => state.modals.petProfile);
  const closeModal = useModalStore((state) => state.closeModal);

  if (!isPetProfileOpen || !user) return null;

  return (
    <section id="pet-profile-wrapper">
      <BackModal />
      <div id="pet-profile">
        <CloseBtn
          text={"Close"}
          onBtnClicked={() => closeModal("petProfile")}
        />

        <section className="pet-info-section">
          <PetInfo userId={user.uid} />
        </section>

        <span className="level-heading">
          <p>Level</p>
        </span>

        <section className="pet-level-section">
          <PetLevel userId={user.uid} />
        </section>

        <span className="status-heading">
          <p>Status</p>
        </span>

        <section className="pet-status-section">
          <PetHappiness userId={user.uid} />
          <PetHungriness userId={user.uid} />
          <PetTraining userId={user.uid} />
        </section>

        <p className="user-id">UID: {user.uid}</p>
      </div>
    </section>
  );
};

export default PetProfile;