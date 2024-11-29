import "../text-btn/text-btn.css";

const CloseBtn = ({ text, onBtnClicked }) => {
  return (
    <button className="text-btn" onClick={onBtnClicked}>
      <p>{text}</p>
    </button>
  );
};

export default CloseBtn;