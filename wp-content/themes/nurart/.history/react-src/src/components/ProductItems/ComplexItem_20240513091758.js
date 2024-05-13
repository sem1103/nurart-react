import React, { useRef } from "react";
import s from '../ProductsPage/ProductsPage.module.css';
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import useDataSlice from "../../store/dataSlice";


export default function ComplexItem(props) {

    const { t } = useTranslation();
    const pElements = useRef([]);
    const {addFavoriteItem} = useDataSlice();

    const showMore = (ind) => {
        pElements.current[ind].classList.toggle(s.show__more)
    }

    return (
        <div key={props.productName} className={s.cart}>
            <button className={s.favorite__add} onClick={() => addFavoriteItem({...props, prodType: false})}>
                <svg id="Layer_2" enableBackground="new 0 0 32 32" width={30} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 0c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16zm7.428 15.206-2.989 2.913.706 4.113c.064.375-.09.754-.397.978-.174.126-.381.191-.588.191-.159 0-.319-.038-.465-.115l-3.695-1.943-3.694 1.942c-.335.176-.744.148-1.053-.076-.308-.224-.462-.603-.397-.978l.706-4.113-2.989-2.913c-.273-.265-.371-.663-.254-1.025.118-.362.431-.626.808-.681l4.13-.6 1.847-3.742c.336-.683 1.457-.683 1.793 0l1.847 3.742 4.13.6c.377.055.689.319.808.681.116.362.018.76-.254 1.026zm-5.492-.403 2.645.384-1.914 1.865c-.235.23-.343.561-.287.885l.452 2.634-2.366-1.244c-.146-.077-.305-.115-.465-.115s-.319.038-.465.115l-2.366 1.244.452-2.634c.056-.324-.052-.655-.287-.885l-1.914-1.865 2.645-.384c.326-.047.607-.252.753-.547l1.181-2.396 1.183 2.396c.145.295.426.5.753.547z" fill="#575757"></path>
                </svg>
            </button>
            <div className={s.cart__name}>
                <img src={props.boxImg} className={s.have__box} alt="hav box" style={{ visibility: props.haveBox ? 'initial' : 'hidden' }} />

                <div>
                    <h3>{props.paintItem ? t('stampPaintName') : t('stambId')}: <span className={s.prod__name}>{props.productName}</span></h3>
                    {!props.paintItem && <p>{t('props.stambSize')}: <span className={s.prod__size}>{props.stambSize}</span></p>}
                </div>
            </div>

            <div className={s.product}>
                <img src={props.img} alt="" className={s.prod__img} />
                <div className={`${s.prod__desc} ${props.paintItem ? s.paint__desc : ''}`}>
                    {
                        props.paintItem ?
                            <div onClick={() => showMore(props.ind)} ref={el => pElements.current[props.ind] = el} dangerouslySetInnerHTML={{ __html: i18next.language == 'az' ? props.descAZ : props.descRu }} />
                            :
                            <div>
                                <h5>{t('changePillows')}</h5>
                                <ul className={s.pillows}>
                                    {
                                        i18next.language == 'az' ? props.changePillowsAz.map(elem => <li><span>{elem.pillow}</span></li>)
                                            :
                                            props.changePillowsRu.map(elem => <li><span>{elem.pillow}</span></li>)
                                    }
                                </ul>
                            </div>
                    }
                    <img src={props.exampleStamb} alt="" className={s.example} />
                </div>
            </div>

            <div class={s.cart__btns}>
                <button>{t('toCard')}</button>
                <button>{t('orderNow')}</button>
            </div>
        </div>
    )
}