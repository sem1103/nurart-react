

import useLoaderSlice from './loaderSlice';
import { create } from 'zustand';
import { devtools } from 'zustand-devtools';
import useAzerbaijaniNormalization from '../hooks/useAzetoEng';



const usePolygrafySlice = create(
    devtools(
        (set) => ({
            items: [],
            allItems: [],
            fetchData: async () => {
                useLoaderSlice.getState().changeLoader(true);
                try {
                    const data = await fetch('http://192.168.1.65/wp-json/wp/v2/poliqrafiya_items/').then(res => res.json());
                    const items = await Promise.all(data[0].acf.items.map(async item => {
                        const imgData = await fetch('http://192.168.1.65/wp-json/wp/v2/media/' + item.img).then(res => res.json())
                        item.img = imgData.source_url;
                        return item;
                    }));
        
                    set({items});
                    set(state => ({allItems : state.items}));
                    useLoaderSlice.getState().changeLoader(false)
                } catch (error) {
                    console.error('Ошибка:', error);
                }
            },
            filterByName : value => {
                set(
                    state => ({
                        items: state.allItems.filter(item => {
                            if(!value) return state.allItems
                            const normalizeAzerbaijani = useAzerbaijaniNormalization();

                            return item.productAz.normalizeAzerbaijani(productName.startsWith(value));
                        })
                    })
                )
            },
            resetItems: () =>{
                set(state => ({items : state.allItems}))
            }
        })
    )
)

export default usePolygrafySlice;