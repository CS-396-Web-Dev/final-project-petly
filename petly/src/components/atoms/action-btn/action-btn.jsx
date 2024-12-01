import Image from "next/image";
import "./action-btn.css";

const ActionBtn = ({ img_src, width, height, text, value, pt, bg, tx, handleClick, disabled }) => {
  return (
    <button
      className="action-btn"
      onClick={() => handleClick(value)}
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