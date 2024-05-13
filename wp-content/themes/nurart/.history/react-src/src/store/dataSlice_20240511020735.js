

import useLoaderSlice from './loaderSlice';
import { create } from 'zustand';
import { devtools } from 'zustand-devtools';
import useAzerbaijaniNormalization from '../hooks/useAzetoEng';
import i18next from 'i18next';


const useDataSlice = create(
    devtools(
        (set,get) => ({
            searchInput: '',
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
            filters: {
                polygraphy: [],
                shtamp: [],
                plastic: [],
            },
            activeCategory: '',
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
                    let type;
                  

                    switch (true) {
                        case mainUrl.includes('poliqrafiya'):
                            type = 'polygraphy';
                            break;
                        case mainUrl.includes('shtamp'):
                            type = 'shtamp';
                            break;
                        case mainUrl.includes('plastic'):
                            type = 'plastic';
                            break;
                        default:
                        break;
                    }  

                    console.log(items);

                    set(state => ({
                        items: { ...state.items, [type]: items },
                        allItems: { ...state.allItems, [type]: items },
                        filters: {...state.filters, [type]: data[0].acf.categories}
                    }));
                    useLoaderSlice.getState().changeLoader(false);
                } catch (error) {
                    console.error('Ошибка:', error);
                }
            },
            filterByCategory: (category, type) => {
                set(() => ({activeCategory : category}));
                get().setInputValue('');
                set(
                    
                    state => ({
                        items : {
                            ...state.items,
                            [type]: state.allItems[type].filter( item => {
                                if(category == 'all') {
                                    state.activeCategory = '';
                                    return state.allItems[type];
                                }
                                return item.categories[0].value == category;
                            })
                        },
                       
                    }
                    
                    )
                )
            }
            ,
            filterByName : (value, type) => {
                let howItem = !get().activeCategory ? 'allItems' : 'items';
                if(howItem == 'items') get().filterByCategory(get().activeCategory, type);
                set(
                    state => ({
                        items: {
                            ...state.items,
                            [type]: state[howItem][type].filter((item, ind) => {
                                if(!value) {
                                    console.log(state.allItems[type][ind]);
                                    return state.allItems[type][ind]
                                };
                                const normalizeAzerbaijani = useAzerbaijaniNormalization();
                                return i18next.language == 'az' ? 
                                normalizeAzerbaijani(item.productAz.productName).includes(value.toLowerCase())
                                : 
                                item.productRu.productName.toLowerCase().includes(value.toLowerCase())
                            })
                        }
                    })
                )

            },
            filterByCode : (value, type) => {
                let howItem = !get().activeCategory ? 'allItems' : 'items';
                if(howItem == 'items') get().filterByCategory(get().activeCategory, type);
                set(
                    state => ({
                        items: {
                            ...state.items,
                            
                            [type]: state[howItem][type].filter.filter(item => {
                            if(!value) return state.allItems.shtamp;
                            return item.productName.includes(value);
                        })
                        }
                    })
                )
            },
            resetItems: () =>{
                set(state => ({items : state.allItems}))
            },
            setInputValue: (value)=>{
                set(state => ({searchInput: value}))
            }
        })
    )
)

export default useDataSlice;