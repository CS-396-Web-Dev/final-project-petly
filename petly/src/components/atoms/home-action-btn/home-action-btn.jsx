import "./home-action-btn.css";

const HomeActionBtn = ({ onBtnClicked }) => {
  return (
    <button id="home-action-btn" onClick={onBtnClicked}>
      <p>Action</p>
    </button>
  );
};

export default HomeActionBtn;
