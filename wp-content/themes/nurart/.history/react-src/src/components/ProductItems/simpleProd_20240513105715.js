import i18next from "i18next";
import React from "react";
import s from '../ProductsPage/ProductsPage.module.css'
import { useTranslation } from "react-i18next";
import useDataSlice from "../../store/dataSlice";


export default function SimpleProd(props) {
    const {t} = useTranslation();
    const {addFavoriteItem, removeFavoriteItem} = useDataSlice();
    console.log(props);
    return (
        <div className={`${s.cart} ${s.simpleProd}`}>
            <button className={s.favorite__add} onClick={() => !props.favorite ? addFavoriteItem({...props, prodType: true, favorite: false}) : removeFavoriteItem({...props, prodType: true, favorite: false})}>
                <svg id="Layer_2" enableBackground="new 0 0 32 32" width={30} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 0c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16zm7.428 15.206-2.989 2.913.706 4.113c.064.375-.09.754-.397.978-.174.126-.381.191-.588.191-.159 0-.319-.038-.465-.115l-3.695-1.943-3.694 1.942c-.335.176-.744.148-1.053-.076-.308-.224-.462-.603-.397-.978l.706-4.113-2.989-2.913c-.273-.265-.371-.663-.254-1.025.118-.362.431-.626.808-.681l4.13-.6 1.847-3.742c.336-.683 1.457-.683 1.793 0l1.847 3.742 4.13.6c.377.055.689.319.808.681.116.362.018.76-.254 1.026zm-5.492-.403 2.645.384-1.914 1.865c-.235.23-.343.561-.287.885l.452 2.634-2.366-1.244c-.146-.077-.305-.115-.465-.115s-.319.038-.465.115l-2.366 1.244.452-2.634c.056-.324-.052-.655-.287-.885l-1.914-1.865 2.645-.384c.326-.047.607-.252.753-.547l1.181-2.396 1.183 2.396c.145.295.426.5.753.547z" fill="#575757"></path>
                </svg>
            </button>
            <img src={props.img} alt="" className={s.cart__img} />
            <div className={s.cart__desc}>
                <h3>{i18next.language == 'az' ? props.productAz.productName : props.productRu.productName}</h3>
                <div dangerouslySetInnerHTML={{ __html: i18next.language == 'az' ? props.productAz.desc : props.productRu.desc }} />

                <div className={s.cart__btns}>
                    <button>{t('toCard')}</button>
                    <button>{t('orderNow')}</button>
                </div>
            </div>
        </div>
    )
}