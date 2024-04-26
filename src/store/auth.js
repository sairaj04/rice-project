import { create } from "zustand";

const userStore = create((set) => ({
  user: null,
  setUser: (user) => set((state) => ({ user })),
}));

export default userStore;
