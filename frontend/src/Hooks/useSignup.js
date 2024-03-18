import React, { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../Context/AuthContext";
export const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const [authUser, setAuthUser] = useAuthContext();
  const signup = async ({
    fullname,
    username,
    password,
    confirmpassword,
    gender,
  }) => {
    const success = handleInputErrors({
      fullname,
      username,
      password,
      confirmpassword,
      gender,
    });

    if (!success) return;
    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: POST,
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          fullname,
          username,
          password,
          confirmpassword,
          gender,
        }),
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem("chat-user", JSON.stringify(data));

      setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

function handleInputErrors({
  fullname,
  username,
  password,
  confirmpassword,
  gender,
}) {
  if (!fullname || !username || !password || !confirmpassword || !gender) {
    toast.error("Please fill in All Fields");
    return false;
  }
  if (password != confirmpassword) {
    toast.error("Passwords do not Match");
    return false;
  }
  if (password.length < 6) {
    toast.error("Password must be at least 6 Characters");
    return false;
  }
  return true;
}
