import { useRef, useState, useEffect } from "react";
import styles from "./login.module.css";
import Home from "./Home.jsx";
const Login = () => {
  const userRef = useRef<HTMLInputElement>(null);
  const errRef = useRef<any>();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  // useEffect(() => {
  //   if (userRef.current != null) {
  //     userRef.current.focus();
  //   }
  // }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  //  const checkUserPwd = () => {
  //  let user = "";
  //  let pwd = ""; {
  // //   if (user && pwd === "admin") {

  // //  }
  //  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // console.log(user, pwd);
    // setUser("");
    // setPwd("");

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
    // else {
    //   setErrMsg("");
    // }
  };

  return (
    <>
      {success ? (
        <Home />
      ) : (
        <section>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
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
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
            <button>Login</button>
          </form>
        </section>
      )}
    </>
  );
};

export default Login;
