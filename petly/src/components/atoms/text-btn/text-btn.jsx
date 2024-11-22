import "./text-btn.css";

const TextBtn = ({ text, onBtnClicked }) => {
  return (
    <button className="text-btn" onClick={onBtnClicked}>
      <p>{text}</p>
    </button>
  );
};

export default TextBtn;
