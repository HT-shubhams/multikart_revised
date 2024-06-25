import React, { useState, useEffect } from "react";
import useUserStore from "./useUserStore";
import { HomeIcon } from "../assets/icons/HomeIcon";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const EditUser = () => {
  const { users, updateUser } = useUserStore();
  const navigate = useNavigate();
  const { userId } = useParams();

  const user = users.find((user) => user.id === parseInt(userId));

  const [firstName, setFirstName] = useState(user?.firstName || "");
  const [lastName, setLastName] = useState(user?.lastName || "");
  const [email, setEmail] = useState(user?.email || "");
  const [phone, setPhone] = useState(user?.phone || "");
  const [role, setRole] = useState(user?.role || "User");
  const [status, setStatus] = useState(user?.status || "Active");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    if (!user) {
      navigate("/users");
    }
  }, [user, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const updatedUser = {
      id: user.id,
      photo: user.photo,
      firstName,
      lastName,
      email,
      phone,
      role,
      status,
      lastLogin: user.lastLogin,
      password: password ? password : user.password,
    };

    updateUser(user.id, updatedUser);

    toast.warn("User has been updated successfully!");
    navigate("/users");
  };

  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      <div className="mt-8 text-[#63666b] md:mr-12 md:mt-11 md:flex md:items-center md:justify-between">
        <div className="ml-4 text-2xl text-black md:ml-8">Users</div>
        <div className="ml-4 mt-3 flex items-center text-sm md:ml-8 md:mt-0 md:text-lg">
          <div className="pr-2 md:pr-4" onClick={() => navigate("/users")}>
            <HomeIcon />
          </div>
          /{" "}
          <span
            className="px-2 text-black md:px-4"
            onClick={() => navigate("/users")}
          >
            Users
          </span>{" "}
          / <span className="px-2 md:px-4">Edit User</span>
        </div>
      </div>

      <div className="shadow-bottom-left mx-5 mt-7 rounded-xl border px-4 py-6 shadow-md md:mx-20 md:mt-11 md:px-10">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex w-full flex-col md:flex-row md:items-center">
            <label htmlFor="firstName" className="md:w-1/4">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              placeholder="First Name"
              className="mt-1 w-full rounded-md border border-[#c4c4c4] p-2 md:mt-0 md:w-3/4"
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>

          <div className="flex w-full flex-col md:flex-row md:items-center">
            <label htmlFor="lastName" className="md:w-1/4">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              placeholder="Last Name"
              className="mt-1 w-full rounded-md border border-[#c4c4c4] p-2 md:mt-0 md:w-3/4"
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>

          <div className="flex w-full flex-col md:flex-row md:items-center">
            <label htmlFor="email" className="md:w-1/4">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              value={email}
              placeholder="Email"
              className="mt-1 w-full rounded-md border border-[#c4c4c4] p-2 md:mt-0 md:w-3/4"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="flex w-full flex-col md:flex-row md:items-center">
            <label htmlFor="phone" className="md:w-1/4">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              placeholder="Phone"
              className="mt-1 w-full rounded-md border border-[#c4c4c4] p-2 md:mt-0 md:w-3/4"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="flex w-full flex-col md:flex-row md:items-center">
            <label htmlFor="role" className="md:w-1/4">
              Role
            </label>
            <select
              id="role"
              value={role}
              className="mt-1 w-full rounded-md border border-[#c4c4c4] p-2 md:mt-0 md:w-3/4"
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="User">User</option>
              <option value="Admin">Admin</option>
            </select>
          </div>

          <div className="flex w-full flex-col md:flex-row md:items-center">
            <label htmlFor="status" className="md:w-1/4">
              Status
            </label>
            <select
              id="status"
              value={status}
              className="mt-1 w-full rounded-md border border-[#c4c4c4] p-2 md:mt-0 md:w-3/4"
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          <div className="flex w-full flex-col md:flex-row md:items-center">
            <label htmlFor="password" className="md:w-1/4">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              placeholder="Password"
              className="mt-1 w-full rounded-md border border-[#c4c4c4] p-2 md:mt-0 md:w-3/4"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex w-full flex-col md:flex-row md:items-center">
            <label htmlFor="confirmPassword" className="md:w-1/4">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              placeholder="Confirm Password"
              className="mt-1 w-full rounded-md border border-[#c4c4c4] p-2 md:mt-0 md:w-3/4"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="mt-4 h-10 w-28 rounded-md bg-[#641CC0] p-2 text-base text-white md:h-12 md:w-28 md:text-xl"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
