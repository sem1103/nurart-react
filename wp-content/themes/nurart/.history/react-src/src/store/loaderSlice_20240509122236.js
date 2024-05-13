
import { create } from 'zustand';
import createWithDevtools from './store';
import { devtools } from 'zustand-devtools';

const useLoaderSlice = devtools(create(
    set => ({
        loader: true,
        changeLoader: (loader) => set({ loader })
    })
))

export default useLoaderSlice;