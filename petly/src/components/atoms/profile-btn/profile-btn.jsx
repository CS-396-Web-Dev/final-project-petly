import "./profile-btn.css";

const ProfileBtn = ({ onBtnClicked }) => {
  return (
    <button id="profile-btn" onClick={onBtnClicked}>
      <p>Profile</p>
    </button>
  );
};

export default ProfileBtn;
