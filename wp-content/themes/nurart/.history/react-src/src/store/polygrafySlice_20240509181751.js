

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
                try {
                    useLoaderSlice.getState().changeLoader(true);
                    const data = await fetch('localhost/wp-json/wp/v2/poliqrafiya_items/').then(res => res.json());
                    const items = await Promise.all(data[0].acf.items.map(async item => {
                        const imgData = await fetch('localhost/wp-json/wp/v2/media/' + item.img).then(res => res.json());
                        item.exampleStamb = item.exampleStamb && await fetch('localhost/wp-json/wp/v2/media/' + item.exampleStamb).then(res => res.json().source_url);
                        item.boxImg = item.boxImg && await fetch('localhost/wp-json/wp/v2/media/' + item.boxImg).then(res => res.json().source_url);
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

                            return normalizeAzerbaijani(item.productAz.productName).startsWith(value.toLowerCase());
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