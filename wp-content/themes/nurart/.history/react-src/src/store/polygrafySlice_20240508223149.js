import {createStore} from 'zustand';
// import useLoaderSlice from './loaderSlice';


const usePolygrafySlice = createStore((set, get) => ({
    items: [],
    async fetchData ()  {
        try {
            // const changeLoader  = useLoaderSlice.getState().changeLoader;
            // changeLoader(true)
            const response = await fetch('http://localhost/wp-json/wp/v2/poliqrafiya_items/');
            const data = await response.json();
            const items = await Promise.all(data[0].acf.items.map(async item => {
                const imgData = await fetch('http://localhost/wp-json/wp/v2/media/' + item.img).then(res => res.json())
                item.img = imgData.source_url;
                return item;
            }));

            set({items});
            // changeLoader(false)
        } catch (error) {
            console.error('Ошибка:', error);
        }
    }
}))

export default usePolygrafySlice;