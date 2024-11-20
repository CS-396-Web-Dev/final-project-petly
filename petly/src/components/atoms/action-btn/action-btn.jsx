import "./action-btn.css";

const ActionBtn = ({ onBtnClicked }) => {
  return (
    <button id="action-btn" onClick={onBtnClicked}>
      <p>Action</p>
    </button>
  );
};

export default ActionBtn;
