import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { GithubIcon } from "lucide-react";

const Footer = () => {
  return (
    <div className="text-center absolute md:bottom-10 bottom-5 bg-none left-1/2 transform -translate-x-1/2">
      <div className="flex">
        <Link href="https://github.com/iorise" target="_blank">
          <Button
            size={"xl"}
            variant={"secondary"}
            className="bg-none text-blue-400"
          >
            <GithubIcon />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
