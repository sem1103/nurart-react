import {createStor} from 'zustand';

const usePolygrafySlice = createStor(state => ({
    items: [],
    fetchData: async () => {
        try {
            changeLoader(true)
            const response = await fetch('http://localhost/wp-json/wp/v2/poliqrafiya_items/');
            const data = await response.json();
            const items = await Promise.all(data[0].acf.items.map(async item => {
                const imgData = await fetch('http://localhost/wp-json/wp/v2/media/' + item.img).then(res => res.json())
                item.img = imgData.source_url;
                return item;
            }));
            console.log(data);

            set({items});
            changeLoader(false)
        } catch (error) {
            console.error('Ошибка:', error);
        }
    }
}))