import Image from "next/image";
import { useModalStore } from "@/ctx/store";
import "./action-btn.css";

const ActionBtn = ({
  img_src,
  width,
  height,
  text,
  value,
  pt,
  bg,
  tx,
  handleClick,
  disabled,
}) => {
  const openModal = useModalStore((state) => state.openModal);

  return (
    <button
      className="action-btn"
      onClick={() => {
        handleClick(value);
        openModal("petProfile");
      }}
      disabled={disabled}
    >
      <Image
        src={img_src}
        alt=""
        className="action-img"
        width={width}
        height={height}
        style={{ paddingTop: pt }}
        priority
      />
      <p className="action-text">{text}</p>
      <div className={`action-bg ${bg}`}>
        <p className={`action-value ${tx}`}>+{value}</p>
      </div>
    </button>
  );
};

export default ActionBtn;
