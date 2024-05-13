import React from "react";
import { Helmet } from "react-helmet";
import s from '../ProductsPage/ProductsPage.module.css' 
import useDataSlice from "../../store/dataSlice";

export default function Favorites(){

    const {favoriteItems} = useDataSlice();
    return(
        <>
             <Helmet>
                <title>Poliqrafiya işləri,Poliqrafiya isleri,cap xidmetleri </title>
                <meta name="description" content="NurArt  Azərbaycanın ən böyük Poliqrafiya şirkətləri arasındadı və Bütün növ çap və dizayn xidmətlərini təklif etməkdədir. " />
                <meta name="keywords" content="Təqvimlər,Teqvim,Kalendar,çap,print" />
            </Helmet>


        <div className={`container ${s.products__page}`}>
            <h1>Seçilmişlər</h1>

            <div className={s.carts__wrapper}>

            </div>
        </div>
        </>
    )
}