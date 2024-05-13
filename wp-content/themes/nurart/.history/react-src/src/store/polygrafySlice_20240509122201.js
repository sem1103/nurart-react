
import createWithDevtools from './store';
import useLoaderSlice from './loaderSlice';
import { create } from 'zustand';



const usePolygrafySlice = createWithDevtools(create(
    (set) => ({
        items: [],
        fetchData: async () => {
            useLoaderSlice.getState().changeLoader(true);
            try {
                const data = await fetch('http://localhost/wp-json/wp/v2/poliqrafiya_items/').then(res => res.json());
                const items = await Promise.all(data[0].acf.items.map(async item => {
                    const imgData = await fetch('http://localhost/wp-json/wp/v2/media/' + item.img).then(res => res.json())
                    item.img = imgData.source_url;
                    return item;
                }));
    
                set({items});
                useLoaderSlice.getState().changeLoader(false)
            } catch (error) {
                console.error('Ошибка:', error);
            }
        }
    })
))

export default usePolygrafySlice;