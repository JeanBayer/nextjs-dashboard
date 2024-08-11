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
      Sign in with {button.name}
    </Button>
  );
}

const thirdPartyButtons = {
  github: {
    id: "github",
    name: "GitHub",
    icon: AiFillGithub,
    iconColor: "text-gray-100",
    className: "bg-slate-900 w-full hover:bg-slate-800",
    onClick: () => signIn("github"),
  },
  google: {
    id: "google",
    name: "Google",
    icon: AiFillGoogleCircle,
    iconColor: "text-red-500",
    className: "bg-white w-full hover:bg-slate-50 text-gray-950",
    onClick: () => signIn("google"),
  },
};
