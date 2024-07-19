"use client";
import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const Profilepage = () => {
  const router = useRouter();
  const [data, setData] = useState("nothing");

  const getUserDetails = async () => {
    try {
      const res = await axios.post("/api/users/me");
      setData(res.data.data._id);
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const logout = async () => {
    try {
      const res = await axios.get("/api/users/logout");
      toast.success("Logout Success");
      router.push("/login");
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <div>
        <h1> Profile Page</h1>
      </div>
      <h2>
        {" "}
        {data === "nothing" ? (
          "Nothing"
        ) : (
          <Link href={`/profile/${data}`}>{data}</Link>
        )}
      </h2>
      <hr />
      <button onClick={logout}>Logout</button>

      <hr />
      <button onClick={getUserDetails}>Get Data</button>
    </>
  );
};

export default Profilepage;
