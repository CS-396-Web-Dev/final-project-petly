import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { StageType } from "@/helper/type";

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
        petName: undefined,
        petType: undefined,

        petHappiness: undefined,

        petHungriness: undefined,

        petTraining: undefined,

        petStage: undefined,
        evolve: () =>
          set(() => ({
            petStage: StageType.ADULT,
            petHappiness: 100,
            petHungriness: 100,
            petTraining: 100,
          })),

        petExp: undefined,

        petLevel: undefined,
        levelUp: () =>
          set((state) => ({
            petLevel: (state.petLevel || 0) + 1,
          })),

        initPet: (petName, petType) =>
          set(() => ({
            petName,
            petType,
            petStage: StageType.HATCH,
            petLevel: 1,
          })),
      }),
      {
        name: "petly-storage",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);
