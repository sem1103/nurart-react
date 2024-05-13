
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
                                  <svg id="Layer_2" width={30} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" data-name="Layer 2"><path d="m16 1a15 15 0 1 0 15 15 15.00543 15.00543 0 0 0 -15-15zm8.58 14.28-3.29 3.21.78 4.52a1.37614 1.37614 0 0 1 -.55 1.35 1.33742 1.33742 0 0 1 -.81.27 1.40043 1.40043 0 0 1 -.65-.17l-4.06-2.13-4.06 2.13a1.37684 1.37684 0 0 1 -1.46-.1 1.39594 1.39594 0 0 1 -.55-1.35l.77-4.52-3.28-3.21a1.36753 1.36753 0 0 1 -.35-1.42 1.43479 1.43479 0 0 1 1.12-.95l4.54-.65 2.03-4.11a1.37566 1.37566 0 0 1 2.48 0l2.03 4.11 4.55.65a1.40644 1.40644 0 0 1 1.11.95 1.38766 1.38766 0 0 1 -.35 1.42z" fill="rgb(87, 87, 87)"></path></svg>
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