

import useLoaderSlice from './loaderSlice';
import { create } from 'zustand';
import { devtools } from 'zustand-devtools';
import useAzerbaijaniNormalization from '../hooks/useAzetoEng';
import i18next from 'i18next';


const useDataSlice = create(
    devtools(
        (set,get) => ({
            items: {
                polygraphy: [],
                shtamp: [],
                plastic: [],
            },
            allItems: {
                polygraphy: [],
                shtamp: [],
                plastic: [],
            },
            fetchData: async (mainUrl, imgUrl, acf) => {
                try {
                    useLoaderSlice.getState().changeLoader(true);
                    const data = await fetch(mainUrl).then(res => res.json());
                    const acfData = await fetch(acf).then(res => res.json());
                    const items = await Promise.all(data[0].acf.items.map(async item => {
                        item.img = await fetch(imgUrl + item.img).then(res => res.json()).then(res => res.source_url);;
                        item.exampleStamb = item.exampleStamb && await fetch(imgUrl + item.exampleStamb).then(res => res.json()).then(res => res.source_url);
                        item.boxImg = data[0].acf.boxImg && await fetch(imgUrl + data[0].acf.boxImg).then(res => res.json()).then(res => res.source_url);
                        return item;
                    }));
                    let type;
                    if (mainUrl.includes('poliqrafiya')) {
                        type = 'polygraphy';
                    } else if (mainUrl.includes('shtamp')) {
                        type = 'shtamp';
                    } else if (mainUrl.includes('plastic')) {
                        type = 'plastic';
                    }
                    set(state => ({
                        items: { ...state.items, [type]: items },
                        allItems: { ...state.allItems, [type]: items }
                    }));
                    useLoaderSlice.getState().changeLoader(false);
                    console.log(acfData[0]);
                } catch (error) {
                    console.error('Ошибка:', error);
                }
            },
            filterByName : (value, type) => {
                set(
                    state => ({
                        items: {
                            ...state.items,
                            [type]: state.allItems[type].filter(item => {
                                if(!value) return state.allItems[type];
                                const normalizeAzerbaijani = useAzerbaijaniNormalization();
                                return i18next.language == 'az' ? normalizeAzerbaijani(item.productAz.productName).includes(value.toLowerCase()) : item.productRu.productName.toLowerCase().includes(value.toLowerCase());
                            })
                        }
                    })
                )
            },
            filterByCode : value => {
                set(
                    state => ({
                        items: {
                            ...state.items,
                            
                        shtamp: state.allItems.shtamp.filter(item => {
                            if(!value) return state.allItems.shtamp;
                            return item.productName.includes(value);
                        })
                        }
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