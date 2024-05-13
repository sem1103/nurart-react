
import { Helmet } from 'react-helmet';
import Contact from '../Contact/Contact';
import s from './ProductsPage.module.css';
import FilterCategory from './FilterCategory';
import { useTranslation } from 'react-i18next';
import React from 'react';
import { useEffect } from 'react';
import i18next from 'i18next';
import useLoaderSlice from '../../store/loaderSlice';
import useDebounce from '../../hooks/useDebounce';
import useDataSlice from '../../store/dataSlice';



export default function Polygraphy() {
    const { t } = useTranslation();
    const {items, allItems, filters, fetchData, filterByCategory, filterByName, resetItems} = useDataSlice();
    const {loader} = useLoaderSlice();


    

    

    useEffect(() => {
        resetItems();
        !allItems.polygraphy.length && fetchData('http://localhost/wp-json/wp/v2/poliqrafiya_items/', 'http://localhost/wp-json/wp/v2/media/');        
    }, []);

   

    const searchByName =  useDebounce(value => {
            filterByName(value, 'polygraphy');
    }, 700);
    const filterCategory = (category, label) => {
        filterByCategory(category, 'polygraphy', label);
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
                <FilterCategory filterCategories={filters.polygraphy} filterByCategory={filterCategory} filterByName={searchByName} placeholder='Məhsulun adı ilə axtarış...' />

                <div className={`${s.carts} ${s.carts__wrapper}`}>
                     { loader ? <h3>Loading...</h3> : 
                        items.polygraphy.map(item => {
                          return  <div className={s.cart}>
                                <button className={s.favorite__add}>
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7 4C18.87 4 21 6.98 21 9.76C21 15.39 12.16 20 12 20C11.84 20 3 15.39 3 9.76C3 6.98 5.13 4 8.3 4C10.12 4 11.31 4.91 12 5.71C12.69 4.91 13.88 4 15.7 4Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                </button>
                                <img src={item.img} alt="" className={s.cart__img} />
                                <div className={s.cart__desc}>
                                    <h3>{i18next.language == 'az' ? item.productAz.productName : item.productRu.productName}</h3>
                                    <div dangerouslySetInnerHTML={{__html: i18next.language == 'az' ? item.productAz.desc : item.productRu.desc}} />

                                    <div className={s.cart__btns}>
                                        <button>{t('toCard')}</button>
                                        <button>{t('orderNow')}</button>
                                    </div>
                                </div>
                            </div>
                        })
                    } 


{
                        (!items.polygraphy.length && !loader) && <h3>Təəssüf ki, heç bir şey tapılmadı...</h3>
                    }
                </div>


            </div>

            <Contact />

        </>
    )
}