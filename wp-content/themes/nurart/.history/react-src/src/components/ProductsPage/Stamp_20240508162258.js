
import React from 'react'
import { Helmet } from 'react-helmet'
import Contact from '../Contact/Contact'
import s from './ProductsPage.module.css'
import FilterCategory from './FilterCategory'
import { useTranslation } from 'react-i18next'
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
    const [allItems, setAllItems] = useState([]);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://192.168.1.59/wp-json/wp/v2/shtamp_items/');
                const data = await response.json();
                let dataBox = await fetch('http://192.168.1.59/wp-json/wp/v2/media/' + data[0].acf.boxImg).then(res => res.json());
                const itemsWithImages = await Promise.all(data[0].acf.items.map(async item => {
                    const imgData = await fetch('http://192.168.1.59/wp-json/wp/v2/media/' + item.img).then(res => res.json());
                    const exampleStamb = await fetch('http://192.168.1.59/wp-json/wp/v2/media/' + item.exampleStamb).then(res => res.json());
                    item.img = imgData.source_url.replace('localhost', '192.168.1.59');
                    item.exampleStamb = exampleStamb.source_url.replace('localhost', '192.168.1.59');
                    item.boxImg = dataBox.source_url.replace('localhost', '192.168.1.59');
                    return item;
                }));

                setItems(itemsWithImages);
                setAllItems(itemsWithImages);
                setLoader(false)
            } catch (error) {
                console.error('Ошибка:', error);
            }
        };

        fetchData();
    }, []);

    const debounce = (func, delay) => {
        let timerId;
        return function (...args) {
            clearTimeout(timerId);
            const fnCall = () => {
                func.apply(this, args);
                setLoader(false);

            }
            timerId = setTimeout(fnCall, delay);
        };
    };

    const searchByName = () => {
        setLoader(true);


        return debounce(value => {
            setItems(prev => {
                const filteredItems = allItems.filter(item => item.stambId.includes(value));
                return filteredItems;
            })
            console.log(loader);
        }, 1000);
    }



    return (

        <>
            <Helmet>
                <title>Poliqrafiya işləri,Poliqrafiya isleri,cap xidmetleri </title>
                <meta name="description" content="NurArt  Azərbaycanın ən böyük Poliqrafiya şirkətləri arasındadı və Bütün növ çap və dizayn xidmətlərini təklif etməkdədir. " />
                <meta name="keywords" content="Təqvimlər,Teqvim,Kalendar,çap,print" />
            </Helmet>


            <div className={`container ${s.products__page}`}>
                <h1>{t('productPageTitle')}</h1>
                <FilterCategory filterCategory={filterCategory} func={searchByName} placeholder='Məhsulun kodu ilə axtarış...' />

                <div className={`${s.stamp__carts} ${s.carts__wrapper}`}>

                    {
                        loader ? <h3>Loading...</h3>
                            :
                            items.map(item => {
                                return <div className={s.cart}>
                                    <button class={s.favorite__add}></button>
                                    <div className={s.cart__name}>
                                        <img src={item.boxImg} className={s.have__box} alt="hav box" style={{ visibility: item.haveBox ? 'initial' : 'hidden' }} />

                                        <div>
                                            <h3>{t('stambId')}: <span className={s.prod__name}>{item.stambId}</span></h3>
                                            <p>{t('stambSize')}: <span className={s.prod__size}>{item.stambSize}</span></p>
                                        </div>
                                    </div>

                                    <div className={s.product}>
                                        <img src={item.img} alt="" className={s.prod__img} />
                                        <div className={s.prod__desc}>
                                            <div>
                                                <h5>{t('changePillows')}</h5>
                                                <ul className={s.pillows}>
                                                    {
                                                        i18next.language == 'az' ? item.changePillowsAz.map(elem => <li><span>{elem.pillow}</span></li>)
                                                            :
                                                            item.changePillowsRu.map(elem => <li><span>{elem.pillow}</span></li>)
                                                    }
                                                </ul>
                                            </div>
                                            <img src={item.exampleStamb} alt="" className={s.example} />
                                        </div>
                                    </div>

                                    <div class={s.cart__btns}>
                                        <button>{t('toCard')}</button>
                                        <button>{t('orderNow')}</button>
                                    </div>
                                </div>
                            })
                    }

                    {
                        (!items.length && !loader) && <h3>Təəssüf ki, heç bir şey tapılmadı...</h3>
                    }


                </div>

            </div>

            <Contact />

        </>
    )
}