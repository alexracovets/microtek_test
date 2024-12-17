import { Object3D } from "three";
import { create } from "zustand";

interface VideoStoreState {
    video: HTMLVideoElement;
    model: Object3D | null;
    setModel: (model: Object3D) => void;
}

export const useContentStore = create<VideoStoreState>((set) => ({
    video: Object.assign(document.createElement("video"), {
        src: "/drei.mp4",
        crossOrigin: "Anonymous",
        loop: true,
        muted: true,
    }),
    model: null,
    setModel: (model) => set({ model }),
}));