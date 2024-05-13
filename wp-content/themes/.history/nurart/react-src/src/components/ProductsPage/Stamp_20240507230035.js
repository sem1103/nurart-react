
import { Helmet } from 'react-helmet'
import Contact from '../Contact/Contact'
import s from './ProductsPage.module.css'
import FilterCategory from './FilterCategory'
import { useTranslation } from 'react-i18next'
import React from 'react'

export default function Stamp() {
    const {t} = useTranslation();

    const filterCategory = {
        businessCard: t('businessCard'),
        booklet: t('booklet'),
        flayer: t('flayer')
    };

    return (

        <>
        <Helmet>
        <title>Poliqrafiya işləri,Poliqrafiya isleri,cap xidmetleri </title>
        <meta name="description" content="NurArt  Azərbaycanın ən böyük Poliqrafiya şirkətləri arasındadı və Bütün növ çap və dizayn xidmətlərini təklif etməkdədir. " />
        <meta name="keywords" content="Təqvimlər,Teqvim,Kalendar,çap,print"/>
        </Helmet>


            <div className={`container ${s.products__page}`}>
                <h1>{t('productPageTitle')}</h1>
                <FilterCategory  filterCategory={filterCategory} />

                <div className={`${s.stamp__carts} ${s.carts__wrapper}`}>

                    <div className={s.cart}>
                        <div className={s.cart__name}>
                            <img src="/public/assets/img/stamp/box.svg" alt="hav box" />

                            <div>
                                <h3>{t('stambId')}: <span className={s.prod__name}>4727</span></h3>
                                <p>{t('stambSize')}: <span className={s.prod__size}>60х40mm</span></p>
                            </div>
                        </div>
                        <button class={s.favorite__add}>
                          
                            </button>

                        <div className={s.product}>
                            <img src="/public/assets/img/stamp/4727.png" alt="" className={s.prod__img} />
                            <div className={s.prod__desc}>
                                <h5>Сменные подушки</h5>
                                <ul className={s.pillows}>
                                    <li><span>Multi Color Impression</span></li>
                                    <li><span>1-цветные 6/4927</span></li>
                                    <li><span>2-цветные 6/4927/2</span></li>
                                    <li><span>Для спиртовой краски</span></li>
                                </ul>
                                <img src="/public/assets/img/stamp/examples/4727.png" alt="" className={s.example} />
                            </div>
                        </div>

                        <div class={s.cart__btns}>
                            <button>Səbətə at</button><button>Sifariş et</button>
                        </div>
                    </div>
                </div>

            </div>

            <Contact />

        </>
    )
}