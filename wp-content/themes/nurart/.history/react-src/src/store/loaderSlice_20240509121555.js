
import createWithDevtools from './store';

const useLoaderSlice = createWithDevtools(set => ({
    loader: true,
    changeLoader: (loader) => set({ loader })
}))

export default useLoaderSlice;