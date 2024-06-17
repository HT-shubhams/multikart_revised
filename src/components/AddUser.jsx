import React, { useState } from "react";
import useUserStore from "./useUserStore";
import { HomeIcon } from "../assets/icons/HomeIcon";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddUser = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("User");
  const [status, setStatus] = useState("Active");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { users, lastUserId } = useUserStore();
  const navigate = useNavigate();

  const addUser = useUserStore((state) => state.addUser);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const newUserId = lastUserId + 1;

    const newUser = {
      id: newUserId,
      photo: "https://via.placeholder.com/100",
      firstName,
      lastName,
      email,
      phone,
      role,
      status,
      lastLogin: new Date().toISOString(),
    };

    addUser(newUser);

    toast.success("User has been added successfully!");

    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setRole("User");
    setStatus("Active");
    setPassword("");
    setConfirmPassword("");

    navigate("/");
  };

  return (
    <div className="bg-[#f9f9f9] min-h-screen">
      <div className="mt-8 md:mt-11 md:flex md:justify-between md:items-center md:mr-12 text-[#63666b]">
        <div className="text-2xl ml-4 md:ml-8 text-black">Users</div>
        <div className="flex ml-4 mt-3 md:mt-0 md:ml-8 items-center text-sm md:text-lg">
          <div className="pr-2 md:pr-4">
            <HomeIcon />
          </div>
          / <span className="px-2 md:px-4 text-black">Users</span> /{" "}
          <span className="px-2 md:px-4">Add User</span>
        </div>
      </div>

      <div className="border mx-5 md:mx-20 mt-7 md:mt-11 px-4 md:px-10 py-6 rounded-xl shadow-md shadow-bottom-left">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
            <label htmlFor="firstName" className="md:w-1/4">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              placeholder="First Name"
              className="border border-[#c4c4c4] rounded-md w-full md:w-3/4 p-2 mt-1 md:mt-0"
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
            <label htmlFor="lastName" className="md:w-1/4">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              placeholder="Last Name"
              className="border border-[#c4c4c4] rounded-md w-full md:w-3/4 p-2 mt-1 md:mt-0"
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
            <label htmlFor="email" className="md:w-1/4">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              value={email}
              placeholder="Email"
              className="border border-[#c4c4c4] rounded-md w-full md:w-3/4 p-2 mt-1 md:mt-0"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
            <label htmlFor="phone" className="md:w-1/4">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              placeholder="Phone"
              className="border border-[#c4c4c4] rounded-md w-full md:w-3/4 p-2 mt-1 md:mt-0"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
            <label htmlFor="role" className="md:w-1/4">
              Role
            </label>
            <select
              id="role"
              value={role}
              className="border border-[#c4c4c4] rounded-md w-full md:w-3/4 p-2 mt-1 md:mt-0"
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="User">User</option>
              <option value="Admin">Admin</option>
            </select>
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
            <label htmlFor="status" className="md:w-1/4">
              Status
            </label>
            <select
              id="status"
              value={status}
              className="border border-[#c4c4c4] rounded-md w-full md:w-3/4 p-2 mt-1 md:mt-0"
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
            <label htmlFor="password" className="md:w-1/4">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="password"
              value={password}
              placeholder="Password"
              className="border border-[#c4c4c4] rounded-md w-full md:w-3/4 p-2 mt-1 md:mt-0"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
            <label htmlFor="confirmPassword" className="md:w-1/4">
              Confirm Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              placeholder="Confirm Password"
              className="border border-[#c4c4c4] rounded-md w-full md:w-3/4 p-2 mt-1 md:mt-0"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="bg-[#641CC0] text-white p-2 rounded-md mt-4 w-28 h-10 md:w-28 md:h-12 text-base md:text-xl"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
