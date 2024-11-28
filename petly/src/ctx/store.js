import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { PetType } from "@/helper/petType";

const logger = (config) => (set, get, api) =>
  config(
    (args) => {
      if (process.env.NODE_ENV === "development") {
        console.log("prevState:", get());
      }
      set(args);
      if (process.env.NODE_ENV === "development") {
        console.log("nextState:", get());
      }
    },
    get,
    api
  );

export const useModalStore = create((set) => ({
  modals: {
    petProfile: false,
    petAction: false,
    homeOptions: false,
  },
  openModal: (name) =>
    set((state) => ({ modals: { ...state.modals, [name]: true } })),
  closeModal: (name) =>
    set((state) => ({ modals: { ...state.modals, [name]: false } })),
  toggleModal: (name) =>
    set((state) => ({
      modals: {
        ...state.modals,
        [name]: !state.modals[name],
      },
    })),
}));

export const usePetStore = create(
  logger(
    persist(
      (set) => ({
        stage: "",
        petName: "",
        setPetName: (petName) => set({ petName }),
        petType: null,
        setPetType: (petType) => set({ petType }),
        evolve: () => set(() => ({ stage: "Adult" })),
      }),
      {
        name: "petly-storage",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);
