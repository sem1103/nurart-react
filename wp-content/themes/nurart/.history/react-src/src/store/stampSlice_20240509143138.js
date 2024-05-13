import { create } from "zustand";
import { devtools } from "zustand-devtools";
import useLoaderSlice from "./loaderSlice";


const useStampSlice = create(
    devtools(
        set => ({
            items: [],
            allItems: [],
            fetchData: async () => {
                try {
                    useLoaderSlice.getState().changeLoader(true);
                    const response = await fetch('http://192.168.1.65/wp-json/wp/v2/shtamp_items/');
                    const data = await response.json();
                    let dataBox = await fetch('http://192.168.1.65/wp-json/wp/v2/media/' + data[0].acf.boxImg).then(res => res.json());
                    const items = await Promise.all(data[0].acf.items.map(async item => {
                        const imgData = await fetch('http://192.168.1.65/wp-json/wp/v2/media/' + item.img).then(res => res.json());
                        const exampleStamb = await fetch('http://192.168.1.65/wp-json/wp/v2/media/' + item.exampleStamb).then(res => res.json());
                        item.img = imgData.source_url.replace('localhost', '192.168.1.65');
                        item.exampleStamb = exampleStamb.source_url.replace('localhost', '192.168.1.65');
                        item.boxImg = dataBox.source_url.replace('localhost', '192.168.1.65');
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
                        items: state.allItems.filter(item => item.productName.includes(value))
                    })
                )
            },
            resetItems: () =>{
                set(state => ({items : state.allItems}))
            }
        })
    )
)

export default useStampSlice;
