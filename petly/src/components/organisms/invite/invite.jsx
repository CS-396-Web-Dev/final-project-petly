"use client";
import BackModal from "@/components/atoms/back-modal/back-modal";
import TextBtn from "@/components/atoms/text-btn/text-btn";
import { useModalStore } from "@/ctx/store";
import Image from "next/image";
import invite_img from "../../../../public/sprite_sheet/mametchi_sprite_sheet.png";
import "./invite.css";

const Invite = () => {
  const isInviteOpen = useModalStore((state) => state.modals.invite);
  const closeModal = useModalStore((state) => state.closeModal);

  if (!isInviteOpen) return null;

  return (
    <section id="invite-wrapper">
      <BackModal />
      <div id="invite">
        <TextBtn text={"Close"} onBtnClicked={() => closeModal("invite")} />
        <Image
          src={invite_img}
          className="invite_img"
          alt="Invite Friends"
          width={200}
          height={200}
        />
        <h2 className="invite-title">Invite Your Friends to Petly</h2>
        <p className="invite-description">
          Invite friends to unlock
          <br />
          Petly rank features
        </p>
        <button className="invite-btn" onClick={() => closeModal("invite")}>
          Invite a Friend
        </button>
      </div>
    </section>
  );
};

export default Invite;
