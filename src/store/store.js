import { create } from "zustand";

const useStore = create((set) => ({
  modal: false,
  toggleModal: (bool) => set({ modal: bool }),

  //   bears: 0,
  //   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  //   removeAllBears: () => set({ bears: 0 }),
  //   updateBears: (newBears) => set({ bears: newBears }),
}));

export default useStore;
