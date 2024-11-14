import Image from "next/image";
import dialog_btn from "../../../../public/dialog_btn.png";
import "./dialog.css";

const Dialog = () => {
  return (
    <section id="dialog">
      <div className="dialog-outer">
        <div className="dialog-inner">
          <p>I’m happy, please play with me...</p>
          <Image src={dialog_btn} alt="" className="dialog-btn" />
        </div>
      </div>
    </section>
  );
};

export default Dialog;
