
import { Helmet } from 'react-helmet'
import Contact from '../Contact/Contact'
import s from './ProductsPage.module.css'
import FilterCategory from './FilterCategory'
import { useTranslation } from 'react-i18next'
import React from 'react';
import { useEffect } from 'react'
import { useState } from 'react'


export default function Polygraphy() {
    const { t } = useTranslation();

    const filterCategory = {
        businessCard: t('businessCard'),
        booklet: t('booklet'),
        flayer: t('flayer')
    };


    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://localhost/wp-json/wp/v2/poliqrafiya_items/');
                const data = await response.json();
                const itemsWithImages = await Promise.all(data[0].acf.items.map(async item => {
                    const imgResponse = await fetch('https://localhost/wp-json/wp/v2/media/' + item.img);
                    const imgData = await imgResponse.json();
                    item.img = imgData.source_url;
                    return item;
                }));
                setItems(itemsWithImages)
                colsole.log(items)
            } catch (error) {
                console.error('Ошибка:', error);
            }
        };

        fetchData();
    }, []);

    console.log(items);

    return (

        <>
            <Helmet>
                <title>Poliqrafiya işləri,Poliqrafiya isleri,cap xidmetleri </title>
                <meta name="description" content="NurArt  Azərbaycanın ən böyük Poliqrafiya şirkətləri arasındadı və Bütün növ çap və dizayn xidmətlərini təklif etməkdədir. " />
                <meta name="keywords" content="Təqvimlər,Teqvim,Kalendar,çap,print" />
            </Helmet>


            <div className={`container ${s.products__page}`}>
                <h1>Məhsullarımız</h1>
                <FilterCategory filterCategory={filterCategory} />

                <div className={`${s.polygraphy__carts} ${s.carts__wrapper}`}>
                    {
                        items.map(item => {
                          return  <div className={s.cart}>
                                <button className={s.favorite__add}></button>
                                <img src={item.img} alt="" className={s.cart__img} />
                                <div className={s.cart__desc}>
                                    <h3>{item.productName}</h3>
                                    <p>{item.desc}</p>

                                    <div className={s.cart__btns}>
                                        <button>Səbətə at</button>
                                        <button>Sifariş et</button>
                                    </div>
                                </div>
                            </div>
                        })
                    }










                </div>


            </div>

            <Contact />

        </>
    )
}