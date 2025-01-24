"use client";

import { Fragment } from "react";
import styles from "./login.module.css";

export default function LoginPage() {
  return (
    <main className={styles.main}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Login</h5>
          <hr className="my-3" />
          <form>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
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
