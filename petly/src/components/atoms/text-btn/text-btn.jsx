import "./text-btn.css";

const TextBtn = ({ text }) => {
  return (
    <button className="text-btn">
      <p>{text}</p>
    </button>
  );
};

export default TextBtn;
