

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
            activeCategoryLabel: '',
            fetchData: async (mainUrl, imgUrl) => {
                try {
                    let differentItems = [];
                    useLoaderSlice.getState().changeLoader(true);
                    const data = await fetch(mainUrl).then(res => res.json());
                    const items = await Promise.all(data[0].acf.items.map(async item => {
                        item.img = await fetch(imgUrl + item.img).then(res => res.json()).then(res => res.source_url);
                        item.exampleStamb = item.exampleStamb && await fetch(imgUrl + item.exampleStamb).then(res => res.json()).then(res => res.source_url);
                        item.boxImg = data[0].acf.boxImg && await fetch(imgUrl + data[0].acf.boxImg).then(res => res.json()).then(res => res.source_url);
                        return item;
                    }));

                    const paintItem = data[0].acf.paint ? await Promise.all(data[0].acf.paint.map(async item => {
                        item.img = await fetch(imgUrl + item.img).then(res => res.json()).then(res => res.source_url);
                        return item;
                    })) : [];

                    differentItems = [].concat(items,paintItem)
                    console.log(differentItems);
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

                    set(state => ({
                        items: { ...state.items, [type]: differentItems },
                        allItems: { ...state.allItems, [type]: differentItems },
                        filters: {...state.filters, [type]: data[0].acf.categories != undefined ? data[0].acf.categories : []}
                    }));
                    useLoaderSlice.getState().changeLoader(false);
                } catch (error) {
                    console.error('Ошибка:', error);
                }
            },
            filterByCategory: (category, type, label = get().activeCategoryLabel) => {
                set(() => ({activeCategory : category}));
                get().setActiveCategoryLabel(label);
                get().setInputValue('')
                set(
                    state => ({
                        items : {
                            ...state.items,
                            [type]: state.allItems[type].filter( item => {
                                if(!category) {
                                    return state.allItems[type];
                                }
                                return item.categories[0].value == category;
                            })
                        }
                    }
                    )
                )
            }
            ,
            filterByName : (value, type) => {
               
                set(
                    state => ({
                        items: {
                            ...state.items,
                            [type]: state.allItems[type].filter((item) => {
                                if(!value) return get().activeCategory == item.categories[0].value ;
                                const normalizeAzerbaijani = useAzerbaijaniNormalization();
                                if(i18next.language == 'az') {
                                    if(normalizeAzerbaijani(item.productAz.productName).includes(value.toLowerCase())){
                                        if(get().activeCategory) {
                                            return get().activeCategory == item.categories[0].value ? item : false;
                                        } else return item
                                    }
                                }
                                else {
                                    if(item.productRu.productName.toLowerCase().includes(value.toLowerCase())){
                                        if(get().activeCategory) {
                                            return get().activeCategory == item.categories[0].value ? item : false;
                                        } else return item
                                    }
                                }
                                
                            })
                        }
                    })
                )

            },
            filterByCode : (value, type) => {
                let howItem = !get().activeCategory ? 'allItems' : 'items';
                set(
                    state => ({
                        items: {
                            ...state.items,
                            
                        [type]: state[howItem][type].filter(item => {
                            if(!value) return get().activeCategory == item.categories[0].value ;
                            if(get().activeCategory) {
                                return get().activeCategory == item.categories[0].value ? item : false;
                            } else return item
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
            },
            setActiveCategoryLabel: label => {
                set(() => ({activeCategoryLabel: label}))
            }
        })
    )
)

export default useDataSlice;