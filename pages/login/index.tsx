import React from "react";
import Image from "next/image";
import styles from "./styles/styles.module.scss";
import Link from 'next/link'

export default function Login() {
  return (
    <section className={styles.login}>
      <div className={styles.loginHeader}>
        <div className={styles.loginLogo}>
          <Image src="/logo.png" alt="Logo" width={100} height={100} />
        </div>
        <h1 className="loginTitle">Login</h1>
      </div>
      <div className={styles.loginBody}>
        <div className={styles.loginInput}>
          <label>Username</label>
          <div className="auth-input-contain">
            <input
              type="e-mail"
              input-name="E-mail"
              className={styles.loginInput}
              id="Username"
              placeholder="Username"
            />
          </div>
        </div>
        <div className={styles.loginInput}>
          <label>Password</label>
          <div className="auth-input-contain">
            <input
              type="password"
              input-name="password"
              className={styles.loginInput}
              id="password"
              placeholder="Password"
            />
          </div>
        </div>
        <div className={styles.need}>
          <Link href="/register">
            <a>Need a account?</a>
          </Link>
        </div>
        <button>Login</button>
      </div>
    </section>
  );
}
