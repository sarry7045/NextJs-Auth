"use client";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
  });

  const [buttonEnable, setButtonEnable] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      router.push("/login");
      console.log("Response", response);
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonEnable(false);
    } else {
      setButtonEnable(true);
    }
  }, [user]);

  return (
    <>
      <div>Sign Up Page</div>
      <div>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
      </div>
      <div>
        <button onClick={onSignup} disabled={buttonEnable}>
          Sign Up
        </button>
      </div>
    </>
  );
};

export default SignUp;
