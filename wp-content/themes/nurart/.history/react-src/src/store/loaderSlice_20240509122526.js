
//useLoaderSlice.js

import { create } from 'zustand';
import { devtools } from 'zustand-devtools';

const useLoaderSlice = create(
   devtools(
    set => ({
        loader: true,
        changeLoader: (loader) => set({ loader })
    })
   )
)

export default useLoaderSlice;