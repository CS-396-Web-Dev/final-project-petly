import Image from "next/image";
import dialog_btn from "../../../../public/dialog_btn.png";
import "./pet-dialog.css";

const PetDialog = () => {
  return (
    <section id="pet-dialog">
      <div className="dialog-outer">
        <div className="dialog-inner">
          <p>I’m happy, please play with me...</p>
          <Image src={dialog_btn} alt="" className="dialog-btn" priority />
        </div>
      </div>
    </section>
  );
};

export default PetDialog;
