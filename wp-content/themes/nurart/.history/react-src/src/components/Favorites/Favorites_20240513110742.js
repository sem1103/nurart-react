import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import s from '../ProductsPage/ProductsPage.module.css' 
import useDataSlice from "../../store/dataSlice";
import SimpleProd from "../ProductItems/SimpleProd";
import ComplexItem from "../ProductItems/ComplexItem";
import Contact from "../Contact/Contact";

export default function Favorites(){

    const {favoriteItems, getFavoriteItems} = useDataSlice();
    // useEffect(() => getFavoriteItems(), [])
    return(
        <>
             <Helmet>
                <title>Poliqrafiya işləri,Poliqrafiya isleri,cap xidmetleri </title>
                <meta name="description" content="NurArt  Azərbaycanın ən böyük Poliqrafiya şirkətləri arasındadı və Bütün növ çap və dizayn xidmətlərini təklif etməkdədir. " />
                <meta name="keywords" content="Təqvimlər,Teqvim,Kalendar,çap,print" />
            </Helmet>


        <div className={`container ${s.products__page}`}>
            <h1>Seçilmişlər</h1>

            <div className={`${s.carts__wrapper} ${s.carts}`}>
                {
                    favoriteItems.map((item, ind) => {
                        return item.prodType ? 
                        <SimpleProd img={item.img} productAz={item.productAz} productRu={item.productRu}  />
                        :
                        <ComplexItem productName={item.productName} boxImg={item.boxImg}  haveBox={item.haveBox} paintItem={item.paintItem} stambSize={item.stambSize} img={item.img} descAZ={item.descAZ} descRu={item.descRu} changePillowsAz={item.changePillowsAz} changePillowsRu={item.changePillowsRu} exampleStamb={item.exampleStamb} ind={ind} favorite={item.favorite}/>
                    })
                }
            </div>
        </div>

        <Contact />
        </>
    )
}