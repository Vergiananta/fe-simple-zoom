"use client";

import { useState } from "react";
import styles from "./login.module.css";
import { useRouter } from "next/navigation";
import axios from "axios";
import { NEXT_BASE_URL } from "@/utils/constant";

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post(`${NEXT_BASE_URL}/login`, user)
      .then((response) => {
        sessionStorage.setItem("token", response.data.token);
        router.push("/dashboard");
      })
      .catch((msg) => {
        alert(JSON.stringify(msg));
      });
  };

  const handleOnChange = (name, value) => {
    setUser({ ...user, [name]: value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    router.push("/register");
  };

  return (
    <main className={styles.main}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Login</h5>
          <hr className="my-3" />
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                onChange={(e) => handleOnChange(e.target.name, e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                onChange={(e) => handleOnChange(e.target.name, e.target.value)}
              />
            </div>
            <div className="mb-2">
              <small>
                If you don't have account please register{" "}
                <a
                  onClick={handleRegister}
                  className="cursor-pointer"
                  style={{ cursor: "pointer !important" }}
                >
                  here
                </a>
              </small>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
