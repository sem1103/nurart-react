import {createStore} from 'zustand';

const useLoaderSlice = createStore(set => ({
    loader: true,
    changeLoader: (loader) => set({ loader })
}))

export default useLoaderSlice;