import create from 'zustand';

const useLoader = create((set) => {
    loader: false,
    changeState: (loader) => set({ loader })
})

export default useLoader;