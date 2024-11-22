import dumbell_img from "../../../../public/action/dumbell.svg";
import football_img from "../../../../public/action/football.svg";
import tennis_img from "../../../../public/action/tennis.svg";
import ActionBtn from "@/components/atoms/action-btn/action-btn";

const ActionTraining = () => {
  return (
    <>
      <ActionBtn
        img_src={dumbell_img}
        width={59}
        height={35}
        text={"Dumbell"}
        value={12}
        pt={1}
        bg={"bg-1"}
        tx={"tx-1"}
      />
      <ActionBtn
        img_src={football_img}
        width={39}
        height={35}
        text={"Football"}
        value={18}
        pt={0}
        bg={"bg-2"}
        tx={"tx-2"}
      />
      <ActionBtn
        img_src={tennis_img}
        width={39}
        height={40}
        text={"Tennis"}
        value={24}
        pt={1}
        bg={"bg-3"}
        tx={"tx-3"}
      />
    </>
  );
};

export default ActionTraining;
