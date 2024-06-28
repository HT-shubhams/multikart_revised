import React, { useState } from "react";
import { MainpageHeader } from "./MainpageHeader";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

export const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/reset-password",
        {
          email,
          newPassword,
        },
      );

      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <div>
        <MainpageHeader />
      </div>

      <div className="items-center md:flex md:flex-grow md:justify-center">
        <form
          className="mx-3 mt-4 rounded-md border p-4 shadow-lg md:w-[450px] md:border-0 md:text-center md:shadow-none"
          onSubmit={handleResetPassword}
        >
          <div className="text-lg font-medium md:text-4xl">Reset Password</div>
          <div className="mt-6 md:mt-10">
            <div>
              <input
                type="email"
                placeholder="Enter your Email ID"
                className="mb-3 h-11 w-full rounded-md border border-[#c4c4c4] p-3 md:mb-4"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Enter New Password"
                className="mb-3 h-11 w-full rounded-md border border-[#c4c4c4] p-3 md:mb-4"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Confirm New Password"
                className="mb-3 h-11 w-full rounded-md border border-[#c4c4c4] p-3 md:mb-5"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="mb-5 h-12 w-full rounded-md bg-[#641cc0] text-lg font-medium text-white md:h-14"
                >
                  Reset Password
                </button>
              </div>
              <div className="mt-3 md:mt-4">
                <Link
                  to="/sign-in"
                  className="text-sm text-[#641cc0] underline underline-offset-2"
                >
                  Back to Login
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div className="mt-auto py-4 text-center text-xs font-light text-[#4f5665] md:bg-[#f5f6f8]">
        Copyright © 2021 Multikart. All rights reserved.
      </div>
    </div>
  );
};
