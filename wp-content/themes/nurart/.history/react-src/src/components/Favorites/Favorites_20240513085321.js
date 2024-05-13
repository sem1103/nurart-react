import React from "react";
import { Helmet } from "react-helmet";
import s from '../ProductsPage/ProductsPage.module.css'

export default function Favorites(){
    return(
        <>
             <Helmet>
                <title>Poliqrafiya işləri,Poliqrafiya isleri,cap xidmetleri </title>
                <meta name="description" content="NurArt  Azərbaycanın ən böyük Poliqrafiya şirkətləri arasındadı və Bütün növ çap və dizayn xidmətlərini təklif etməkdədir. " />
                <meta name="keywords" content="Təqvimlər,Teqvim,Kalendar,çap,print" />
            </Helmet>


        <div className={`container ${s.favorites}`}>
            <h1>Seçilmişlər</h1>
        </div>
        </>
    )
}