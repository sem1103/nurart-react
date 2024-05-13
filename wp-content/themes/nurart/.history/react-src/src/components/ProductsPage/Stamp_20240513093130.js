
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
import Loader from '../Loader/Loader'
import ComplexItem from '../ProductItems/ComplexItem'



export default function Stamp() {
    const { t } = useTranslation();    

    const {items, allItems, filters, fetchData, filterByCategory, filterByCode, resetItems, setActiveCategoryLabel} = useDataSlice();
    const {loader} = useLoaderSlice();

    useEffect(() => {
        resetItems();
        setActiveCategoryLabel('');
        !allItems.shtamp.length && fetchData('http://localhost/wp-json/wp/v2/shtamp_items/');        
    }, []);

    

    const searchByName =  useDebounce(value => {
        filterByCode(value, 'shtamp')
    }, 700);

    const filterCategory = (category, label) => {
        filterByCategory(category, 'shtamp', label);
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

                <div className={s.carts__wrapper}>

                    {
                        loader ? <Loader />
                            :
                            items.shtamp.map((item, ind) => {
                                return <ComplexItem productName={item.productName} boxImg={item.boxImg}  haveBox={item.haveBox} paintItem={item.paintItem} stambSize={item.stambSize} img={item.img} descAZ={item.descAZ} descRu={item.descRu} changePillowsAz={item.changePillowsAz} changePillowsRu={item.changePillowsRu} exampleStamb={item.exampleStamb} ind={ind}/>
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