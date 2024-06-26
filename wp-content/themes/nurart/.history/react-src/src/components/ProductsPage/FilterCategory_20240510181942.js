
import { useEffect, useRef, useState } from 'react';
import s from './ProductsPage.module.css';
import { NavLink } from 'react-router-dom';
import React from 'react';
import { useTranslation } from 'react-i18next';


export default function FilterCategory(props) {
    let [openFilter, setOpenFilter] = useState(false);
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
                <li><NavLink to='/prod/propmo-products'>{t('navPromo')}</NavLink></li>
                <li><NavLink to='/prod/vinyls'>{t('navVinil')}</NavLink></li>
            </ul>
            
            <div className={s.filter__search}>
                <div ref={filterElem} id={s.filter} className={`${openFilter ? s.open__filter : ''}`} onClick={() => setOpenFilter(!openFilter)}>
                    <p className={s.active__filter}>Filter</p>
                    <ul>
                        <li><button>Hamısı</button></li>
                    {
                    }
                    </ul>
                </div>               
                    <div id={s.search} >
                    <input type="text" placeholder={props.placeholder} onChange={(e)=> props.func(e.target.value)}/>
                    </div>
            </div>
            
        </>
    );
}