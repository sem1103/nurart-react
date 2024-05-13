
import { create } from 'zustand';
import createWithDevtools from './store';

const useLoaderSlice = createWithDevtools(create(
    set => ({
        loader: true,
        changeLoader: (loader) => set({ loader })
    })
))

export default useLoaderSlice;