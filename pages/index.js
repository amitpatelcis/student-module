import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function WelcomePage() {
  const router = useRouter();

  useEffect(() => {
    router.push("/student/login");
  }, []);
  return <></>;
}
