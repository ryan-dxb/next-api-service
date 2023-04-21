"use client";

import React, { FC, useState } from "react";
import Button from "./ui/Button";
import { signIn } from "next-auth/react";

interface SignInButtonProps {}

const SignInButton: FC<SignInButtonProps> = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signInWithGoogle = async () => {
    setIsLoading(true);

    try {
    } catch (error) {
      // toast({
      //   title: "Error Signing In",
      //   message: "Please try again later.",
      //   type: "error",
      // });
    }

    setIsLoading(false);
  };

  return (
    <Button onClick={signInWithGoogle} isLoading={isLoading}>
      Sign In
    </Button>
  );
};

export default SignInButton;
