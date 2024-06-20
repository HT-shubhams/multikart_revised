import { create } from "zustand";

const useUserStore = create((set) => ({
  users: [
    {
      id: 1,
      photo: "https://via.placeholder.com/100",
      firstName: "Rowan",
      lastName: "Torres",
      email: "rowan.torres@gmail.com",
      phone: "123-456-7890",
      lastLogin: "2024-06-01",
      createdDate: "2023-01-01",
      role: "User",
      status: "Active",
    },
    {
      id: 2,
      photo: "https://via.placeholder.com/100",
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@example.com",
      phone: "234-567-8901",
      lastLogin: "2024-05-30",
      createdDate: "2023-02-01",
      role: "Admin",
      status: "Inactive",
    },
    {
      id: 3,
      photo: "https://via.placeholder.com/100",
      firstName: "Alice",
      lastName: "Johnson",
      email: "alice.johnson@example.com",
      phone: "345-678-9012",
      lastLogin: "2024-06-02",
      createdDate: "2023-03-01",
      role: "User",
      status: "Active",
    },
    {
      id: 4,
      photo: "https://via.placeholder.com/100",
      firstName: "Bob",
      lastName: "Brown",
      email: "bob.brown@example.com",
      phone: "456-789-0123",
      lastLogin: "2024-05-29",
      createdDate: "2023-04-01",
      role: "User",
      status: "Inactive",
    },
    {
      id: 5,
      photo: "https://via.placeholder.com/100",
      firstName: "Charlie",
      lastName: "Davis",
      email: "charlie.davis@example.com",
      phone: "567-890-1234",
      lastLogin: "2024-06-01",
      createdDate: "2023-05-01",
      role: "Admin",
      status: "Active",
    },
    {
      id: 6,
      photo: "https://via.placeholder.com/100",
      firstName: "David",
      lastName: "Wilson",
      email: "david.wilson@example.com",
      phone: "678-901-2345",
      lastLogin: "2024-05-28",
      createdDate: "2023-06-01",
      role: "User",
      status: "Inactive",
    },
    {
      id: 7,
      photo: "https://via.placeholder.com/100",
      firstName: "Eve",
      lastName: "Clark",
      email: "eve.clark@example.com",
      phone: "789-012-3456",
      lastLogin: "2024-06-01",
      createdDate: "2023-07-01",
      role: "Admin",
      status: "Active",
    },
    {
      id: 8,
      photo: "https://via.placeholder.com/100",
      firstName: "Frank",
      lastName: "Martinez",
      email: "frank.martinez@dexample.com",
      phone: "890-123-4567",
      lastLogin: "2024-05-31",
      createdDate: "2023-08-01",
      role: "User",
      status: "Inactive",
    },
    {
      id: 9,
      photo: "https://via.placeholder.com/100",
      firstName: "Grace",
      lastName: "Rodriguez",
      email: "grace.rodriguez@example.com",
      phone: "901-234-5678",
      lastLogin: "2024-06-02",
      createdDate: "2023-09-01",
      role: "Admin",
      status: "Active",
    },
    {
      id: 10,
      photo: "https://via.placeholder.com/100",
      firstName: "Hank",
      lastName: "Lewis",
      email: "hank.lewis@example.com",
      phone: "012-345-6789",
      lastLogin: "2024-05-30",
      createdDate: "2023-10-01",
      role: "User",
      status: "Inactive",
    },
  ],
  lastUserId: 10,

  setUsers: (users) => set({ users }),

  addUser: (newUser) =>
    set((state) => {
      const updatedUsers = [...state.users, newUser];
      const updatedLastUserId = newUser.id;
      return { users: updatedUsers, lastUserId: updatedLastUserId };
    }),

  updateUser: (userId, updatedUser) =>
    set((state) => ({
      users: state.users.map((user) =>
        user.id === userId ? { ...user, ...updatedUser } : user,
      ),
    })),

  deleteUser: (userId) =>
    set((state) => ({
      users: state.users.filter((user) => user.id !== userId),
    })),

  updateUserStatus: (userId, status) =>
    set((state) => ({
      users: state.users.map((user) =>
        user.id === userId ? { ...user, status } : user,
      ),
    })),
}));

export default useUserStore;
