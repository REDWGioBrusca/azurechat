"use client";
import { AI_NAME } from "@/features/theme/theme-config";
import { signIn } from "next-auth/react";
import { FC } from "react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface LoginProps {
  isDevMode: boolean;
}

export const LogIn: FC<LoginProps> = (props) => {
  return (
    <Card className="flex gap-2 flex-col min-w-[300px]">
      <CardHeader className="gap-2 pb-0">
      <img className="flex justify-center w-64" src="REDW_logo.png"></img>
        <CardTitle className="flex justify-center text-4xl gap-2 m-4">
          <span className="text-primary m-4">{AI_NAME}</span>
        </CardTitle>
        <CardDescription>
          Login in with your REDW account
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Button onClick={() => signIn("azure-ad")}>Login</Button>
        {props.isDevMode ? (
          <Button onClick={() => signIn("localdev")}>
            Basic Auth (DEV ONLY)
          </Button>
        ) : null}
      </CardContent>
    </Card>
  );
};
