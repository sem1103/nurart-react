
import React, { useRef, useState } from 'react'
import { Helmet } from 'react-helmet'
import Contact from '../Contact/Contact'
import s from './ProductsPage.module.css'
import FilterCategory from './FilterCategory'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react';
import i18next from 'i18next'
import useLoaderSlice from '../../store/loaderSlice'
import useDebounce from '../../hooks/useDebounce'
import useDataSlice from '../../store/dataSlice'


export default function Stamp() {
    const { t } = useTranslation();    
    const pElements = useRef([]);

    const {items, allItems, filters, fetchData, filterByCategory, filterByCode, resetItems} = useDataSlice();
    const {loader} = useLoaderSlice();

    useEffect(() => {
        resetItems();
        !allItems.shtamp.length && fetchData('http://localhost/wp-json/wp/v2/shtamp_items/', 'http://localhost/wp-json/wp/v2/media/');        
    }, []);

    useEffect(()=>{
    }, [allItems.shtamp])
    

    const searchByName =  useDebounce(value => {
        filterByCode(value, 'shtamp')
    }, 700);



    const filterCategory = (category, label) => {
        filterByCategory(category, 'shtamp', label);
    }


    const showMore = (ind) => {
        pElements.current[ind].classList.toggle(s.show__more)
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
                <FilterCategory filterCategories={filters.shtamp} filterByCategory={filterCategory} filterByName={searchByName} placeholder='Məhsulun kodu ilə axtarış...' />

                <div className={`${s.stamp__carts} ${s.carts__wrapper}`}>

                    {
                        loader ? <h3>Loading...</h3>
                            :
                            items.shtamp.map((item, ind) => {
                                return <div key={item.productName} className={s.cart}>
                                   <button className={s.favorite__add}>
                                  <svg width={30} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g id="Layer_63" data-name="Layer 63"><path d="m29.29 48.34 18.01 12.11h.61v-53.02h-34.95v53.02h1.64z" fill="#78b9eb" style="fill: rgb(87, 87, 87);"></path><g fill="#006df0"><path d="m45.91 20.5a2 2 0 0 0 -2 2v33.67l-13.48-9.4a2 2 0 0 0 -2.29 0l-13.48 9.4v-44.74h18.19a2 2 0 0 0 0-4h-20.19a2 2 0 0 0 -2 2v50.57a2 2 0 0 0 3.14 1.64l15.49-10.79 15.48 10.79a2 2 0 0 0 1.14.36 2 2 0 0 0 .93-.23 2 2 0 0 0 1.07-1.77v-37.5a2 2 0 0 0 -2-2z" fill="#006df0" style="fill: rgb(48, 48, 48);"></path><path d="m51.34 7.43h-3.43v-3.43a2 2 0 0 0 -4 0v3.43h-3.43a2 2 0 0 0 0 4h3.43v3.43a2 2 0 0 0 4 0v-3.43h3.43a2 2 0 0 0 0-4z" fill="#006df0" style="fill: rgb(48, 48, 48);"></path></g></g></svg>
                                </button>
                                    <div className={s.cart__name}>
                                        <img src={item.boxImg} className={s.have__box} alt="hav box" style={{ visibility: item.haveBox ? 'initial' : 'hidden' }} />

                                        <div>
                                            <h3>{item.paintItem ? t('stampPaintName') : t('stambId')}: <span className={s.prod__name}>{item.productName}</span></h3>
                                            {!item.paintItem && <p>{t('stambSize')}: <span className={s.prod__size}>{item.stambSize}</span></p>} 
                                        </div>
                                    </div>

                                    <div className={s.product}>
                                        <img src={item.img} alt="" className={s.prod__img} />
                                        <div className={`${s.prod__desc} ${item.paintItem ? s.paint__desc : ''}`}>
                                            {
                                                item.paintItem ? 
                                                <div onClick={() => showMore(ind)} ref={el => pElements.current[ind] = el} dangerouslySetInnerHTML={{__html: i18next.language == 'az' ? item.descAZ : item.descRu}} />
                                                :
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
                                            }
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
                        (!items.shtamp.length && !loader) && <h3>Təəssüf ki, heç bir şey tapılmadı...</h3>
                    }


                </div>

            </div>

            <Contact />

        </>
    )
}