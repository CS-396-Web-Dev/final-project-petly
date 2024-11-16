import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

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

export const useModalStore = create(
  logger((set) => ({
    isModalOpen: false,
    openModal: () => set({ isModalOpen: true }),
    closeModal: () => set({ isModalOpen: false }),
    toggleModal: () => set((state) => ({ isModalOpen: !state.isModalOpen })),
  }))
);

export const usePetStore = create(
  logger(
    persist(
      (set) => ({
        stage: "Hatch",
        evolve: () => set(() => ({ stage: "Adult" })),
      }),
      {
        name: "petly-storage",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);
