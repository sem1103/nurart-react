

import useLoaderSlice from './loaderSlice';
import { create } from 'zustand';
import { devtools } from 'zustand-devtools';
import useAzerbaijaniNormalization from '../hooks/useAzetoEng';



const useDataSlice = create(
    devtools(
        (set,get) => ({
            polygraphyItems: [],
            polygraphyAllItems: [],
            stampItems: [],
            stampAllItems:[],
            fetchData: async (mainUrl, imgUrl) => {
                try {
                    useLoaderSlice.getState().changeLoader(true);
                    const data = await fetch(mainUrl).then(res => res.json());
                    const items = await Promise.all(data[0].acf.items.map(async item => {
                        const imgData = await fetch(imgUrl + item.img).then(res => res.json());
                        item.exampleStamb = item.exampleStamb && await fetch(imgUrl + item.exampleStamb).then(res => res.json().source_url);
                        item.boxImg = item.boxImg && await fetch(imgUrl + item.boxImg).then(res => res.json().source_url);
                        item.img = imgData.source_url;
                        return item;
                    }));
                    switch (true) {
                        case mainUrl.includes('polyqrafiya'):
                            set(state => ({ polygraphyItems: items, polygraphyAllItems: items }));
                            break;
                        case mainUrl.includes('stamp'):
                            set(state => ({ stampItems: items, stampAllItems: items }));
                            break;
                        // Добавьте другие кейсы по мере необходимости
                        default:
                            break;
                    }
                    useLoaderSlice.getState().changeLoader(false);
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

export default useDataSlice;