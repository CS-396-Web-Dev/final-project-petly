import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { StageType } from "@/helper/type";
import { db } from "@/firebase/config";
import { doc, updateDoc, getDoc, setDoc } from "firebase/firestore";
import { AnimationState } from "@/helper/type";

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

export const useActionStore = create(
  logger(
    persist(
      (set, get) => ({
        actions: {},

        setActionCooldown: (actionName, cooldownDuration) => {
          const timestamp = Date.now() + cooldownDuration * 1000;
          set((state) => ({
            actions: {
              ...state.actions,
              [actionName]: timestamp,
            },
          }));
        },

        isActionAvailable: (actionName) => {
          const actions = get().actions;
          const cooldownTimestamp = actions[actionName] || 0;
          return Date.now() >= cooldownTimestamp;
        },

        clearExpiredCooldowns: () => {
          const actions = get().actions;
          const currentTimestamp = Date.now();
          const validActions = Object.entries(actions).reduce(
            (result, [name, ts]) => {
              if (ts > currentTimestamp) result[name] = ts;
              return result;
            },
            {}
          );
          set({ actions: validActions });
        },
      }),
      {
        name: "action-store",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);

export const usePetStore = create(
  logger(
    persist(
      (set, get) => ({
        petName: "",
        petType: "",
        petHappiness: 50,
        petHungriness: 50,
        petTraining: 50,
        petStage: StageType.HATCH,
        petExp: 0,
        petLevel: 1,
        lastUpdated: Date.now(),
        animationState: AnimationState.REGULAR,
        timeoutId: null,

        setAnimationState: (state, duration = 0) =>
          set((current) => {
            if (current.timeoutId) {
              clearTimeout(current.timeoutId);
            }

            let timeoutId = null;
            if (duration > 0) {
              timeoutId = setTimeout(() => {
                set({
                  animationState: AnimationState.REGULAR,
                  timeoutId: null,
                });
              }, duration);
            }

            return { animationState: state, timeoutId };
          }),

        initPet: (petName, petType) =>
          set(() => ({
            petName,
            petType,
            petStage: StageType.HATCH,
            petLevel: 1,
            petHappiness: 50,
            petHungriness: 50,
            petTraining: 50,
            lastUpdated: Date.now(),
            animationState: AnimationState.REGULAR,
          })),

        evolve: () =>
          set(() => ({
            petStage: StageType.ADULT,
          })),

        levelUp: () =>
          set((state) => ({
            petLevel: state.petLevel + 1,
            petExp: 0,
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
            petHappiness: 0,
            petHungriness: 0,
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

        decreaseAttributes: async (uid) => {
          const state = get();
          const now = Date.now();
          const timeElapsed = Math.floor((now - state.lastUpdated) / 60000);

          if (timeElapsed >= 10) {
            const decreaseAmount = Math.floor(timeElapsed / 10) * 8;

            const updatedHappiness = Math.max(
              state.petHappiness - decreaseAmount,
              0
            );
            const updatedHungriness = Math.max(
              state.petHungriness - decreaseAmount,
              0
            );
            const updatedTraining = Math.max(
              state.petTraining - decreaseAmount,
              0
            );

            set({
              petHappiness: updatedHappiness,
              petHungriness: updatedHungriness,
              petTraining: updatedTraining,
              lastUpdated: now,
            });

            const docRef = doc(db, "users", uid);
            await updateDoc(docRef, {
              petHappiness: updatedHappiness,
              petHungriness: updatedHungriness,
              petTraining: updatedTraining,
              lastUpdated: now,
            });
          }
        },
      }),
      {
        name: "petly-storage",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);
