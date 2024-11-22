import "./home-profile-btn.css";

const HomeProfileBtn = ({ onBtnClicked }) => {
  return (
    <button id="home-profile-btn" onClick={onBtnClicked}>
      <p>Profile</p>
    </button>
  );
};

export default HomeProfileBtn;
