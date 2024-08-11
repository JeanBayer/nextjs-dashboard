"use client";

import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function NameUser() {
  const [name, setName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const session = await getSession();
      if (!session) return null;
      setName(session?.user?.name!);
    };

    fetchData();
  }, []);

  return <div className="text-white text-sm">Hi {name}</div>;
}
