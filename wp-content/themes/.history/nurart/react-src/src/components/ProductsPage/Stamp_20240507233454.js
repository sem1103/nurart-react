
import { Helmet } from 'react-helmet'
import Contact from '../Contact/Contact'
import s from './ProductsPage.module.css'
import FilterCategory from './FilterCategory'
import { useTranslation } from 'react-i18next'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import i18next from 'i18next'


export default function Stamp() {
    const { t } = useTranslation();

    const filterCategory = {
        businessCard: t('businessCard'),
        booklet: t('booklet'),
        flayer: t('flayer')
    };


    const [items, setItems] = useState([]);
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://localhost/wp-json/wp/v2/shtamp_items/');
                const data = await response.json();
                const itemsWithImages = await Promise.all(data[0].acf.items.map(async item => {
                    const imgData = await fetch('https://localhost/wp-json/wp/v2/media/' + item.img).then(res => res.json())
                    item.img = imgData.source_url;
                    return item;
                }));
                console.log(data);

                setItems(itemsWithImages);
                setLoader(false)
            } catch (error) {
                console.error('Ошибка:', error);
            }
        };

        fetchData();
    }, []);

    return (

        <>
            <Helmet>
                <title>Poliqrafiya işləri,Poliqrafiya isleri,cap xidmetleri </title>
                <meta name="description" content="NurArt  Azərbaycanın ən böyük Poliqrafiya şirkətləri arasındadı və Bütün növ çap və dizayn xidmətlərini təklif etməkdədir. " />
                <meta name="keywords" content="Təqvimlər,Teqvim,Kalendar,çap,print" />
            </Helmet>


            <div className={`container ${s.products__page}`}>
                <h1>{t('productPageTitle')}</h1>
                <FilterCategory filterCategory={filterCategory} />

                <div className={`${s.stamp__carts} ${s.carts__wrapper}`}>

                    {
                        items.map(item => {
                            return <div className={s.cart}>
                                <button class={s.favorite__add}></button>
                                <div className={s.cart__name}>
                                    {item.haveBox && <img src="/public/assets/img/stamp/box.svg" alt="hav box" />}

                                    <div>
                                        <h3>{t('stambId')}: <span className={s.prod__name}>{item.stambId}</span></h3>
                                        <p>{t('stambSize')}: <span className={s.prod__size}>{item.stambSize}</span></p>
                                    </div>
                                </div>

                                <div className={s.product}>
                                    <img src={item.img} alt="" className={s.prod__img} />
                                    <div className={s.prod__desc}>
                                        <h5>{t('changePillows')}</h5>
                                        <ul className={s.pillows}>
                                            {
                                                i18next.language == 'az' ? item.changePillowsAz.map(elem => <li><span>{elem.pillow}</span></li>)
                                                :
                                                item.changePillowsRu.map(elem => <li><span>{elem.pillow}</span></li>)
                                            }
                                        </ul>
                                        <img src="/public/assets/img/stamp/examples/4727.png" alt="" className={s.example} />
                                    </div>
                                </div>

                                <div class={s.cart__btns}>
                                    <button>Səbətə at</button><button>Sifariş et</button>
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