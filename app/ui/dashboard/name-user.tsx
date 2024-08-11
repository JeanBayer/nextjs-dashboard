"use client";

import useUser from "@/app/hooks/use-user";

export default function NameUser() {
  const user = useUser();

  return <div className="text-white text-sm">Hi {user?.name}</div>;
}
