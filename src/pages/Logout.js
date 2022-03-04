import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  let navigate  = useNavigate();
  localStorage.removeItem("token");
  navigate("/");

  return <div></div>;
};

export default Logout;