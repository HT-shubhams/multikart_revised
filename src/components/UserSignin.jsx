import React from "react";
import { MainpageHeader } from "./MainpageHeader";
import { SigninImage } from "../assets/images/SigninImage";
import { Link } from "react-router-dom";

export const UserSignin = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <div>
        <MainpageHeader />
      </div>

      <div className="flex justify-center">
        <div className="flex max-w-screen-xl md:mt-12">
          <div className="hidden h-[529px] w-[765px] md:ml-[-200px] md:mr-10 md:inline-block">
            <SigninImage />
          </div>

          <div className="mx-3 mt-5 rounded-lg border px-4 pt-4 shadow-md md:w-96">
            <div className="text-lg font-medium md:text-2xl">Login</div>
            <form className="mt-7 md:mt-10">
              <label htmlFor="" className="text-sm">
                Email ID / Username
              </label>
              <input
                type="text"
                className="mb-2 mt-2 w-full rounded-md border border-[#c4c4c4] p-2"
              />
              <label htmlFor="" className="text-sm">
                Password
              </label>
              <input
                type="password"
                className="mb-3 mt-2 w-full rounded-md border border-[#c4c4c4] p-2"
              />
              <Link to="/" className="text-sm text-[#641cc0]">
                Forgot Password?
              </Link>
              <button
                type="button"
                className="mb-5 mt-5 h-12 w-full rounded-md bg-[#641cc0] text-lg font-medium text-white md:mt-8 md:h-14"
              >
                Login
              </button>
              <div className="mb-8 w-full text-center text-sm font-normal text-[#4f5665] md:mb-16 md:text-base">
                <span>New User?{"  "}</span>
                <Link
                  to="/sign-up"
                  className="text-[#0d0d0e] underline underline-offset-2"
                >
                  Sign Up
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="mt-auto py-4 text-center text-xs font-light text-[#4f5665] md:bg-[#f5f6f8]">
        Copyright © 2021 Multikart. All rights reserved.
      </div>
    </div>
  );
};
