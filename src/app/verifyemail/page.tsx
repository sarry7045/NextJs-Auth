"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const VerifyEmail = () => {
  const [token, setToken] = useState("");
  // const router = useRouter();

  const verifyEmail = async () => {
    try {
      await axios.post("/api/users/verifyemail", { token });
    } catch (error: any) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    const userToken = window.location.search.split("=")[1];
    setToken(userToken || "");
    // const { query } = router;
    // const urlTokenTwo = query.token;
  }, []);

  useEffect(() => {
    if (token.length > 0) {
      verifyEmail();
    }
  }, [token]);

  return (
    <>
      <div>
        <h5>{token ? `${token}` : "No Token"}</h5>
        <button onClick={verifyEmail}>Verify Email</button>
      </div>
    </>
  );
};

export default VerifyEmail;
