"use client";

import { Button } from "@/app/ui/button";
import clsx from "clsx";
import { signIn } from "next-auth/react";
import { AiFillGithub, AiFillGoogleCircle } from "react-icons/ai";

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
      <button.icon className={clsx(button.iconColor, "h-6 w-6")} />
      <span className="ml-4" />
      <span className={button.textColor}>Sign in with {button.name}</span>
    </Button>
  );
}

const thirdPartyButtons = {
  github: {
    id: "github",
    name: "GitHub",
    icon: AiFillGithub,
    iconColor: "text-gray-100",
    textColor: "text-gray-100",
    className: "bg-slate-900 w-full hover:bg-slate-800",
    onClick: () => signIn("github"),
  },
  google: {
    id: "google",
    name: "Google",
    icon: AiFillGoogleCircle,
    iconColor: "text-red-500",
    textColor: "text-gray-900",
    className: "bg-white w-full hover:bg-slate-50",
    onClick: () => signIn("google"),
  },
};
