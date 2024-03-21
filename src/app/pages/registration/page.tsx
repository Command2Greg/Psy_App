"use client";

import Image from "next/image";
import CustomButton from "../../components/CustomButton";
import { getAuthUtils } from "../../PersonalHooks/useFirebaseAuth";

export default function page() {
  const { signInWithGoogle } = getAuthUtils();

  return (
    <div className="flex flex-col justify-between items-center w-screen h-screen">
      <div className="w-full h-[70%] bg-cover bg-no-repeat z-0 flex justify-center items-start ">
        <Image
          src="/mainLogo.png"
          alt="Logo"
          style={{ width: "30%", height: "auto" }}
          width={500}
          height={200}
          priority
        />
      </div>
      <div className="flex flex-col justify-between max-w-[500px] w-auto h-[50%]">
        <div className="z-10 h-[20%] w-[100%] m-2 ">
          <CustomButton
            title={"Continue with Google"}
            containerStyles={
              "text-black xl:text-xl sm:text-xs lg:text-sm w-full h-full flex justify-center items-center border-2 border-gray-500 flex justify-center text-center  rounded-md hover:bg-gray-400 transition-colors duration-300 ease-in-out"
            }
            handleClick={signInWithGoogle}
            btnType={"button"}
            iconBefore={"/google.logo.png"}
          />
        </div>
      </div>
    </div>
  );
}
