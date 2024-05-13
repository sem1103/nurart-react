import create from 'zustand';

const useLoaderSlice = create((set) => ({
    loader: false,
    changeLoader: (loader) => set({ loader })
}))

export default useLoaderSlice;