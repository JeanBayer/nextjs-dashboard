"use client";

import { User } from "next-auth";
import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function useUser() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const session = await getSession();
      if (!session?.user) return null;
      setUser(session.user);
    };

    fetchData();
  }, []);

  return user;
}
