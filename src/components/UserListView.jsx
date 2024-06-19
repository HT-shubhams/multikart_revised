import React, { useState } from "react";
import useUserStore from "./useUserStore";
import { formatDistanceToNow } from "date-fns";
import { useNavigate } from "react-router-dom";
import { DeleteModal } from "./DeleteModal";
import { toast } from "react-toastify";

const UserListView = ({ users }) => {
  const navigate = useNavigate();
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedUsers(users.map((user) => user.id));
    } else {
      setSelectedUsers([]);
    }
  };

  const handleSelectUser = (id) => {
    setSelectedUsers((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((userId) => userId !== id)
        : [...prevSelected, id],
    );
  };

  const getLastLoginDisplay = (lastLogin) => {
    return formatDistanceToNow(new Date(lastLogin), { addSuffix: true });
  };

  const navigateToEditUser = (userId) => {
    navigate(`/edit-user/${userId}`);
  };

  const handleOptionChange = (userId, selectedOption) => {
    if (selectedOption === "Edit") {
      navigateToEditUser(userId);
    } else if (selectedOption === "Delete") {
      setShowModal(true);
      setUserToDelete(userId);
    }
  };

  const handleDeleteUser = () => {
    useUserStore.getState().deleteUser(userToDelete);
    setShowModal(false);
    navigate("/");
    toast.error("User has been deleted successfully!");
    console.log("User deleted!");
  };

  return (
    <div className="mt-7 w-full overflow-x-auto md:mt-10">
      {showModal && (
        <DeleteModal
          onConfirm={handleDeleteUser}
          onCancel={() => setShowModal(false)}
        />
      )}
      <table className="font-poppins min-w-full divide-y divide-gray-200 text-[#63666B]">
        <thead className="bg-gray-50">
          <tr>
            <th className="w-12 px-4 py-2 text-left">
              <input
                type="checkbox"
                className="h-4 w-4"
                onChange={handleSelectAll}
                checked={selectedUsers.length === users.length}
              />
            </th>
            <th className="px-4 py-2 text-left text-[14px] md:text-[16px]">
              ID
            </th>
            <th className="px-4 py-2 text-left text-[14px] md:text-[16px]">
              Title
            </th>
            <th className="px-4 py-2 text-left text-[14px] md:text-[16px]">
              Email
            </th>
            <th className="px-4 py-2 text-left text-[14px] md:table-cell md:text-[16px]">
              Last Login
            </th>
            <th className="px-4 py-2 text-left text-[14px] md:table-cell md:text-[16px]">
              Phone
            </th>
            <th className="px-4 py-2 text-left text-[14px] md:table-cell md:text-[16px]">
              Role
            </th>
            <th className="px-4 py-2 text-left text-[14px] md:table-cell md:text-[16px]">
              Status
            </th>
            <th className="px-4 py-2 text-left text-[14px] md:table-cell md:text-[16px]">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {users.map((user) => (
            <tr key={user.id}>
              <td className="px-4 py-2 text-[14px] md:text-[16px]">
                <input
                  type="checkbox"
                  className="h-4 w-4"
                  checked={selectedUsers.includes(user.id)}
                  onChange={() => handleSelectUser(user.id)}
                />
              </td>
              <td className="px-4 py-2 text-[14px] md:text-[16px]">
                {user.id}
              </td>
              <td className="px-4 py-2 text-[14px] md:text-[16px]">
                <div className="flex items-center">
                  <img
                    className="mr-2 h-8 w-8 rounded-full"
                    src={user.photo}
                    alt={`${user.firstName} ${user.lastName}`}
                  />
                  <span className="whitespace-nowrap">{`${user.firstName} ${user.lastName}`}</span>
                </div>
              </td>
              <td className="max-w-xs truncate px-4 py-2 text-[14px] md:text-[16px]">
                {user.email}
              </td>
              <td className="px-4 py-2 text-[14px] md:table-cell md:text-[16px]">
                {getLastLoginDisplay(user.lastLogin)}
              </td>
              <td className="px-4 py-2 text-[14px] md:table-cell md:text-[16px]">
                {user.phone}
              </td>
              <td className="px-4 py-2 text-[14px] md:table-cell md:text-[16px]">
                {user.role}
              </td>
              <td className="px-4 py-2 text-[14px] md:table-cell md:text-[16px]">
                {user.status}
              </td>
              <td className="px-4 py-2 text-[14px] md:table-cell md:text-[16px]">
                <select
                  className="h-8 w-24 rounded-md border border-[#777a81] bg-white"
                  onChange={(e) => handleOptionChange(user.id, e.target.value)}
                >
                  <option>Action</option>
                  <option>Edit</option>
                  <option>Delete</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserListView;
