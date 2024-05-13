
import { useEffect, useRef, useState } from 'react';
import s from './ProductsPage.module.css';
import { NavLink } from 'react-router-dom';
import React from 'react';
import { useTranslation } from 'react-i18next';
import useDataSlice from '../../store/dataSlice';
import i18next from 'i18next';


export default function FilterCategory(props) {
    let [openFilter, setOpenFilter] = useState(false);
    const {searchInput, setInputValue, activeCategoryLabel} = useDataSlice();
    const {t} = useTranslation();
    const filterElem = useRef();

    useEffect(() => {
        const handleClickOutside = event => {
          if (filterElem.current && !filterElem.current.contains(event.target)) {
            setOpenFilter();
          }
        };
    
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
        
      }, [openFilter]);



    return (
        <>
            <ul className={`${s.categoryes} categoryes`}>
                <li><NavLink to='/prod/polygraphy' >{t('navPolygrafy')}</NavLink></li>
                <li><NavLink to='/prod/stamp'>{t('navStamb')}</NavLink></li>
                <li><NavLink to='/prod/plastic-cards'>{t('navCart')}</NavLink></li>
                <li><NavLink to='/prod/promo-products'>{t('navPromo')}</NavLink></li>
                <li><NavLink to='/prod/vinil-products'>{t('navVinil')}</NavLink></li>
            </ul>
            
            <div className={s.filter__search}>
                <div ref={filterElem} id={s.filter} className={`${openFilter ? s.open__filter : ''} ${s.filter}`} onClick={() => setOpenFilter(!openFilter)}>
                    <p className={s.active__filter}>{t('filter')} : {!activeCategoryLabel ? t('all') : i18next.language == 'az' ? activeCategoryLabel.split('&')[0] : activeCategoryLabel.split('&')[1]}</p>
                    <ul>
                        <li><button onClick={() => props.filterByCategory('', '')}>{t('all')}</button></li>
                    {
                        props.filterCategories.map(item => <li><button onClick={() => props.filterByCategory(item.value, item.label)}>{
                            i18next.language == 'az' ? item.label.split('&')[0] : item.label.split('&')[1]
                            }</button></li>)
                    }
                    </ul>
                </div>               
                    <div id={s.search} >
                    <input type="text" placeholder={props.placeholder} value={searchInput} onChange={(e)=> {
                        setInputValue(e.target.value)
                        props.filterByName(e.target.value)
                    }}/>
                    </div>
            </div>
            
        </>
    );
}