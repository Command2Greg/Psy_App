"use client";

import Image from "next/image";
import CustomButton from "../components/CustomButton";
import useFirebaseAuth from "../PersonalHooks/useFirebaseAuth";

const page = () => {
  const {signInWithGoogle} = useFirebaseAuth()

  return (
    <div className="flex flex-col justify-between items-center w-screen h-screen">
      <div className="main__logo-image ">
        <Image
          src="/mainLogo.png"
          alt="Logo"
          style={{ width: "30%", height: "auto" }}
          width={500}
          height={200}
          priority
        />
      </div>
      <div className="registration__component-block">
        <div className="google-logIn__button">
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
};

export default page;
