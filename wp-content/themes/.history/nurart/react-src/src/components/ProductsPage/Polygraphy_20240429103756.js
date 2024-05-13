import { Helmet } from 'react-helmet'
import Contact from '../Contact/Contact'
import s from './ProductsPage.module.css'
import FilterCategory from './FilterCategory'
import { useTranslation } from 'react-i18next'

export default function Polygraphy() {
    const { t } = useTranslation();

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
                <meta name="keywords" content="Təqvimlər,Teqvim,Kalendar,çap,print" />
            </Helmet>


            <div className={`container ${s.products__page}`}>
                <h1>Məhsullarımız</h1>
                <FilterCategory filterCategory={filterCategory} />

                <div className={`${s.polygraphy__carts} ${s.carts__wrapper}`}>
                    <div className={s.cart}>
                        <button className={s.favorite__add}>
                            <svg viewBox="0 0 24 24" width="25px" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#fff" stroke-width="2" fill="transparent" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                        </button>
                        <img src="/public/assets/img/polygraphy/calender.png" alt="" className={s.cart__img} />
                        <div className={s.cart__desc}>
                            <h3>Təqvim</h3>
                            <p>Təqvim / Bristol / Kardon / Dəri / 21x15
                                Dayaq 350 qr + laminasiyaVərəqin ölçüsü: 21x15 sm, 250 qr kağız </p>

                            <div className={s.cart__btns}>
                                <button>Səbətə at</button>
                                <button>Sifariş et</button>
                            </div>
                        </div>
                    </div>

                    <div className={s.cart}>
                        <button className={s.favorite__add}>
                            <svg viewBox="0 0 24 24" width="25px" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#fff" stroke-width="2" fill="transparent" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                        </button>
                        <img src="/public/assets/img/polygraphy/calender.png" alt="" className={s.cart__img} />
                        <div className={s.cart__desc}>
                            <h3>Təqvim</h3>
                            <p>Təqvim / Bristol / Kardon / Dəri / 21x15
                                Dayaq 350 qr + laminasiyaVərəqin ölçüsü: 21x15 sm, 250 qr kağız </p>

                            <div className={s.cart__btns}>
                                <button>Səbətə at</button>
                                <button>Sifariş et</button>
                            </div>
                        </div>
                    </div>

                    <div className={s.cart}>
                        <button className={s.favorite__add}>
                            <svg viewBox="0 0 24 24" width="25px" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#fff" stroke-width="2" fill="transparent" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                        </button>
                        <img src="/public/assets/img/polygraphy/calender.png" alt="" className={s.cart__img} />
                        <div className={s.cart__desc}>
                            <h3>Təqvim</h3>
                            <p>Təqvim / Bristol / Kardon / Dəri / 21x15
                                Dayaq 350 qr + laminasiyaVərəqin ölçüsü: 21x15 sm, 250 qr kağız </p>

                            <div className={s.cart__btns}>
                                <button>Səbətə at</button>
                                <button>Sifariş et</button>
                            </div>
                        </div>
                    </div>

                    <div className={s.cart}>
                        <button className={s.favorite__add}>
                            <svg viewBox="0 0 24 24" width="25px" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#fff" stroke-width="2" fill="transparent" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                        </button>
                        <img src="/public/assets/img/polygraphy/calender.png" alt="" className={s.cart__img} />
                        <div className={s.cart__desc}>
                            <h3>Təqvim</h3>
                            <p>Təqvim / Bristol / Kardon / Dəri / 21x15
                                Dayaq 350 qr + laminasiyaVərəqin ölçüsü: 21x15 sm, 250 qr kağız </p>

                            <div className={s.cart__btns}>
                                <button>Səbətə at</button>
                                <button>Sifariş et</button>
                            </div>
                        </div>
                    </div>

                </div>


            </div>

            <Contact />

        </>
    )
}