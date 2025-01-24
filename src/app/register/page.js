"use client";
import { NEXT_BASE_URL } from "@/utils/constant";
import styles from "./register.module.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";

export default function Register() {
  const router = useRouter();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleRedirect = (e) => {
    e.preventDefault();
    router.push("/login");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(`${NEXT_BASE_URL}/signup`, user)
      .then((response) => {
        alert("Berhasil Registrasi");
        router.push("/login");
      })
      .catch((msg) => {
        alert(msg.validation);
      });
  };

  const handleOnChange = (name, value) => {
    setUser({ ...user, [name]: value });
  };

  return (
    <main className={styles.main}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Register</h5>
          <hr className="my-3" />
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                onChange={(e) => handleOnChange(e.target.name, e.target.value)}
              />
            </div>
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
                If you have account please login{" "}
                <a
                  className="cursor-pointer"
                  style={{ cursor: "pointer !important" }}
                  onClick={handleRedirect}
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
