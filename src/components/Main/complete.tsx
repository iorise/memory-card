import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import ControlSection from "./control-section";

interface CompleteProps {
  won?: boolean;
  lost?: boolean;
  resetGame: () => void;
}

const Complete = ({ won, lost, resetGame }: CompleteProps) => {
  return (
    <div className="flex flex-col gap-10 items-center justify-center text-2xl font-bold uppercase">
      <div
        className={`${
          won ? "text-green-400" : "text-red-400"
        } flex flex-col items-center gap-5 animate-fade-in`}
      >
        <Image src={!won ? "/anime-cry.gif" :"/lvdc.gif"} alt="cry" width={100} height={100} />
        <p>{`You ${won ? "win!" : "lose!"}`}</p>
        <p className="capitalize text-white text-xl font-semibold">try again ?</p>
      </div>
      <Button size={"xl"} variant={"ghost"} onClick={resetGame}>menu</Button>
    </div>
  );
};

export default Complete;
