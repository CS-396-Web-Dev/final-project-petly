"use client";
import BackModal from "@/components/atoms/back-modal/back-modal";
import TextBtn from "@/components/atoms/text-btn/text-btn";
import PetInfo from "@/components/molecules/pet-info/pet-info";
import { useModalStore } from "@/ctx/store";
import "./pet-action.css";

const PetAction = () => {
  const isPetActionOpen = useModalStore((state) => state.modals.petAction);
  const closeModal = useModalStore((state) => state.closeModal);

  if (!isPetActionOpen) return null;
  return (
    <section id="pet-action-wrapper">
      <BackModal />
      <div id="pet-action">
        <TextBtn text={"Close"} onBtnClicked={() => closeModal("petAction")} />

        <section className="pet-info-container">
          <PetInfo />
        </section>
      </div>
    </section>
  );
};

export default PetAction;
