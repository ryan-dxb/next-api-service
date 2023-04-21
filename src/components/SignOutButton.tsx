"use client";

import React, { FC, useState } from "react";
import Button from "./ui/Button";
import { signIn } from "next-auth/react";

interface SignOutButtonProps {}

const SignOutButton: FC<SignOutButtonProps> = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signOut = async () => {
    setIsLoading(true);

    try {
    } catch (error) {
      // toast({
      //   title: "Error Signing out",
      //   message: "Please try again later.",
      //   type: "error",
      // });
    }

    setIsLoading(false);
  };

  return (
    <Button onClick={signOut} isLoading={isLoading}>
      Sign In
    </Button>
  );
};

export default SignOutButton;
