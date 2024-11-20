"use client";
import ProfileBtn from "@/components/atoms/profile-btn/profile-btn";
import ActionBtn from "@/components/atoms/action-btn/action-btn";
import { useModalStore } from "@/ctx/store";
import "./button-group.css";

const ButtonGroup = () => {
  const openModal = useModalStore((state) => state.openModal);

  return (
    <section id="button-group">
      <ProfileBtn onBtnClicked={() => openModal("petProfile")} />
      <ActionBtn onBtnClicked={() => openModal("petAction")} />
    </section>
  );
};

export default ButtonGroup;
