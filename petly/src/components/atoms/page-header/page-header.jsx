"use client";
import Image from "next/image";
import three_dots_img from "../../../../public/btn/three_dots.png";
import { useModalStore } from "@/ctx/store";
import "./page-header.css";

const PageHeader = ({ text, showOptions }) => {
  const openModal = useModalStore((state) => state.openModal);

  return (
    <header>
      <p>{text}</p>
      {showOptions && (
        <Image
          src={three_dots_img}
          alt=""
          className="three-dots-img"
          width={26}
          height={26}
          priority
          onClick={() => openModal("homeOptions")}
        />
      )}
    </header>
  );
};

export default PageHeader;
