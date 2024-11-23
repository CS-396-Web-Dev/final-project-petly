import Image from "next/image";
import right_arrow_img from "../../../../public/right_arrow.svg";
import "./option-btn.css";

const OptionBtn = ({text, onBtnClicked}) => {
  return (
    <>
      <span className="option-btn-span">• </span>
      <button className="option-btn" onClick={onBtnClicked}>
        <p className="option-text">{text}</p>
      </button>
      <Image
        src={right_arrow_img}
        alt=""
        className="option-btn-img"
        width={18}
        height={18}
        priority
      />
    </>
  );
};

export default OptionBtn;
