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
        : [...prevSelected, id]
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
    <div className="w-full overflow-x-auto mt-7 md:mt-10">
      {showModal && (
        <DeleteModal
          onConfirm={handleDeleteUser}
          onCancel={() => setShowModal(false)}
        />
      )}
      <table className="min-w-full divide-y divide-gray-200 font-poppins text-[#63666B]">
        <thead className="bg-gray-50">
          <tr>
            <th className="w-12 px-4 py-2 text-left">
              <input
                type="checkbox"
                className="w-4 h-4"
                onChange={handleSelectAll}
                checked={selectedUsers.length === users.length}
              />
            </th>
            <th className="text-[14px] md:text-[16px] px-4 py-2 text-left">
              ID
            </th>
            <th className="text-[14px] md:text-[16px] px-4 py-2 text-left">
              Title
            </th>
            <th className="text-[14px] md:text-[16px] px-4 py-2 text-left">
              Email
            </th>
            <th className="md:table-cell text-[14px] md:text-[16px] px-4 py-2 text-left">
              Last Login
            </th>
            <th className="md:table-cell text-[14px] md:text-[16px] px-4 py-2 text-left">
              Phone
            </th>
            <th className="md:table-cell text-[14px] md:text-[16px] px-4 py-2 text-left">
              Role
            </th>
            <th className="md:table-cell text-[14px] md:text-[16px] px-4 py-2 text-left">
              Status
            </th>
            <th className="md:table-cell text-[14px] md:text-[16px] px-4 py-2 text-left">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {users.map((user) => (
            <tr key={user.id}>
              <td className="text-[14px] md:text-[16px] px-4 py-2">
                <input
                  type="checkbox"
                  className="w-4 h-4"
                  checked={selectedUsers.includes(user.id)}
                  onChange={() => handleSelectUser(user.id)}
                />
              </td>
              <td className="text-[14px] md:text-[16px] px-4 py-2">
                {user.id}
              </td>
              <td className="text-[14px] md:text-[16px] px-4 py-2">
                <div className="flex items-center">
                  <img
                    className="w-8 h-8 rounded-full mr-2"
                    src={user.photo}
                    alt={`${user.firstName} ${user.lastName}`}
                  />
                  <span className="whitespace-nowrap">{`${user.firstName} ${user.lastName}`}</span>
                </div>
              </td>
              <td className="text-[14px] md:text-[16px] px-4 py-2 max-w-xs truncate">
                {user.email}
              </td>
              <td className="md:table-cell text-[14px] md:text-[16px] px-4 py-2">
                {getLastLoginDisplay(user.lastLogin)}
              </td>
              <td className="md:table-cell text-[14px] md:text-[16px] px-4 py-2">
                {user.phone}
              </td>
              <td className="md:table-cell text-[14px] md:text-[16px] px-4 py-2">
                {user.role}
              </td>
              <td className="md:table-cell text-[14px] md:text-[16px] px-4 py-2">
                {user.status}
              </td>
              <td className="md:table-cell text-[14px] md:text-[16px] px-4 py-2">
                <select
                  className="bg-white border border-[#777a81] rounded-md w-24 h-8"
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
