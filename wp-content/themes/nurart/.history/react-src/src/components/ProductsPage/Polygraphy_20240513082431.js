
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
import Loader from '../Loader/Loader';
import SimpleProd from '../ProductItems/SimpleProd';



export default function Polygraphy() {
    const { t } = useTranslation();
    const { items, allItems, filters, fetchData, filterByCategory, filterByName, resetItems, setActiveCategoryLabel } = useDataSlice();
    const { loader } = useLoaderSlice();

    useEffect(() => {
        resetItems();
        setActiveCategoryLabel('');
        !allItems.polygraphy.length && fetchData('http://localhost/wp-json/wp/v2/poliqrafiya_items/');
    }, []);



    const searchByName = useDebounce(value => {
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
                    {loader ? <Loader /> :
                        items.polygraphy.map(item => {
                            return <SimpleProd img={item.img} productAz={item.productAz} productRu={item.productRu} />
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