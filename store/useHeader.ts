import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface PDA_Type {
    currentPage: string;
    setCurrentPage: (value: string) => void;
}

const useHeader = create<PDA_Type>()(
    immer((set) => ({
        currentPage: "/",
        setCurrentPage: (value) =>
            set((state) => {
                state.currentPage = value;
            }),
    }))
);

export default useHeader;
