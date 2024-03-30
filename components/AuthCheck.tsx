"use client";

import { useSession } from "next-auth/react";
import React from "react";

const AuthCheck = ({ children }: { children: React.ReactNode }) => {
  const { data: session, status } = useSession();

  console.log(session, status);

  if (status === "authenticated") {
    return <>{children}</>;
  } else {
    return <></>;
  }
};

export default AuthCheck;
