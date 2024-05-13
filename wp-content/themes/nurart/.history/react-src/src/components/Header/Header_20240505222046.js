
import {useEffect, useRef, useState } from 'react';
import s from './Header.module.css'
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import React from 'react';



function Header() {
    let [activeBurger, setActiveBurger] = useState();
    let {t, i18n} = useTranslation();

    
    const changeLang = lang =>{
        console.dir(useTranslation);
        i18n.changeLanguage(lang)
    };
    const productNav = useRef(null);

    let location = useLocation();

    useEffect(()=>{
        window.location.pathname.includes('/prod')  ?   productNav.current.className = ' active' : productNav.current.className = '';
    },[location.pathname])




    return (
        <>
            <header className={activeBurger ? s.active__burger : activeBurger === false ? s.deactive__burger : ''}>
                <div className="container">
                    <div className={`logo ${s.logo}`}>
                        <Link to="/">NurArt</Link>
                    </div>
                    <div className={s.right}>
                        <div className={s.burger}>
                            <div className={s.burger__btn}onClick={() => setActiveBurger(!activeBurger)}>
                                <hr className={s.stick} />
                                <hr className={s.stick} />
                                <hr className={s.stick} />
                            </div>
                        </div>

                        <div className={s.menu}>

                            <nav>
                                <ul>
                                    <li>
                                        <NavLink to='/prod/polygraphy' onClick={() => {
                                            setActiveBurger(false);
                                        }}  ref={productNav}>{t('products')}</NavLink>
                                       </li>
                                       <li  className={s.submenu}>
                                       {t('services')}
                                        <ul>
                                            <li><NavLink onClick={() => setActiveBurger(false)} to='design-service'>{t('design')}</NavLink></li>
                                            <li><NavLink onClick={() => setActiveBurger(false)} to='digit-print'>{t('digitPrint')}</NavLink></li>
                                            <li><NavLink onClick={() => setActiveBurger(false)} to='ofset-print'>{t('ofsetPrint')}</NavLink></li>
                                        </ul>
                                       </li>
                                       <li>
                                        <NavLink to='about' onClick={() => setActiveBurger(false)}>{t('about')}</NavLink>
                                       </li>
                                       <li>
                                        <NavLink to='sa' onClick={() => setActiveBurger(false)}>{t('contact')}</NavLink>
                                       </li>
                                </ul>
                            </nav>

                            <ul className={s.header__tools}>
                                <li>
                                    <a href="">Sifariş et</a>
                                </li>
                                <li className={s.favorites}>
                                    <a href="">


                                       
                                        Seçilmişlər
                                    </a>
                                </li>
                                <li className={s.card}>
                                    <a href="">
                                      
                                        Səbət
                                    </a>
                                </li>
                            </ul>
                            <div className={s.lang}>
                                <button onClick={()=> changeLang('az')}>az</button> | <button onClick={()=> changeLang('ru')} >ru</button>
                            </div>

                        </div>
                    </div>
                </div>

            </header>
        
        </>
    )
}

export default Header;