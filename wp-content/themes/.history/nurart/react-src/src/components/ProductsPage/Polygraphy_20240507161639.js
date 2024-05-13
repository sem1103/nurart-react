
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
    const [imgSrc, setImgSrc] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://localhost/wp-json/wp/v2/poliqrafiya_items/');
                const data = await response.json();
                // const  imgSrc = await fetch('https://localhost/wp-json/wp/v2/media/'+ data[0].acf.imge[0]).then(res => res.json())
                setItems(data[0].acf)
                // console.log(imgSrc.source_url);
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
                                <button className={s.favorite__add}>

                                </button>
                                <img src="/public/assets/img/polygraphy/calender.png" alt="" className={s.cart__img} />
                                <div className={s.cart__desc}>
                                    <h3>{item.productName}</h3>
                                    <p>Təqvim / Bristol / Kardon / Dəri / 21x15
                                        Dayaq 350 qr + laminasiyaVərəqin ölçüsü: 21x15 sm, 250 qr kağız </p>

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