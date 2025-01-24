"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Profile() {
  const router = useRouter();
  useEffect(() => {
    if (!sessionStorage.getItem("token")) {
      router.push("/login");
    }
  }, []);
  return (
    <main className="container">
      <div class="input-group input-group-sm mb-3">
        <input
          type="text"
          class="form-control"
          aria-label="Sizing example input"
          placeholder="Search meeting"
        />
      </div>
      <div class="card w-100">
        <ul class="list-group list-group-flush">
          <li class="list-group-item"></li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">A third item</li>
        </ul>
      </div>
    </main>
  );
}
