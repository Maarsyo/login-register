import React from "react";
import Image from "next/image";
import styles from "./styles/styles.module.scss";
import Link from "next/link";
import Head from "next/head";

export default function Register() {
  return (
    <>
      <Head>
        <title>Register page</title>
      </Head>
      <section className={styles.register}>
        <div className={styles.registerHeader}>
          <div className={styles.registerLogo}>
            <Image src="/logo.png" alt="Logo" width={100} height={100} />
          </div>
          <h1 className="registerTitle">Register</h1>
        </div>
        <div className={styles.registerBody}>
          <div className={styles.registerInput}>
            <label>Username</label>
            <div className="auth-input-contain">
              <input
                type="e-mail"
                input-name="E-mail"
                className={styles.registerInput}
                id="Username"
                placeholder="Username"
              />
            </div>
          </div>
          <div className={styles.registerInput}>
            <label>E-mail</label>
            <div className="auth-input-contain">
              <input
                type="e-mail"
                input-name="E-mail"
                className={styles.registerInput}
                id="E-mail"
                placeholder="E-mail"
              />
            </div>
          </div>
          <div className={styles.registerInput}>
            <label>Password</label>
            <div className="auth-input-contain">
              <input
                type="password"
                input-name="password"
                className={styles.registerInput}
                id="password"
                placeholder="Password"
              />
            </div>
          </div>
          <div className={styles.need}>
            <Link href="/login">
              <a>Already have a account?</a>
            </Link>
          </div>
          <button>Register</button>
        </div>
      </section>
    </>
  );
}
