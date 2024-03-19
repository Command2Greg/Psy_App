"use client";
import { useEffect } from "react";
import applySpec from "ramda/es/applySpec";
import fastDeepEqual from "fast-deep-equal";
import { useAppDispatch, useAppSelector } from "./hooks";
import { selectFromAppData } from "./store/selectors/data";
import Image from "next/image";

type Selector = {
  psyhologists: any[];
};

const selector = applySpec<Selector>({
  psyhologists: selectFromAppData("psyhologists", []),
});
export default function Home() {
  const { psyhologists } = useAppSelector<Selector>(selector, fastDeepEqual);
  console.log(psyhologists);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch({ type: "actionType/getAllPsyhologists" });
  }, [dispatch]);

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-cover bg-no-repeat">
      <div className="main-logo w-1/2">
        <Image
          src="/mainLogo.png"
          alt="Logo"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
}
