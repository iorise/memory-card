import React from "react";
import { Network } from "lucide-react";
import { Button } from "../ui/button";

const ErrorSection = () => {
  const handleReload = () => {
    window.location.reload();
  };
  return (
    <div className="flex flex-col items-center gap-8 text-xl">
      <div className="flex flex-col items-center gap-3">
        <Network size={100} />
        <p>Something went wrong! Please check your connection!</p>
      </div>
      <Button variant={"secondary"} onClick={handleReload}>
        Reload
      </Button>
    </div>
  );
};

export default ErrorSection;
