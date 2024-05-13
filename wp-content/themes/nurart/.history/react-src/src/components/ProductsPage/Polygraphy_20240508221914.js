
import { Helmet } from 'react-helmet'
import Contact from '../Contact/Contact'
import s from './ProductsPage.module.css'
import FilterCategory from './FilterCategory'
import { useTranslation } from 'react-i18next'
import React from 'react';
import { useEffect } from 'react'
import { useState } from 'react'
import i18next from 'i18next'
import useLoaderSlice from '../../store/loaderSlice'
import usePolygrafySlice from '../../store/polygrafy'



export default function Polygraphy() {
    const { t } = useTranslation();

    const filterCategory = {
        businessCard: t('businessCard'),
        booklet: t('booklet'),
        flayer: t('flayer')
    };


    // const {items, fetchData} = usePolygrafySlice();
    const {loader, changeLoader} = useLoaderSlice();

    useEffect(() => {
        // console.log(fetchData);
    }, []);

    const debounce = (func, delay) => {
        let timerId, loadingTime;
        return function () {
            clearTimeout(timerId);
            clearTimeout(loadingTime);
            const fnCall = () => {    
                func.apply(this, arguments);
                loadingTime = setTimeout(() => {
                    changeLoader(false);
                }, delay);
            }
            timerId = setTimeout(fnCall, delay);
        };
    };

    const searchByName =  debounce(value => {
            changeLoader(true);
            setItems(prev => {
                return  allItems.filter(item => item.stambId.includes(value));
            })
            console.log(value);
        }, 500);



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

                <div className={`${s.polygraphy__carts} ${s.carts__wrapper}`}>
                    { loader ? <h3>Loading...</h3> : 
                        items.map(item => {
                          return  <div className={s.cart}>
                                <button className={s.favorite__add}></button>
                                <img src={item.img} alt="" className={s.cart__img} />
                                <div className={s.cart__desc}>
                                    <h3>{i18next.language == 'az' ? item.productAz.productName : item.productRu.productName}</h3>
                                    <p>{i18next.language == 'az' ? item.productAz.desc : item.productRu.desc}</p>

                                    <div className={s.cart__btns}>
                                        <button>{t('toCard')}</button>
                                        <button>{t('orderNow')}</button>
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