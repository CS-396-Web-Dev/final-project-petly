"use client";
import BackModal from "@/components/atoms/back-modal/back-modal";
import TextBtn from "@/components/atoms/text-btn/text-btn";
import PetInfo from "@/components/molecules/pet-info/pet-info";
import ActionHappiness from "@/components/molecules/action-happiness/action-happiness";
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

        <section className="pet-info-section">
          <PetInfo />
        </section>

        <span className="happiness-heading">
          <p>Happiness</p>
        </span>

        <section className="happiness-action-section">
          <ActionHappiness />
        </section>
      </div>
    </section>
  );
};

export default PetAction;
