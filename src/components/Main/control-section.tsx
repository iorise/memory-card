import { DifficultyModesType } from "@/types";
import React from "react";
import { Button } from "../ui/button";
import Footer from "./footer";

interface ControlSectionProps {
  handleDifficultyMode: (mode: DifficultyModesType) => () => void;
}

const ControlSection = ({ handleDifficultyMode }: ControlSectionProps) => {
  return (
    <div className="flex gap-5 flex-col md:flex-row">
      <Button size={"xl"} onClick={handleDifficultyMode("easy")}>
        Easy
      </Button>
      <Button size={"xl"} onClick={handleDifficultyMode("medium")}>
        Medium
      </Button>
      <Button size={"xl"} onClick={handleDifficultyMode("hard")}>
        Hard
      </Button>

      <Footer />
    </div>
  );
};

export default ControlSection;
