import ProfileBtn from "@/components/atoms/profile-btn/profile-btn";
import ActionBtn from "@/components/atoms/action-btn/action-btn";
import "./button-group.css";

const ButtonGroup = () => {
  return (
    <section id="button-group">
      <ProfileBtn />
      <ActionBtn />
    </section>
  );
};

export default ButtonGroup;
