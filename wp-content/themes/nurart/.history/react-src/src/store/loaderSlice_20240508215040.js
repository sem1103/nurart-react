import {createStor} from 'zustand';

const useLoaderSlice = createStor((set) => ({
    loader: true,
    changeLoader: (loader) => set({ loader })
}))

export default useLoaderSlice;