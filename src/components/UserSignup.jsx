import React from "react";
import { Form, Link } from "react-router-dom";
import { MainpageHeader } from "./MainpageHeader";
import { SignupImage } from "../assets/images/SignupImage";

export const UserSignup = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <div>
        <MainpageHeader />
      </div>

      <div className="flex justify-center">
        <div className="flex max-w-screen-xl md:mt-12">
          <div className="hidden h-[529px] w-[765px] md:inline-block">
            <SignupImage />
          </div>

          <div className="mx-3 mt-5 rounded-lg border px-4 pt-4 md:ml-10 md:w-96 md:border-0">
            <div className="text-lg font-medium md:text-2xl">
              Sign up as a new user
            </div>
            <div>
              <div className="text-sm font-normal text-[#7e7e7e] md:text-base">
                or already registered?{" "}
                <Link to="/" className="text-[#641cc0]">
                  Login now
                </Link>
                <form className="mt-9 md:mt-12">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="mb-3 h-11 w-full rounded-md border p-3 md:mb-4"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="mb-3 h-11 w-full rounded-md border p-3 md:mb-4"
                  />
                  <input
                    type="text"
                    placeholder="Email ID"
                    className="mb-3 h-11 w-full rounded-md border p-3 md:mb-4"
                  />
                  <input
                    type="text"
                    placeholder="Create Password"
                    className="mb-3 h-11 w-full rounded-md border p-3 md:mb-4"
                  />
                  <input
                    type="text"
                    placeholder="Confirm Password"
                    className="mb-3 h-11 w-full rounded-md border p-3 md:mb-5"
                  />
                  <button
                    type="button"
                    className="mb-5 h-12 w-full rounded-md bg-[#641cc0] text-lg font-medium text-white md:h-14"
                  >
                    Register Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-auto py-4 text-center text-xs font-light text-[#4f5665] md:bg-[#f5f6f8]">
        Copyright © 2021 Multikart. All rights reserved.
      </div>
    </div>
  );
};
