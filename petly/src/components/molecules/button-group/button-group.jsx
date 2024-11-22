"use client";
import HomeProfileBtn from "@/components/atoms/home-profile-btn/home-profile-btn";
import HomeActionBtn from "@/components/atoms/home-action-btn/home-action-btn";
import { useModalStore } from "@/ctx/store";
import "./button-group.css";

const ButtonGroup = () => {
  const openModal = useModalStore((state) => state.openModal);

  return (
    <section id="button-group">
      <HomeProfileBtn onBtnClicked={() => openModal("petProfile")} />
      <HomeActionBtn onBtnClicked={() => openModal("petAction")} />
    </section>
  );
};

export default ButtonGroup;
