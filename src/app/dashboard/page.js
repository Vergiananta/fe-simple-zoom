"use client";
import { useRouter } from "next/navigation";
import { Fragment, useEffect } from "react";

export default function Profile() {
  const router = useRouter();
  const isToken = sessionStorage.getItem("token");
  useEffect(() => {
    if (!isToken) {
      router.push("/login");
    }
  }, []);
  return (
    <main className="container">
      <div>
        <p>Profile</p>
      </div>
    </main>
  );
}
