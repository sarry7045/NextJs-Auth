"use client";
import React from "react";

const page = ({ params }) => {
  return (
    <div>
      <h2> Profile Page</h2>
      <p> {params.id}</p>
    </div>
  );
};

export default page;
