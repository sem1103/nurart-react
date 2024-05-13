

import useLoaderSlice from './loaderSlice';
import { create } from 'zustand';
import { devtools } from 'zustand-devtools';
import useAzerbaijaniNormalization from '../hooks/useAzetoEng';
import i18next from 'i18next';


const useDataSlice = create(
    devtools(
        (set,get) => ({
            polygraphyItems: [],
            polygraphyAllItems: [],
            shtampItems: [],
            shtampAllItems:[],
            plasticItems: [],
            plasticAllItems:[],
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
                    switch (true) {
                        case mainUrl.includes('poliqrafiya'):
                            set(() => ({ polygraphyItems: items, polygraphyAllItems: items }));
                            break;
                        case mainUrl.includes('shtamp'):
                            set(() => ({ shtampItems: items, shtampAllItems: items }));
                            break;
                            case mainUrl.includes('plastic'):
                            set(() => ({ plasticItems: items, plasticAllItems: items }));
                            break;
                        default:
                            break;
                    }
                    useLoaderSlice.getState().changeLoader(false);
                } catch (error) {
                    console.error('Ошибка:', error);
                }
            },
            filterByName : (value, items) => {
                set(
                    state => ({
                        polygraphyItems: state.polygraphyAllItems.filter(item => {
                            if(!value) return state.polygraphyAllItems;
                            const normalizeAzerbaijani = useAzerbaijaniNormalization();
                            console.log(i18next.language);
                            console.log(value.toLowerCase());
                            console.log(item.productRu.productName);
                            console.log(item.productRu.productName.includes('ка'));
                            return i18next.language == 'az' ? normalizeAzerbaijani(item.productAz.productName).includes(value.toLowerCase()) : item.productRu.productName.includes(value.toLowerCase());
                        })
                    })
                )
            },
            filterByCode : value => {
                set(
                    state => ({
                        shtampItems: state.shtampAllItems.filter(item => {
                            if(!value) return state.polygraphyAllItems;
                            return item.productName.includes(value);
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