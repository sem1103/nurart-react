
import { devtools } from '@pavlobu/zustand/middleware'
import create from 'zustand';

const useLoaderSlice = create(set => ({
    loader: true,
    changeLoader: (loader) => set({ loader })
}))

export default useLoaderSlice;