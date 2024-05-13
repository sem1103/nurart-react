import create from 'zustand';

const useLoader = create((set) => ({
    loader: false,
    changeLoader: (loader) => set({ loader })
}))

export default useLoader;