"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Profile() {
  const router = useRouter();
  const [query, setQuery] = useState();
  useEffect(() => {
    if (!sessionStorage.getItem("token")) {
      router.push("/login");
    }
  }, []);

  const handleOnChange = (name, value) => {
    setQuery({ ...query, [name]: value });
  };
  return (
    <main className="container">
      <div className="input-group input-group-sm mb-3">
        <input
          type="text"
          className="form-control"
          name="search"
          onChange={(e) => handleOnChange(name, value)}
          placeholder="Search meeting"
        />
      </div>
      <div className="card w-100">
        <ul className="list-group list-group-flush">
          <li className="list-group-item"></li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
        </ul>
      </div>
    </main>
  );
}
