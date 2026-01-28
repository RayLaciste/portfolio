import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "#constants";

interface WindowData {
  name: string;
  image?: string;
  imageUrl?: string;
  subtitle?: string;
  description?: string[];
}

interface Window {
  isOpen: boolean;
  zIndex: number;
  data: WindowData | null;
}

interface Windows {
  txtfile: Window;
  [key: string]: Window;
}

interface WindowStore {
  windows: Windows;
  nextZIndex: number;
  openWindow: (windowKey: string, data?: WindowData | null) => void;
  closeWindow: (windowKey: string) => void;
  focusWindow: (windowKey: string) => void;
}

const useWindowStore = create<WindowStore>()(
  immer((set) => ({
    windows: WINDOW_CONFIG,
    nextZIndex: INITIAL_Z_INDEX + 1,

    openWindow: (windowKey, data = null) =>
      set((state) => {
        const win = state.windows[windowKey];
        win.isOpen = true;
        win.zIndex = state.nextZIndex;
        state.nextZIndex++;
        win.data = data ?? win.data;
      }),
    closeWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        win.isOpen = false;
        win.zIndex = INITIAL_Z_INDEX;
        win.data = null;
      }),
    focusWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        win.zIndex = state.nextZIndex++;
      }),
  })),
);

export default useWindowStore;
