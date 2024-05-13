

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
                promo: [],
                vinil: []
            },
            allItems: {
                polygraphy: [],
                shtamp: [],
                plastic: [],
                promo: [],
                vinil: []
            },
            filters: {
                polygraphy: [],
                shtamp: [],
                plastic: [],
                promo: [],
                vinil: []
            },
            activeCategory: '',
            activeCategoryLabel: '',
            favoriteItems: [],
            fetchData: async (mainUrl) => {
                try {
                    let differentItems = [];
                    set(() => ({activeCategoryLabel: ''}))
                    useLoaderSlice.getState().changeLoader(true);
                    const data = await fetch(mainUrl).then(res => res.json());
                    const items = await Promise.all(data[0].acf.items.map(async item => {
                        item.boxImg = data[0].acf.boxImg;
                        item.favorite = get().favoriteItems.some(elem => elem.img == item.img);
                        return item;
                    }));
                    console.log(data);
                    const paintItem = data[0].acf.paint ? await Promise.all(data[0].acf.paint.map(async item => {
                        return item;
                    })) : [];

                    differentItems = [].concat(items,paintItem);
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
                        case mainUrl.includes('promo'):
                                type = 'promo';
                            break;
                        case mainUrl.includes('vinil'):
                                type = 'vinil';
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
                if(!value) {
                    get().filterByCategory(get().activeCategory, type)
                    return;
                } 
                set(
                    state => ({
                        items: {
                            ...state.items,
                            [type]: state.allItems[type].filter((item) => {
                                
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
                if(!value) {
                    get().filterByCategory(get().activeCategory, type)       
                    return;
                } 

                set(
                    state => ({
                        items: {
                            ...state.items,
                            
                        [type]: state.allItems[type].filter(item => {
                            if( item.productName.toLowerCase().includes(value.toLowerCase())){
                                if(get().activeCategory) {
                                    return get().activeCategory == item.categories[0].value ? item : false;
                                } else return item
                            }
                        })
                        }
                    })
                )
            },
            resetItems: () =>{
                set(state => ({items : state.allItems}))
                get().setInputValue('')
            },
            setInputValue: (value)=>{
                set(state => ({searchInput: value}))
            },
            setActiveCategoryLabel: label => {
                set(() => ({activeCategoryLabel: label}))
            },
            addFavoriteItem: (item) =>{
                localStorage.setItem('favorites', [...item, JSON.stringify(item)]);
            },
            removeFavoriteItem: (item) => {
                set(state => ({favoriteItems:  JSON.parse(localStorage.getItem('favorites')).filter(elem =>  item.img != elem.img)}));
                get().addFavoriteItem(get().favoriteItems)
            },
            getFavoriteItems: () => {
                set(state => ({favoriteItems:  JSON.parse(localStorage.getItem('favorites'))}))
            }
        })
    )
)

export default useDataSlice;