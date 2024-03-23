'use client';
import Image from "next/image";
import { signInWithGoogle } from "@/app/PersonalHooks/useFirebaseAuth";
import { CustomButtonProps } from "../types/index";

export default function CustomButton({
  title,
  containerStyles,
  btnType,
  iconBefore,
}: CustomButtonProps) {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={signInWithGoogle}
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
