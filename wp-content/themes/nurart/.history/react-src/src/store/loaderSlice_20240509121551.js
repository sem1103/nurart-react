
import { devtools } from 'zustand-devtools'
import create from 'zustand';
import createWithDevtools from './store';

const useLoaderSlice = createWithDevtools(set => ({
    loader: true,
    changeLoader: (loader) => set({ loader })
}))

export default useLoaderSlice;