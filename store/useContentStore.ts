import { create } from "zustand";

interface VideoStoreState {
    video: HTMLVideoElement;
}

export const useContentStore = create<VideoStoreState>(() => ({
    video: Object.assign(document.createElement("video"), {
        src: "/drei.mp4",
        crossOrigin: "Anonymous",
        loop: true,
        muted: true,
    }),
}));