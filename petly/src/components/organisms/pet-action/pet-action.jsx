"use client";
import BackModal from "@/components/atoms/back-modal/back-modal";
import CloseBtn from "@/components/atoms/close-btn/close-btn";
import PetInfo from "@/components/molecules/pet-info/pet-info";
import ActionHappiness from "@/components/molecules/action-happiness/action-happiness";
import ActionHungriness from "@/components/molecules/action-hungriness/action-hungriness";
import ActionTraining from "@/components/molecules/action-training/action-training";
import { useEffect } from "react";
import { initAOS } from "@/helper/aosHelper";
import { useModalStore } from "@/ctx/store";
import "./pet-action.css";

const PetAction = () => {
  const isPetActionOpen = useModalStore((state) => state.modals.petAction);
  const closeModal = useModalStore((state) => state.closeModal);

  useEffect(() => {
    initAOS({
      offset: 100,
      duration: 600,
      once: true,
    });
  }, []);

  if (!isPetActionOpen) return null;

  return (
    <section id="pet-action-wrapper">
      <BackModal />
      <div id="pet-action">
        <CloseBtn text={"Close"} onBtnClicked={() => closeModal("petAction")} />

        <section className="pet-info-section">
          <PetInfo />
        </section>

        <span className="happiness-heading">
          <p>Happiness</p>
        </span>

        <section
          className="happiness-section"
          data-aos="zoom-in"
          data-aos-delay="50"
        >
          <ActionHappiness />
        </section>

        <span className="hungriness-heading">
          <p>Hungriness</p>
        </span>

        <section
          className="hungriness-section"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <ActionHungriness />
        </section>

        <span className="training-heading">
          <p>Training</p>
        </span>

        <section
          className="training-section"
          data-aos="zoom-in"
          data-aos-delay="150"
        >
          <ActionTraining />
        </section>
      </div>
    </section>
  );
};

export default PetAction;
