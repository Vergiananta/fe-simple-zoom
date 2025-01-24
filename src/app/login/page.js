"use client";

import styles from "./login.module.css";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/dashboard");
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
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
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
