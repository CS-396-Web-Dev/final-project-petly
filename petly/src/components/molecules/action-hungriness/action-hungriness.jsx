import cookie_img from "../../../../public/action/cookie.svg";
import pie_img from "../../../../public/action/pie.svg";
import chicken_img from "../../../../public/action/chicken.svg";
import ActionBtn from "@/components/atoms/action-btn/action-btn";

const ActionHungriness = () => {
  return (
    <>
      <ActionBtn
        img_src={cookie_img}
        width={33}
        height={35}
        text={"Cookie"}
        value={12}
        pt={0}
        bg={"bg-1"}
        tx={"tx-1"}
      />
      <ActionBtn
        img_src={pie_img}
        width={36}
        height={33}
        text={"Pie"}
        value={18}
        pt={0}
        bg={"bg-2"}
        tx={"tx-2"}
      />
      <ActionBtn
        img_src={chicken_img}
        width={35}
        height={35}
        text={"Chicken"}
        value={24}
        pt={0}
        bg={"bg-3"}
        tx={"tx-3"}
      />
    </>
  );
};

export default ActionHungriness;
