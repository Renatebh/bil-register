import { useRef, useState, useEffect } from "react";
import styles from "./login.module.css";
import bilregisterLogo from "../components/logo/bilregister_logo.png";
import { Navigate } from "react-router-dom";

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user === "admin" && pwd === "admin") {
      setSuccess(true);
    } else if (user !== "admin" && pwd !== "admin") {
      setErrMsg("Feil username og passord");
    } else if (user || pwd !== "admin") {
      if (user !== "admin") {
        setErrMsg("Feil username");
      } else if (pwd !== "admin") {
        setErrMsg("Feil passord");
      }
    }
  };

  return (
    <div className={styles["login-background"]}>
      <div className={styles["img-container"]}>
        <img
          src={bilregisterLogo}
          alt="Bilregister logo"
          className={styles["bilregister-logo"]}
        />
      </div>
      {success ? (
        <Navigate replace to="/home" />
      ) : (
        <section className={styles["section"]}>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1>Login</h1>
          <form onSubmit={handleSubmit} className={styles["form"]}>
            <label className={styles["label"]} htmlFor="username">
              Username:
            </label>
            <input
              className={styles["input"]}
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />

            <label htmlFor="password">Password:</label>
            <input
              className={styles["input"]}
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
            <button className={styles["login-btn"]}>Login</button>
          </form>
        </section>
      )}
    </div>
  );
};

export default Login;
