import { useMemo } from "react";

const Sort = ({ filteredUsers, sortOption }) => {
  const sortedUsers = useMemo(() => {
    const sorted = [...filteredUsers];
    switch (sortOption) {
      case "A to Z":
        sorted.sort((a, b) => a.firstName.localeCompare(b.firstName));
        break;
      case "Z to A":
        sorted.sort((a, b) => b.firstName.localeCompare(a.firstName));
        break;
      case "Created Date":
        sorted.sort(
          (a, b) => new Date(b.createdDate) - new Date(a.createdDate),
        );
        break;
      case "Last Updated":
        sorted.sort((a, b) => new Date(b.lastLogin) - new Date(a.lastLogin));
        break;
      default:
        break;
    }
    return sorted;
  }, [filteredUsers, sortOption]);

  return sortedUsers;
};

export default Sort;
