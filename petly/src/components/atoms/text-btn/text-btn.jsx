import Link from "next/link";
import "./text-btn.css";

const TextBtn = ({ text }) => {
  return (
    <Link href="/" className="text-btn">
      <p>{text}</p>
    </Link>
  );
};

export default TextBtn;