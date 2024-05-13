
import { devtools } from 'zustand-devtools'
import create from 'zustand';

const useLoaderSlice = create(devtools(
    set => ({
        loader: true,
        changeLoader: (loader) => set({ loader })
    })
))

export default useLoaderSlice;