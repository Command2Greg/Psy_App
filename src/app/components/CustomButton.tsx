import { CustomButtonProps } from "@types";
import Image from "next/image";

export default function CustomButton({
  title,
  containerStyles,
  handleClick,
  btnType,
  iconBefore,
}: CustomButtonProps) {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      {iconBefore && (
        <Image
          src={iconBefore}
          alt="icon"
          style={{ width: "auto", height: "90%" }}
          width={50}
          height={50}
          priority
        />
      )}
      <span>{title}</span>
    </button>
  );
}
