"use client";

import React from "react";
import { signIn } from "next-auth/react";
import { AiFillGithub } from "react-icons/ai";
import { Button } from "@/app/ui/button";
import clsx from "clsx";

export function ThirdPartyButton({
  type,
  className,
}: {
  type: keyof typeof thirdPartyButtons;
  className?: string;
}) {
  const button = thirdPartyButtons[type];

  return (
    <Button
      type="button"
      onClick={button.onClick}
      className={clsx(button.className, className)}
    >
      <button.icon className="h-6 w-6" />
      <span className="ml-4" />
      Sign in with {button.name}
    </Button>
  );
}

const thirdPartyButtons = {
  github: {
    id: "github",
    name: "GitHub",
    icon: AiFillGithub,
    className: "bg-slate-900 w-full hover:bg-slate-800",
    onClick: () => signIn("github"),
  },
};
