"use client";
import BackModal from "@/components/atoms/back-modal/back-modal";
import CloseBtn from "@/components/atoms/close-btn/close-btn";
import OptionBtn from "@/components/atoms/option-btn/option-btn";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useModalStore } from "@/ctx/store";
import { initAOS } from "@/helper/aosHelper";
import "./home-options.css";

const HomeOptions = () => {
  const router = useRouter();
  const isHomeOptionsOpen = useModalStore((state) => state.modals.homeOptions);
  const openModal = useModalStore((state) => state.openModal);
  const closeModal = useModalStore((state) => state.closeModal);

  useEffect(() => {
    initAOS({
      offset: 100,
      duration: 600,
      once: true,
    });
  }, []);

  if (!isHomeOptionsOpen) return null;

  const onPetProfileBtnClicked = () => {
    closeModal("homeOptions");
    openModal("petProfile");
  };

  const onPetActionBtnClicked = () => {
    closeModal("homeOptions");
    openModal("petAction");
  };

  const onPetRankingBtnClicked = () => {
    closeModal("homeOptions");
    openModal("petRanking");
  };

  const onInviteBtnClicked = () => {
    closeModal("homeOptions");
    openModal("invite");
  };

  const onQuitBtnClicked = () => {
    closeModal("homeOptions");
    router.push("/");
  };

  return (
    <section id="home-options-wrapper">
      <BackModal />
      <div id="home-options">
        <CloseBtn
          text={"Close"}
          onBtnClicked={() => closeModal("homeOptions")}
          data-aos="fade-up"
        />

        <div className="home-option" data-aos="fade-up" data-aos-delay="50">
          <OptionBtn
            text={"Pet Profile"}
            onBtnClicked={() => onPetProfileBtnClicked()}
          />
        </div>
        <div className="home-option" data-aos="fade-up" data-aos-delay="100">
          <OptionBtn
            text={"Pet Action"}
            onBtnClicked={() => onPetActionBtnClicked()}
          />
        </div>
        <div className="home-option" data-aos="fade-up" data-aos-delay="150">
          <OptionBtn
            text={"Pet Ranking"}
            onBtnClicked={() => onPetRankingBtnClicked()}
          />
        </div>
        <div className="home-option" data-aos="fade-up" data-aos-delay="150">
          <OptionBtn
            text={"Invite Friends"}
            onBtnClicked={() => onInviteBtnClicked()}
          />
        </div>
        <div className="home-option" data-aos="fade-up" data-aos-delay="200">
          <OptionBtn text={"Quit"} onBtnClicked={() => onQuitBtnClicked()} />
        </div>
      </div>
    </section>
  );
};

export default HomeOptions;
