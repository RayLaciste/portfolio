import { locations } from "#constants";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const DEFAULT_LOCATION = locations.work;

interface LocationItem {
  id: number;
  name: string;
  icon?: string;
  kind?: string;
  fileType?: string;
  href?: string;
  children?: LocationItem[];
  windowPosition?: string;
  position?: string;
}

interface LocationStore {
  activeLocation: LocationItem;
  setActiveLocation: (location: LocationItem | undefined) => void;
  resetActiveLocation: () => void;
}

const useLocationStore = create<LocationStore>()(
  immer((set) => ({
    activeLocation: DEFAULT_LOCATION,

    setActiveLocation: (location) =>
      set((state) => {
        if (location === undefined) return;
        state.activeLocation = location;
      }),

    resetActiveLocation: () =>
      set((state) => {
        state.activeLocation = DEFAULT_LOCATION;
      }),
  })),
);

export default useLocationStore;
