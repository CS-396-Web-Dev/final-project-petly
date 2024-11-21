import Image from "next/image";
import gift_img from "../../../../public/action/gift.svg";
import "./action-happiness.css";

const ActionHappiness = () => {
  return (
    <>
      <button className="action-btn">
        <Image src={gift_img} alt="" className="action-img" priority />
        <p className="action-text">Gift</p>
        <div className="action-bg">
          <p className="action-value">+12</p>
        </div>
      </button>
      <button className="action-btn"></button>
      <button className="action-btn"></button>
    </>
  );
};

export default ActionHappiness;
