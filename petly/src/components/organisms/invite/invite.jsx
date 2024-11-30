"use client";
import { useState } from "react";
import BackModal from "@/components/atoms/back-modal/back-modal";
import TextBtn from "@/components/atoms/text-btn/text-btn";
import { useModalStore } from "@/ctx/store";
import Image from "next/image";
import invite_img from "../../../../public/rank/invite_friend.svg";
import "./invite.css";

const Invite = () => {
  const [isCopied, setIsCopied] = useState(false);
  const isInviteOpen = useModalStore((state) => state.modals.invite);
  const closeModal = useModalStore((state) => state.closeModal);

  const handleCopyLink = () => {
    const inviteLink = "https://www.petly.com"; // should be the actual deployed links!
    navigator.clipboard.writeText(inviteLink).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

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
          width={250}
          height={250}
        />
        <h2 className="invite-title">Invite Your Friends to Petly</h2>
        <p className="invite-description">
          Invite friends to unlock
          <br />
          Petly rank features
        </p>
        <button className="invite-btn" onClick={handleCopyLink}>
          Invite a Friend
        </button>
        {isCopied && <p className="copy-feedback">Link copied!</p>}
      </div>
    </section>
  );
};

export default Invite;
