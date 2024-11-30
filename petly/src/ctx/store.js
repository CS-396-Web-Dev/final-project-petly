import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { StageType } from "@/helper/type";
import { db } from "@/firebase/config";
import { doc, updateDoc, getDoc, setDoc } from "firebase/firestore";

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
    petRanking: false,
    invite: false,
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
      (set, get) => ({
        petName: "",
        petType: "",
        petHappiness: 100,
        petHungriness: 100,
        petTraining: 0,
        petStage: StageType.HATCH,
        petExp: 0,
        petLevel: 1,

        initPet: (petName, petType) =>
          set(() => ({
            petName,
            petType,
            petStage: StageType.HATCH,
            petLevel: 1,
            petHappiness: 100,
            petHungriness: 100,
            petTraining: 0,
          })),

        evolve: () =>
          set(() => ({
            petStage: StageType.ADULT,
            petHappiness: 100,
            petHungriness: 100,
            petTraining: 100,
          })),

        levelUp: () =>
          set((state) => ({
            petLevel: state.petLevel + 1,
          })),

        updateAttribute: async (uid, attribute, value) => {
          const docRef = doc(db, "users", uid);
          await updateDoc(docRef, { [attribute]: value });
          set(() => ({ [attribute]: value }));
        },

        updateAttributes: async (uid, updates) => {
          const docRef = doc(db, "users", uid);
          await updateDoc(docRef, updates);
          set(() => updates);
        },

        syncWithFirebase: async (uid) => {
          const docRef = doc(db, "users", uid);
          const snapshot = await getDoc(docRef);
          if (snapshot.exists()) {
            const data = snapshot.data();
            set(() => data);
          }
        },
        setPetDetails: (data) =>
          set(() => ({
            ...data,
          })),
          
          resetPetDetails: () =>
            set(() => ({
              petName: "",
              petType: "",
              petHappiness: 100,
              petHungriness: 100,
              petTraining: 0,
              petStage: "HATCH",
              petExp: 0,
              petLevel: 1,
            })),


        saveToFirebase: async (uid) => {
          const petData = get();
          const docRef = doc(db, "users", uid);
          await setDoc(docRef, petData, { merge: true });
        },
      }),
      {
        name: "petly-storage",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);