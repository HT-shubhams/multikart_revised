import React, { useState } from "react";
import { MainpageHeader } from "./MainpageHeader";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

export const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/forgot-password",
        {
          email,
        },
      );

      const { token } = response.data;

      // redirect to reset password page with token
      window.location = `/reset-password/${token}`;
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
          onSubmit={handleForgotPassword}
        >
          <div className="text-lg font-medium md:text-4xl">Forgot Password</div>
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
