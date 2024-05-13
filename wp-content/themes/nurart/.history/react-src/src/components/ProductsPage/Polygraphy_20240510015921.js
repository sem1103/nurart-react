
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

    const filterCategory = {
        businessCard: t('businessCard'),
        booklet: t('booklet'),
        flayer: t('flayer')
    };

    

    const {items, allItems, fetchData, filterByName, resetItems} = useDataSlice();
    const {loader} = useLoaderSlice();

    useEffect(() => {
        resetItems();
        !allItems.polygraphy.length && fetchData('http://localhost/wp-json/wp/v2/poliqrafiya_items/', 'http://localhost/wp-json/wp/v2/media/', 'http://localhost/wp-json/acf/v3/options/');        
    }, []);

   

    const searchByName =  useDebounce(value => {
            filterByName(value, 'polygraphy');
        }, 700);



    return (

        <>
            <Helmet>
                <title>Poliqrafiya işləri,Poliqrafiya isleri,cap xidmetleri </title>
                <meta name="description" content="NurArt  Azərbaycanın ən böyük Poliqrafiya şirkətləri arasındadı və Bütün növ çap və dizayn xidmətlərini təklif etməkdədir. " />
                <meta name="keywords" content="Təqvimlər,Teqvim,Kalendar,çap,print" />
            </Helmet>


            <div className={`container ${s.products__page}`}>
                <h1>{t('productPageTitle')}</h1>
                <FilterCategory filterCategory={filterCategory} func={searchByName} placeholder='Məhsulun adı ilə axtarış...' />

                <div className={`${s.carts} ${s.carts__wrapper}`}>
                     { loader ? <h3>Loading...</h3> : 
                        items.polygraphy.map(item => {
                          return  <div className={s.cart}>
                                <button className={s.favorite__add}></button>
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

                </div>


            </div>

            <Contact />

        </>
    )
}