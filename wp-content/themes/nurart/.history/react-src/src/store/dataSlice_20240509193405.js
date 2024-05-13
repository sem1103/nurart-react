

import useLoaderSlice from './loaderSlice';
import { create } from 'zustand';
import { devtools } from 'zustand-devtools';
import useAzerbaijaniNormalization from '../hooks/useAzetoEng';



const useDataSlice = create(
    devtools(
        (set,get) => ({
            polygraphyItems: [],
            polygraphyAllItems: [],
            shtampItems: [],
            shtampAllItems:[],
            fetchData: async (mainUrl, imgUrl) => {
                try {
                    useLoaderSlice.getState().changeLoader(true);
                    const data = await fetch(mainUrl).then(res => res.json());
                    const items = await Promise.all(data[0].acf.items.map(async item => {
                        item.img = await fetch(imgUrl + item.img).then(res => res.json()).then(res => res.source_url);;
                        item.exampleStamb = item.exampleStamb && await fetch(imgUrl + item.exampleStamb).then(res => res.json()).then(res => res.source_url);
                        item.boxImg = data[0].acf.boxImg && await fetch(imgUrl + data[0].acf.boxImg).then(res => res.json()).then(res => res.source_url);
                        return item;
                    }));
                    console.log(data);
                    switch (true) {
                        case mainUrl.includes('poliqrafiya'):
                            set(state => ({ polygraphyItems: items, polygraphyAllItems: items }));
                            console.log(1);
                            break;
                        case mainUrl.includes('shtamp'):
                            set(state => ({ shtampItems: items, shtampAllItems: items }));
                            break;
                        default:
                            break;
                    }
                    useLoaderSlice.getState().changeLoader(false);
                } catch (error) {
                    console.error('Ошибка:', error);
                }
            },
            filterByName : value => {
                if(!value) return state.polygraphyAllItems
                set(
                    state => ({
                        polygraphyItems: state.polygraphyAllItems.filter(item => {
                            const normalizeAzerbaijani = useAzerbaijaniNormalization();
                            return normalizeAzerbaijani(item.productAz.productName).includes(value.toLowerCase());
                        })
                    })
                )
            },
            filterByCode : value => {
                if(!value) return state.polygraphyAllItems;
                set(
                    state => ({
                        
                        shtampItems: state.shtampAllItems.filter(item => item.productName.includes(value))
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